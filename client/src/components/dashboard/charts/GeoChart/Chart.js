import React, { Component } from 'react';
import * as d3 from "d3"
import d3Tip from "d3-tip"

class Chart extends Component {
    constructor(){
        super();
        this.state = {};
    }

    RenderGeoChart = () =>{
        const{width, height, padding, data, WorldCountries} = this.props;
        const newPadding = padding  * 2;
        const ChartWidth = width - newPadding;
        const ChartHeight = height - newPadding;
        const sessionsById = {};
        const rows = data[0].rows;
        const newData = [];

        if(rows){
            rows.forEach((r) => { 
                WorldCountries.features.forEach((c) => {
                    if(c.properties.name === r.dimensions[0]){
                        newData.push({id: c.id, country: r.dimensions[0], sessions: r.metrics[0].values[0]})
                    }
                })
            });
            newData.forEach(function(d) { sessionsById[d.id] = +d.sessions; });
        }  

        WorldCountries.features.forEach(function(d) {
            let sessionsVal =  sessionsById[d.id] || 0;
            d.sessions = sessionsVal
        });
      

        // configuration
        const colorVariable = 'sessions';
        const format = d3.format(",");

        // Set tooltips
        const tip = d3Tip()
                        .attr('class', 'd3-tip')
                        .offset([-5, 0])
                        .html(d => `<strong>Country: </strong><span class='details'>${d.properties.name}<br></span><strong>Sessions: </strong><span class='details'>${format(d[colorVariable])}</span>`);

        const svg = d3.select("#GeoChart")
                        .append("svg")
                        .attr("viewBox", "0 -200 1000 700")
                        .attr("height", ChartHeight)
                        .attr("width", ChartWidth)
                        .attr("preserveAspectRatio", "none")
   
        const projection = d3.geoMercator()

        // Data and color scale
        const color = d3.scaleQuantile()
                        .range(d3.schemeBlues[7])
                        .domain(d3.extent(newData, d => d[colorVariable]));;      

        svg.call(tip);

                        
        let mouseOver = function(d) {
            tip.show(d, this);
            d3.select(this)
                .style("opacity", 1)
                .style("stroke","#222")
                .style("stroke-width", 3)
        }
                
        let mouseLeave = function(d) {
            tip.hide(d, this);
            d3.select(this)
                .style("stroke", "#808080")
                .style('fill-opacity', 0.8)
                .style('stroke-width', 1)
        }

        svg.append("g")
            .selectAll("path")
            .data(WorldCountries.features)
            .enter()
            .append("path")
            // draw each country
            .attr("d", d3.geoPath()
                            .projection(projection)
            )
            // set the color of each country
            .style('fill', d => {
                if (typeof sessionsById[d.id] !== 'undefined') {
                    return color(sessionsById[d.id])
                } 
                return '#d8d8d8'
            })
            .style('stroke', "#808080")
            .style('stroke-width', 1)
            .attr("class", function(d){ return "Country" } )
            .style("opacity", 0.8)
            .on("mouseover", mouseOver )
            .on("mouseout", mouseLeave )
    }

    ReRenderGeoChart = () =>{
        const svg =  d3.select(`#GeoChart svg`);
        const tip = d3.select('.d3-tip');
        tip.remove();
        svg.selectAll('path').data(this.props.WorldCountries.features).exit().remove();
        svg.remove();
        this.RenderGeoChart();
    }

    ReStyleGeoChart = () =>{
        let resizedFn;
        clearTimeout(resizedFn);

        resizedFn = setTimeout(() => {
            const svg =  d3.select(`#GeoChart svg`);
            const tip = d3.select('.d3-tip');
            tip.remove();
            svg.selectAll('path').data(this.props.WorldCountries.features).exit().remove();
            svg.remove();
            this.RenderGeoChart();
        }, 200)
    }

    componentDidMount(){
        this.RenderGeoChart();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props){
            if(prevProps.data !== this.props.data){
                this.ReRenderGeoChart();
            }
            if(prevProps.windowWidth !== this.props.windowWidth){
                this.ReStyleGeoChart();
            }
        }
    }

    render(){
        return(
            <figure id="GeoChart">

            </figure> 
        )
    }

}

export default Chart;