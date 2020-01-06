import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Chart from './Chart';

const useStyles = (theme) => ({
    root: {
      margin: '1rem auto',
      display: "flex",
      flexDirection: "column",
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

    componentDidMount(){
        
    }


    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props){

        }
    }
    
    handleCloseDates = () =>{
        this.setState({OpenDates: false});
    }

    handleOpenDates = () =>{
        this.setState({OpenDates: true});
    }

    handleChange = event =>{
        this.setState({ Dates: event.target.value });
        console.log(event.target.value);
        this.props.OnLineChartDateChange();
    }

    RenderChart = () =>{
        const{data} = this.props;
        const{width, padding, height} = this.state;
        if(data.length > 0){
            return(
                <Chart data={data} width={width} height={height} padding={padding}/>
            )
        }else{
            return null;
        }
    }

    render(){
        const{classes} = this.props;
        const{width, height, padding, OpenDates, Monthly, Weekly, Day, Dates} = this.state;

        return (
            <React.Fragment>
                <Paper className={classes.root} style={{width: width, padding: padding}}>
                    <div>
                        <h3>Users</h3>
                    </div>
                    <div style={{height: height, width: width}} >
                        {this.RenderChart()}
                    </div>
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