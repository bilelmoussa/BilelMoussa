import React, { Component } from 'react';
import * as d3 from "d3";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = (theme) => ({
    root: {
      margin: '1rem auto',
      display: "flex",
      flexDirection: "column",
    },
    LineChart:{

    },
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
    FormControl: {
        margin: theme.spacing(2),
        minWidth: 120,
    },
  });


class LineChart extends Component {

    constructor(props){
        super(props);
        this.state={
            width: 550,
            height: 300,
            padding: 10,
            OpenDates: false,
            Dates: "last 28 days",
            Monthly: "last 28 days",
            Weekly: "last 7 days",
            Day: "Yesterday",
        }
        this.FigRef = React.createRef();
    }


/*
    drawChart(){
        const{classes, data} = this.props;
        const{width, height, anmOnly, margin} = this.state;

        const newData = data.map((d)=>{
            d.dimensions = new Date(d.dimensions);
            d.metrics = parseInt(d.metrics);
            return {dimensions: d.dimensions, metrics: d.metrics };
        })

        let bisectDate = d3.bisector(function(d) { return d.dimensions; }).left;
        var parseTime = d3.timeFormat("%d/%m/%Y");



        const xAxis = d3.axisBottom(xScale)
                        .ticks(5)
                        .tickFormat(d3.timeFormat("%d"));

        const yAxis = d3.axisRight(yScale)
                        .ticks(5);



        function make_y_gridlines() {
            return d3.axisLeft(yScale)
                    .ticks(5)
        }

        const svg = d3.select("#chart")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("class", "svgContainer")
                        .attr("transform", `translate(${margin.left},${margin.top})`);

        svg.append("g")
            .attr("class", "x axis")
            .style('transform', `translateY(${height}px)`)
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)


        svg
            .append("path")
            .data([newData])
            .attr("class", "line")
            .attr('d',  MyLine)
            .attr('fill', 'none')
            .attr('stroke-width', '2px')
            .attr('stroke', '#38a8fd');


            let path = svg.select('.line');
            const pathLength = path.node().getTotalLength();

            if(anmOnly && !this.props.SharedStyle.isDrawerClosed){
                path
                    .attr("stroke-dashoffset", pathLength)
                    .attr("stroke-dasharray", pathLength)
                    .transition()
                    .duration(2500)
                    .attr("stroke-dashoffset", 0);
            }
        
    }
*/

    componentDidMount() {
        const { width, height, padding } = this.state;
        const{data, classes} = this.props;
        
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


        const svg =  d3.select("#graph").append("svg")
                        .attr("height", ChartHeight)
                        .attr("width", ChartWidth)
                        .attr("class", `${classes.LineChartSvg}`);

        const chart = svg.append("g");
            
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


    }


    componentDidUpdate(prevProps, prevState) {

    }



    handleCloseDates = () =>{
        this.setState({OpenDates: false});
    }

    handleOpenDates = () =>{
        this.setState({OpenDates: true});
    }

    handleChange = event =>{
        this.setState({ Dates: event.target.value });
    }

    render(){
        const{classes} = this.props;
        const{width, padding, OpenDates, Monthly, Weekly, Day, Dates} = this.state;

        return (
            <React.Fragment>
                <Paper className={classes.root} style={{width: width, padding: padding}}>
                    <div>
                        <h3>Users</h3>
                    </div>
                    <figure id="graph" className={classes.LineChart} ref={this.FigRef}>

                    </figure>
                    <div>
                        <FormControl className={classes.FormControl} >
                            <Select
                                open={OpenDates}
                                onClose={this.handleCloseDates}
                                onOpen={this.handleOpenDates}
                                value={Dates}
                                onChange={this.handleChange}
						    >
                                <MenuItem key={0} value={Monthly}>{Monthly}</MenuItem>
                                <MenuItem key={1} value={Weekly}>{Weekly}</MenuItem>
                                <MenuItem key={2} value={Day}>{Day}</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Paper>
            </React.Fragment>
        )
    }
}

LineChart.protoType = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(LineChart);