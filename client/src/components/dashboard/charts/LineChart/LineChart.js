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
        margin: '1rem auto 1rem 2rem',
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down('md')]: {
            margin: '1rem auto',
        },
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
            width: 500,
            height: 320,
            padding: 10,
            OpenDates: false,
            Dates: "last 28 days",
            LastYear: "last 365 days",
            Last180Days: "last 180 days",
            Last90Days: "last 90 days",
            LastMonth: "last 28 days",
            LastWeek: "last 7 days",
        }
        this.FigRef = React.createRef();
    }

    componentDidMount(){
        if(window.innerWidth < 600){
            const ScreenWidthNoNav = window.innerWidth - 53;
            const ResPaperWidth = ScreenWidthNoNav * 0.95;
            const ResHeight = ResPaperWidth * 0.7;
            this.setState({width: ResPaperWidth, height: ResHeight});
        }


        window.addEventListener("resize", () => {
            if(window.innerWidth < 600 && window.innerWidth >= 300){
                const ScreenWidthNoNav = window.innerWidth - 53;
                const ResPaperWidth = ScreenWidthNoNav * 0.95;
                const ResHeight = ResPaperWidth * 0.7;
                this.setState({width: ResPaperWidth, height: ResHeight});
            }else if(window.innerWidth >= 600){
                const respWidth = 500;
                const resHeight = 320;
                this.setState({width: respWidth, height: resHeight})
            }
        });
    }
    
    handleCloseDates = () =>{
        this.setState({OpenDates: false});
    }

    handleOpenDates = () =>{
        this.setState({OpenDates: true});
    }

    handleChange = event =>{
        this.setState({ Dates: event.target.value });
        if(event.target.value !== this.state.Dates){
            this.props.OnLineChartDateChange(event.target.value);
        }
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
        const{width, height, padding, OpenDates, LastYear, Last180Days, Last90Days, LastMonth, LastWeek, Dates} = this.state;
        return (
            <React.Fragment>
                <Paper className={classes.root} style={{width: width, padding: padding}}>
                    <div>
                        <h3>Users</h3>
                    </div>
                    <div style={{minHeight: height}} >
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
                                <MenuItem key={0} value={LastYear}>{LastYear}</MenuItem>
                                <MenuItem key={1} value={Last180Days}>{Last180Days}</MenuItem>
                                <MenuItem key={2} value={Last90Days}>{Last90Days}</MenuItem>  
                                <MenuItem key={3} value={LastMonth}>{LastMonth}</MenuItem>
                                <MenuItem key={4} value={LastWeek}>{LastWeek}</MenuItem>
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