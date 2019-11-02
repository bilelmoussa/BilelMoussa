import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const styles = theme =>({

})

class SkillChart extends Component {
    constructor(){
        super();
        this.state = {
            chart_val: 0,
            animation: "",
        }
    }

    componentDidMount(){
        if(this.props.scrolltime){
            setTimeout(() => {
                this.setState({
                    chart_val: this.props.value,
                    animation: "progress 2s linear"
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
                        animation: "progress 2s linear"
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
                        animation: "progress 2s linear"
                    })
                }, 500);
            }    
        }else{
            return null;
        }
    }

    render() {

        return (
            <div className="Card_item" id={this.props.id}>
            <div style={{position: "fixed", zIndex: 5, top: 20, left: 20,}}>{this.state.console}</div>  
            <Card className="card">
                <div className="single-chart">
                        <svg viewBox="0 0 36 36" className={`circular-chart white`} preserveAspectRatio="none">
                                <path className="circle-bg"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path style={{animation: this.state.animation}} className="circle"
                                    strokeDasharray={`${this.state.chart_val}, 100`}
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                              <text x="18" y="20.35" className={`percentage white`}>{`${this.props.value}%`}</text>
                        </svg>
                        <Typography className="SingleChartTitle" variant="h6">{this.props.title}</Typography>
                </div>	
			</Card >
        </div>
        )
    }
}

export default withStyles(styles)(SkillChart);
