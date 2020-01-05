import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { geoMercator, geoPath } from 'd3-geo';
import WorldCountries from '../../../static/world_countries';


const GeoStyle = (theme) =>({
    root: {
        width: '45%',
        maxWidth: 1000,
        minWidth: 340, 
        padding: theme.spacing(1, 2),
        margin: '1rem auto',
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      },
      GeoHeader:{
          marginBottom: "1rem"
      }
})

class GeoChart extends Component {
    constructor(){
        super();
        this.state={
            FigWidth: 0,
        }
        this.FigRef = React.createRef();
    }

    getWidth = () =>{
        return this.FigRef.current.offsetWidth;
    }

    updateWidth = () =>{
        const width = this.getWidth();
        this.setState({FigWidth: width});
    }

    componentDidMount() {
        this.updateWidth();
        window.addEventListener("resize", this.updateWidth);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props){
            if(prevProps.SharedStyle !== this.props.SharedStyle){
                this.updateWidth();
            }
        }
    }

    render() {
        const{FigWidth} = this.state;
        const{classes} = this.props;
        const projection = geoMercator()
        const pathGenerator = geoPath().projection(projection)

        const countries = WorldCountries.features.map((d,i) => 
            <path key={'path' + i} d={pathGenerator(d)} fill={"#9E9E9E"} className='countries'/>
        )

        return (
            <React.Fragment>
                <Paper className={classes.root}>
                    <div>
                        <h3 className={classes.GeoHeader}>Users By Country</h3>
                    </div>
                    <figure ref={this.FigRef}>
                        <svg viewBox="20 -100 950 500" preserveAspectRatio="none" width={FigWidth}>
                            {countries}
                        </svg>
                    </figure>
                </Paper>
            </React.Fragment>
        )
    }
}

GeoChart.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(GeoStyle)(GeoChart);