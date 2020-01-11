import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import WorldCountries from '../../../../static/world_countries';
import  Chart from "./Chart";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import GeoBarChart from './GeoBarChart';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const GeoStyle = (theme) =>({
    root: {
        margin: '1rem auto 1rem 2rem',
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down('lg')]: {
            margin: '1rem auto',
        },
      },
      GeoHeader:{
          marginBottom: "1rem",
          fontSize: "1rem"
      },
      FormControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    ExpansionPanelRoot:{
        width: '100%', 
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    ExpansionPanelDetailsRoot:{
        padding: 0,
    }
})

class GeoChart extends Component {
    constructor(){
        super();
        this.state={
            width: 600,
            height: 320,
            padding: 10,
            windowWidth: 0,
            OpenDates: false,
            Dates: "last 28 days",
            LastYear: "last 365 days",
            Last180Days: "last 180 days",
            Last90Days: "last 90 days",
            LastMonth: "last 28 days",
            LastWeek: "last 7 days",
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
        if(event.target.value !== this.state.Dates){
            this.props.OnGeoChartDateChange(event.target.value);
        }
    }

    componentDidMount(){
        this.setState({windowWidth: window.innerWidth});
        if(window.innerWidth < 700){
            const ScreenWidthNoNav = window.innerWidth - 53;
            const ResPaperWidth = ScreenWidthNoNav * 0.95;
            const ResHeight = ResPaperWidth * 0.7;
            this.setState({width: ResPaperWidth, height: ResHeight});
        }else{
            const ResHeight = this.state.width * 0.7;
            this.setState({height: ResHeight});
        }
        
        window.addEventListener("resize", () => {
            this.setState({windowWidth: window.innerWidth});
            if(window.innerWidth < 700 && window.innerWidth >= 300){
                const ScreenWidthNoNav = window.innerWidth - 53;
                const ResPaperWidth = ScreenWidthNoNav * 0.95;
                const ResHeight = ResPaperWidth * 0.7;
                this.setState({width: ResPaperWidth, height: ResHeight});
            }else if(window.innerWidth >= 700){
                const respWidth = 600;
                const ResHeight = respWidth * 0.7;
                this.setState({width: respWidth, height: ResHeight})
            }
        });
    }
    
    RenderGeoChart = () =>{
        const{data} = this.props;
        const{width, padding, height, windowWidth} = this.state;
        if(WorldCountries && data.length > 0){
            return(
                <Chart WorldCountries={WorldCountries} data={data} width={width} height={height} padding={padding} windowWidth={windowWidth}/>
            )
        }else{
            return null;
        }
    }

    RenderGeoBarChart = () =>{
        const{data, classes} = this.props;
        const{width, padding, windowWidth, Dates} = this.state;
        if(data.length > 0){
            return(
                <div className={classes.ExpansionPanelRoot}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>More Details</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.ExpansionPanelDetailsRoot}>
                            <GeoBarChart Dates={Dates} data={data} width={width} windowWidth={windowWidth} padding={padding}/>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            )
        }else{
            return null;
        }
    }

    render() {
        const{classes} = this.props;
        const{height, width, padding, OpenDates, LastYear, Last180Days, Last90Days, LastMonth, LastWeek, Dates} = this.state;

        return (
            <React.Fragment>
                <Paper className={classes.root} style={{width: width, padding: padding}}>
                    <div>
                        <p className={classes.GeoHeader}>Sessions By Country</p>
                    </div>
                    <div style={{minHeight: height}}>
                        {this.RenderGeoChart()}
                    </div>
                    <div>
                        {this.RenderGeoBarChart()}
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

GeoChart.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(GeoStyle)(GeoChart);