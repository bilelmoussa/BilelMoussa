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
        if(this.props.value){
            setTimeout(() => {
                this.setState({
                    chart_val: this.props.value,
                    animation: "progress 3s linear"
                })
            }, 1000);
        }
    }

    render() {


        return (
            <div className="Card_item">
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
