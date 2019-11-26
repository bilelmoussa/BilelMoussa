import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';

const styles = theme =>({
    SkillChartCardItem:{
        width: '200px !important',
        margin: '20px 30px !important',
        textAlign: 'center',
    },
    SkillChartCard:{
        margin: 10,
        backgroundColor: '#2196f3 !important',
        color: '#ffffff !important',
        height: 270,
    },
    SkillChartSingleChart:{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'space-around',    
    },
    SkillChartCircularChart:{
        display: 'block',
        margin: '10px auto',
        maxWidth: '85%',
        maxHeight: 250,
        padding: '10px 0',
    },
    SkillChartCircleBg:{
        fill: 'none',
        stroke: '#88caff',
        strokeWidth:' 3.8',
    },
    SkillChartCircle:{
        fill: 'none',
        strokeWidth: '2.8',
        strokeLinecap: 'round',
        stroke: '#fff',
    },
    SkillChartPercentage:{
        fontFamily: 'sans-serif',
        fontSize: '0.4em',
        textAnchor: 'middle',
        fill: '#fff',
    },
    SkillChartSingleTitle:{
        color: '#fff !important',
        letterSpacing: '4px !important',
        margin: '30px 10px !important',
        textTransform: 'uppercase',
        fontSize: '1rem !important',
        fontWeight: 'bold !important',
    }
})

class SkillChart extends Component {
    constructor(){
        super();
        this.state = {
            chart_val: 0,
            animation: '',
        }
    }

    componentDidMount(){
        if(this.props.scrolltime){
            setTimeout(() => {
                this.setState({
                    chart_val: this.props.value,
                    animation: 'progress 2s linear'
                })
            }, 500);
        }    
    }

	static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps!==prevState){
            if(nextProps.scrolltime){
                return setTimeout(() => {
                    return{
                        chart_val: nextProps.value,
                        animation: 'progress 2s linear'
                    }
                }, 500);
            }else{
                return null;
            }   
        }else{
            return null;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props){
            if(this.props.scrolltime){
                setTimeout(() => {
                    this.setState({
                        chart_val: this.props.value,
                        animation: 'progress 2s linear'
                    })
                }, 500);
            }    
        }else{
            return null;
        }
    }

    render() {
        const{classes} = this.props;
        return (
            <div className={classes.SkillChartCardItem} id={this.props.id}>
            <Card className={classes.SkillChartCard}>
                <div className={classes.SkillChartSingleChart}>
                        <svg viewBox="0 0 36 36" className={classes.SkillChartCircularChart} preserveAspectRatio="none">
                                <path className={classes.SkillChartCircleBg}
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path style={{animation: this.state.animation}} className={classes.SkillChartCircle}
                                    strokeDasharray={`${this.state.chart_val}, 100`}
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                              <text x="18" y="20.35" className={classes.SkillChartPercentage}>{`${this.props.value}%`}</text>
                        </svg>
                        <Typography className={classes.SkillChartSingleTitle} variant="h6">{this.props.title}</Typography>
                </div>	
			</Card >
        </div>
        )
    }
}

SkillChart.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SkillChart);
