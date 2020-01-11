import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from "d3";
import d3Tip from "d3-tip";
import { withStyles } from '@material-ui/core/styles';

const GeoBarChartStyles = (theme) =>({
    d3TipBarGeo:{
        lineHeight: 1.5,
        fontWeight: 400,
        fontFamily: `"avenir next", Arial, sans-serif`,
        padding: 6,
        background: "rgba(0, 0, 0, 0.6)",
        color: "#74c3ff",
        borderRadius: 1,
        pointerEvents: "none",
        zIndex: 9999,
        "&:after":{
            boxSizing: "border-box",
            display: "inline",
            fontSize: 8,
            width: "100%",
            lineHeight: 1.5,
            color: "rgba(0, 0, 0, 0.6)",
            position: "absolute",
            pointerEvents: "none"
        },
        "&.n:after":{
            content: `"\\25BC"`,
            margin: "-1px 0 0 0",
            top: "100%",
            left: "0",
            textAlign: "center"
        },
        "&.e:after":{
            content: `"\\25C0"`,
            margin: "-4px 0 0 0",
            top: "50%",
            left: "-8px",
        },
        "&.s:after":{
            content: `"\\25B2"`,
            margin: "0 0 1px 0",
            top: "-8px",
            left: 0,
            textAlign: "center"
        },
        "&.w:after":{
            content: `"\\25B6"`,
            margin: "-4px 0 0 -1px",
            top: "50%",
            left: "100%",
        },  
    },
    d3TipBarGeoDetailts:{
        color: "#fff"
    },
    BarGeoYAxis:{
        "& path, line":{
            opacity: 0,
            color: "#fff",
        },
        "& text":{
            fontWeight: "bold",
            fontSize: 12,  
        }
    },
    BarGeoBar:{
        fill: "#38a8fd"
    }
});

