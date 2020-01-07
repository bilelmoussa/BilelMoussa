import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { geoMercator, geoPath } from 'd3-geo';
import WorldCountries from '../../../static/world_countries';


const GeoStyle = (theme) =>({
    root: {
        margin: '1rem auto 1rem 2rem',
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        minHeight: 250,
        [theme.breakpoints.down('md')]: {
            margin: '1rem auto',
        },
      },
      GeoHeader:{
          marginBottom: "1rem"
      }
})

class GeoChart extends Component {
    constructor(){
        super();
        this.state={
            width: 500,
            height: 320,
            padding: 10,
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

    render() {
        const{classes} = this.props;
        const projection = geoMercator()
        const pathGenerator = geoPath().projection(projection)
        const SvgWidth = this.state.width - (this.state.padding * 2);

        const countries = WorldCountries.features.map((d,i) => 
            <path key={'path' + i} d={pathGenerator(d)} fill={"#9E9E9E"} className='countries'/>
        )


        return (
            <React.Fragment>
                <Paper className={classes.root} style={{width: this.state.width, padding: this.state.padding}}>
                    <div>
                        <h3 className={classes.GeoHeader}>Users By Country</h3>
                    </div>
                    <figure ref={this.FigRef}>
                        <svg viewBox="20 -100 950 500" preserveAspectRatio="none" style={{width: SvgWidth}}>
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