import React, { Component } from 'react';
import { select, line, axisBottom, axisRight, scaleLinear, axisLeft, max, extent, scaleTime, timeFormat, mouse, bisector} from "d3";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = (theme) => ({
    root: {
      width: '100%',
      height: 400, 
      maxWidth: 1000,  
      minWidth: 320, 
      padding: theme.spacing(3, 2),
      marginRight: 'auto'
    },
    LineChart:{
        height: '100%',
        width: '100%'
    },
    LineChartSvg:{
        overflow: 'visible',
        marginBottom: '2rem',
        display: 'block',
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


class LineChart extends Component {

    constructor(props){
        super(props);
        this.state={
            width: 0,
            height: 0,
            data: [],
            SharedStyle: {},
            anmOnly: true
        }
        this.drawChart = this.drawChart.bind(this);
        this.FigRef = React.createRef();
    }

    getWidth(){
        return this.FigRef.current.offsetWidth;
    }

    getHeight(){
        return this.FigRef.current.offsetHeight;
    }

    drawChart(){
        const{classes} = this.props;
        const{data, width, height, anmOnly} = this.state;

        if(data.length > 0){

        const newData = data.map((d)=>{
            d.dimensions = new Date(d.dimensions);
            d.metrics = parseInt(d.metrics);
            return {dimensions: d.dimensions, metrics: d.metrics };
        })

        const Fig = select(this.FigRef.current);

        let svg = Fig.select(`.${classes.LineChartSvg}`);

        let bisectDate = bisector(function(d) { return d.dimensions; }).left;
        var parseTime = timeFormat("%d/%m/%Y");

        const xScale = scaleTime()
            .domain(extent(newData, function(d) { return d.dimensions; }))
            .range([0, width]);

        const yScale = scaleLinear()
            .domain([0, max(newData, function(d) { return d.metrics; })])
            .range([300, 0]);   

        const xAxis = axisBottom(xScale)
            .ticks(3)
            .tickFormat(timeFormat("%d"));

        const yAxis = axisRight(yScale)
            .ticks(5);

        function make_y_gridlines() {
            return axisLeft(yScale)
                    .ticks(5)
        }


        svg
            .select(`.${classes.grid}`)
            .style("stroke-dasharray",("3,3"))
            .call(make_y_gridlines()
            .tickSize(-width)
            .tickFormat("")
        )

        svg
            .select(`.${classes.xAxis}`)
            .style('transform', 'translateY(300px)')
            .transition()
            .duration(1000)
            .call(xAxis);

        const MyLine = line()
            .x(function(d) { return xScale(d.dimensions); })
            .y(function(d) { return yScale(d.metrics); });

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

        if(anmOnly){
            path
                .attr("stroke-dashoffset", pathLength)
                .attr("stroke-dasharray", pathLength)
                .transition()
                .duration(2500)
                .attr("stroke-dashoffset", 0);
        }  
        
        svg
            .select(`.${classes.yAxis}`)
            .style('transform', `translateX(${width}px)`)
            .transition()
            .duration(1000)
            .call(yAxis);

        let focus = svg.append("g")
            .attr("class", "focus")
            .style("display", "none")
            

        focus.append("circle")
            .attr("r", 5);

        focus.append("rect")
            .attr("class", "tooltip")
            .attr("width", 100)
            .attr("height", 50)
            .attr("x", 10)
            .attr("y", -22)
            .attr("rx", 4)
            .attr("ry", 4);

        focus.append("text")
            .attr("class", "tooltip-dimensions")
            .attr("x", 18)
            .attr("y", -2);

        focus.append("text")
            .attr("x", 18)
            .attr("y", 18)
            .text("users:");

        focus.append("text")
            .attr("class", "tooltip-metrics")
            .attr("x", 60)
            .attr("y", 18);


        svg.append("rect")
            .attr("class", "overlay")
            .attr("width", width)
            .attr("height", height)
            .on("mouseover", function() { 
                focus.style("display", null);
            })
            .on("mouseout", function() { 
                focus.style("display", "none");
            })
            .on("mousemove", mousemove);
   


        function mousemove() {
            let x0 = xScale.invert(mouse(this)[0]),
                    i = bisectDate(data, x0, 1),
                    d0 = data[i - 1],
                    d1 = data[i],
                    d = x0 - d0.dimensions > d1.dimensions - x0 ? d1 : d0;
            focus.attr("transform", "translate(" + xScale(d.dimensions) + "," + yScale(d.metrics) + ")");
            focus.select(".tooltip-dimensions").text(parseTime(d.dimensions));
            focus.select(".tooltip-metrics").text(d.metrics);
        }        
        }
    }

    redrawChart() {
        let width = this.getWidth() - 30;
        this.setState({width: width});
        const path = select(".line");
        path.remove();
        this.drawChart = this.drawChart.bind(this);
        this.drawChart();
    }



    componentDidMount() {
        let width = this.getWidth() - 30;
        let height = this.getHeight();


        this.setState({width: width, height: height, SharedStyle: this.props.SharedStyle}, ()=> {
            this.drawChart();
        });

        let resizedFn;
        window.addEventListener("resize", () => {
            this.setState({anmOnly: false});
            clearTimeout(resizedFn);
            resizedFn = setTimeout(() => {
                this.redrawChart();
            }, 200)
        });
        
    }


    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps !== prevState){
            return {data: nextProps.data, SharedStyle: nextProps.SharedStyle}
        }else{
            return null;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props){
            if(prevProps.SharedStyle !== this.props.SharedStyle){
                this.setState({anmOnly: false})
            }
            setTimeout(() => {
                this.setState({
                    data: this.props.data,
                    SharedStyle: this.props.SharedStyle,
                }, () => this.redrawChart())
            }, 500);
        }else{
            return null;
        }
    }



    render(){
        const{classes} = this.props;
        const{width, height} = this.state;
        
        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <figure className={classes.LineChart} ref={this.FigRef}>
                        <svg className={classes.LineChartSvg} style={{width: width, height: height}}>
                            <g className={classes.grid}></g>
                            <g className={classes.xAxis}></g>
                            <g className={classes.yAxis}></g>
                        </svg>
                    </figure>
                </Paper>
            </React.Fragment>
        )
    }
}

LineChart.protoType = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(useStyles)(LineChart);