class GeoBarChart extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        };
    }

    RenderGeoBarChart = (preventAnimation) =>{
        const{data, padding, width, windowWidth, classes} = this.props;
        const newPadding = padding  * 2;
        const ChartWidth = (width - newPadding);
        let ChartHeight = ChartWidth * 0.4;
        let barWidth = ChartWidth * 0.75;
        let leftAxisMargin = barWidth * 0.22;

        if(windowWidth < 600){
            barWidth = ChartWidth * 0.45;
            leftAxisMargin = barWidth * 0.75;
        }

        const rows = data[0].rows;
        let newDataSet = [];

        if(rows){
            const maxVal = data[0].totals[0].values[0];
            rows.forEach((r)=>{
                let val = r.metrics[0].values[0];
                let percentage = ((val / maxVal) * 100).toFixed();
                newDataSet.push({country: r.dimensions[0], value: val, percentage: percentage})
            })

            newDataSet = newDataSet.sort((a, b)=>d3.ascending(a.value, b.value));
    
            this.setState({data:newDataSet});

            const format = d3.format(",");
            
            // Set tooltips
            const tip = d3Tip()
                            .attr('class', classes.d3TipBarGeo)
                            .offset([-5, 0])
                            .html(d => `<strong>Country: </strong><span class=${classes.d3TipBarGeoDetailts}>${d.country}<br></span><strong>Sessions: </strong><span class=${classes.d3TipBarGeoDetailts}>${format(d.value)}</span>`);

            const svg = d3.select("#GeoBarChart")
                            .append("svg")
                            .attr("width", ChartWidth)
                            .attr("height", ChartHeight)
                            .append("g")
                            .style("transform", `translateX(${leftAxisMargin}px)`)

            svg.call(tip);
    
            const x = d3.scaleLinear()
                            .range([0, barWidth])
                            .domain([0, d3.max(newDataSet, function (d) {
                                return d.value;
                            })]);
                
            const y = d3.scaleBand()
                            .range([ChartHeight, 0])
                            .round(0.1)
                            .domain(newDataSet.map(function (d) {
                                return d.country;
                            }));    
                            
             //make y axis to show bar names
            const yAxis = d3.axisLeft(y)
                            .ticks(0)
                     
                            
            let barHeight =  y.bandwidth() / 2;
            let barY =  barHeight / 2;            
            let textY = barHeight + 4;

            if(newDataSet.length === 1){
                barHeight = y.bandwidth() / 8;
                barY = (ChartHeight / 2) - (barHeight /2);
                textY = (ChartHeight / 2) + 4;
            }

            if(newDataSet.length === 2){
                barHeight = y.bandwidth() / 4;
                barY = barHeight * 1.5;
                textY = (barHeight * 2) + 4 ;
            }
            

            svg.append("g")
                .attr("class", classes.BarGeoYAxis)
                .call(yAxis)

            const bars = svg.selectAll(`.${classes.BarGeoBar}`)
                .data(newDataSet)
                .enter()
                .append("g")    

            if(!preventAnimation){
                //append rects
                bars.append("rect")
                    .attr("class", classes.BarGeoBar)
                    .attr("y", function (d) {
                        return y(d.country) + barY;
                    })
                    .attr("width", 0)
                    .attr("height", barHeight)
                    .attr("x", 0)
                    .transition()
                    .duration(1500)
                    .attr("width", function (d) {
                        return x(d.value);
                    })
            }else{
                //append rects
                bars.append("rect")
                    .attr("class", classes.BarGeoBar)
                    .attr("y", function (d) {
                        return y(d.country) + barY;
                    })
                    .attr("height", barHeight)
                    .attr("x", 0)
                    .attr("width", function (d) {
                        return x(d.value);
                    })                
            }    

            //add a value label to the right of each bar
            bars.append("text")
                .attr("class", "label")
                //y position of the label is halfway down the bar
                .attr("y", function (d) {
                    return y(d.country) + textY;
                })
                //x position is 3 pixels to the right of the bar
                .attr("x", function (d) {
                    return x(d.value) + 3;
                })
                .text(function (d) {
                    return `${d.percentage}%`;
                })
                .style("fill", "#222");

            bars
                .on("mouseover", tip.show )
                .on("mouseout", tip.hide )    
        }else{
            d3.select("#GeoBarChart")
                .append("div")
                .attr("class", "emptyDiv")
                .text(`0 sessions for this periode: ${this.props.Dates}`);
        }
        

    }

    ReRenderGeoBarChart = () =>{
        const{classes} = this.props;
        const svg =  d3.select(`#GeoBarChart svg`);
        const emptyDiv = d3.select(".emptyDiv");
        const tip = d3.select(`.${classes.d3TipBarGeo}`);
        emptyDiv.remove();
        tip.remove();

        svg.selectAll(`.${classes.BarGeoBar}`).data(this.state.data).exit().remove();
        svg.remove();
        this.RenderGeoBarChart(false);
    }

    ReStyleGeoBarChart = () =>{
        const{classes} = this.props;
        let resizedFn;
        clearTimeout(resizedFn);

        resizedFn = setTimeout(() => {
            const svg =  d3.select(`#GeoBarChart svg`);
            const emptyDiv = d3.select(".emptyDiv");
            const tip = d3.select(`.${classes.d3TipBarGeo}`);
            emptyDiv.remove();
            tip.remove();
            svg.selectAll(`.${classes.BarGeoBar}`).data(this.state.data).exit().remove();
            svg.remove();
            this.RenderGeoBarChart(true);
        }, 200)
    }

    componentDidMount(){
        this.RenderGeoBarChart();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props){
            if(prevProps.data !== this.props.data){
                this.ReRenderGeoBarChart();
            }
            if(prevProps.windowWidth !== this.props.windowWidth){
                this.ReStyleGeoBarChart();
            }
        }
    }

    render(){
        return(
            <figure id="GeoBarChart">
                
            </figure>
        )
    }
}

GeoBarChart.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(GeoBarChartStyles)(GeoBarChart)