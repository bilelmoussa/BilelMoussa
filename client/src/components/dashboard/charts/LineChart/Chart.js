import React, { Component } from 'react'
import * as d3 from "d3";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const useStyles = (theme) => ({
    LineChartSvg:{
        overflow: 'visible',
        margin: '1rem 0'
    },
    LinePath:{
        fill: 'none',
        stroke: '#38a8fd',
        strokeWidth: 2
    },
    grid:{
        "& line":{
            stroke: 'lightgrey',
            strokeOpacity: 0.6,
            shapeRendering: 'crispEdges'
        },
        "& path":{
            strokeWidth: 0,
        }
    },
    xAxis: {
       "& .tick line":{
            stroke: "rgba(255, 255, 255, 0)"
       },
       "& .domain":{
        stroke: "rgb(214, 214, 214)"
        }
    },
    yAxis: {
        "& .tick line":{
             stroke: "rgba(255, 255, 255, 0)"
        },
        "& .domain":{
         stroke: "rgba(255, 255, 255, 0)"
         }
     },
  });

export class Chart extends Component {

    constructor(props){
        super(props);
        this.FigRef = React.createRef();
    }

    componentDidMount() {
        const{data, classes, width, height, padding} = this.props;
        
        const newPadding = (padding  * 2) + 20;
        const ChartWidth = width - newPadding;
        const ChartHeight = height - newPadding;

        const newData = data.map((d)=>{
            d.dimensions = new Date(d.dimensions);
            d.metrics = parseInt(d.metrics);
            return {dimensions: d.dimensions, metrics: d.metrics };
        })


        const xScale = d3.scaleTime()
                        .domain(d3.extent(newData, function(d) { return d.dimensions; }))
                        .range([0, ChartWidth]);

        const yScale = d3.scaleLinear()
                        .domain([0, d3.max(newData, function(d) { return d.metrics; })])
                        .range([ChartHeight, 0]);


        const xAxis = d3.axisBottom(xScale)
                        .ticks(5)
                        .tickFormat(d3.timeFormat("%d"));

        const yAxis = d3.axisRight(yScale)
                        .ticks(5);

        const Line = d3.line()
                        .x(function(d) { return xScale(d.dimensions); })
                        .y(function(d) { return yScale(d.metrics); });

        function make_y_gridlines() {
            return d3.axisLeft(yScale)
                        .ticks(5)
        }

        const svg =  d3.select("#graph").append("svg")
                        .attr("height", ChartHeight)
                        .attr("width", ChartWidth)
                        .attr("class", `${classes.LineChartSvg}`);

        const chart = svg.append("g");
        
        chart
            .append("g")			
            .attr("class", classes.grid)
            .call(make_y_gridlines()
                .tickSize(-ChartWidth)
                .tickFormat("")
            )

        chart
            .append("g")
            .attr("class", classes.xAxis)
            .style('transform', `translateY(${ChartHeight}px)`)
            .call(xAxis);
            
        chart
            .append("g")
            .attr("class", classes.yAxis)
            .style('transform', `translateX(${ChartWidth}px)`)
            .call(yAxis);
            
            
        chart
            .append("path")
            .data([newData])
            .attr("class", "line")
            .attr('d',  Line)
            .attr('fill', 'none')
            .attr('stroke-width', '2px')
            .attr('stroke', '#38a8fd'); 
            
        let path = svg.select('.line');
        const pathLength = path.node().getTotalLength();

        path
            .attr("stroke-dashoffset", pathLength)
            .attr("stroke-dasharray", pathLength)
            .transition()
            .duration(2500)
            .delay(1000)
            .attr("stroke-dashoffset", 0);

    }

    render() {
        const{classes} = this.props;

        return (
            <figure id="graph" className={classes.LineChart} ref={this.FigRef}>

            </figure>   
        )
    }
}

Chart.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(useStyles)(Chart)


