import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import My_projects_svg from '../../static/img/my_projects.webp'
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Kpi_5 from '../../static/img/KPI_5-min.webp';
import Kpi_1 from '../../static/img/KPI_1-min.webp';
import Kpi_4 from '../../static/img/KPI_4-min.webp';
import Land_1 from '../../static/img/Land_1-min.webp';
import Land_2 from '../../static/img/Land_2-min.webp';
import Land_3 from '../../static/img/Land_3-min.webp';
import nebula_5 from '../../static/img/nebula_5-min.webp';
import nebula_1 from '../../static/img/nebula_1-min.webp';
import nebula_2 from '../../static/img/nebula_2-min.webp';
import nebula_3 from '../../static/img/nebula_3-min.webp';
import nebula_4 from '../../static/img/nebula_4-min.webp';
import elite4her_4 from '../../static/img/elite4her_4-min.webp';
import elite4her_2 from '../../static/img/elite4her_2-min.webp';
import elite4her_1 from '../../static/img/elite4her_1-min.webp';
import elite4her_5 from '../../static/img/elite4her_5-min.webp';

const styles = theme => ({
    box_button:{
        boxShadow: 'none',
        margin: 4,
        backgroundColor: '#419aff',
        borderColor: '#419aff',
        color: '#fff',
        textTransform: 'capitalize',
        letterSpacing: 1,
        padding: '4px 0.5rem',
        fontSize: 14,
        borderBottom: '3px solid #357ac5',
        '&:hover':{
            backgroundColor: '#357ac5',
            borderColor: '#357ac5'
        },
        '&active':{
            boxShadow: 'none',
            backgroundColor: '#357ac5',
            borderColor: '#357ac5'
        }
    },
    button: {
        boxShadow: 'none',
        margin: theme.spacing(1),
        backgroundColor: '#419aff',
        borderColor: '#419aff',
        color: '#fff',
        borderBottom: '3px solid #357ac5',
        '&:hover':{
            backgroundColor: '#357ac5',
            borderColor: '#357ac5'
        },
        '&active':{
            boxShadow: 'none',
            backgroundColor: '#357ac5',
            borderColor: '#357ac5'
        }  
    },
    goBackContainer:{
        display: 'flex',
        margin: '1rem 2rem'
    }
})

class projects extends Component {
    componentDidMount(){

        window.scrollTo(0, 0); 
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div>

                <Helmet>
                    <title>Bilel Moussa | Projects</title>
                    <meta name='description' content='Bilel Moussa Projects Page' />
                    <meta name='keywords' content='Web Developer Projects, UI/UX Projects, Web Designer Projects, Web Developer Works' />
                </Helmet>

                <div className={classes.goBackContainer}>
                    <Button variant='contained' className={classes.button} component={Link} to={`/`}>Go Back Home</Button>
                </div>

                    <div id='my_projects_section'>

                    <div id='my_projects_container'>
                        <div id='my_projects_content'>
                            <h1>My Projects</h1>
                            <p>
                            An effective and immersive user experience is what catches the attention and spreads a clear message. this is why i use modern UI/UX design like Illustration/Colors, gradients and the overlapping effect/3D graphics ...
                            <br/>
                            All of my projects are responsive and supported by modern browsers .     
                            </p>
                        </div>
                        <div id='my_projects_svg'>
                            <img alt='projects' src={My_projects_svg} />
                        </div>
                    </div>
                    
                    <div id='my_projects_boxes'>
                        <div className='project_box_column'>
                            <div className='project_box_row'>

                                <div className='project_box'>
                                    <div className='imgs_project_box'>
                                        <AwesomeSlider className='aws-btn' cssModule={AwesomeSliderStyles} bullets={false} fillParent={true}>
                                            <div data-src={Kpi_5} />
                                            <div data-src={Kpi_1} />
                                            <div data-src={Kpi_4} />
                                        </AwesomeSlider>
                                    </div>
                                    <div className='project_box_title'>
                                        KPI-APP
                                    </div>
                                    <div className='project_box_description'>
                                    KPI App is a Web Application for 3D Printing companies .
                                    </div>
                                    <div className='project_box_call_to_action_btn'>
                                        <Button variant='contained' className={classes.box_button} href='https://kpi-application.herokuapp.com/' target='_blank'>Live</Button>
                                        <Button variant='contained' className={classes.box_button} href='https://github.com/bilelmoussa/kpi-app' target='_blank'>Code</Button>
                                    </div>
                                </div>

                                <div className='project_box'>
                                    <div className='imgs_project_box'>
                                        <AwesomeSlider className='aws-btn' cssModule={AwesomeSliderStyles} bullets={false} fillParent={true}>
                                            <div data-src={Land_1} />
                                            <div data-src={Land_2} />
                                            <div data-src={Land_3} />
                                        </AwesomeSlider>
                                    </div>
                                    <div className='project_box_title'>
                                        Landing Page Website
                                    </div>
                                    <div className='project_box_description'>
                                    This is a Landing Page Website, i used html/css and JavaScript(jQuery) for the design.
                                    </div>
                                    <div className='project_box_call_to_action_btn'>
                                        <Button variant='contained' className={classes.box_button} href='https://bilelmoussa.github.io/landsafe/' target='_blank'>Live</Button>
                                        <Button variant='contained' className={classes.box_button} href='https://github.com/bilelmoussa/landsafe' target='_blank'>Code</Button>
                                    </div>
                                </div>

                            </div>

                            <div className='project_box_row'>

                                <div className='project_box'>
                                    <div className='imgs_project_box'>
                                        <AwesomeSlider className='aws-btn' cssModule={AwesomeSliderStyles} bullets={false} fillParent={true}>
                                            <div data-src={nebula_5} />
                                            <div data-src={nebula_1} />
                                            <div data-src={nebula_2} />
                                            <div data-src={nebula_3} />
                                            <div data-src={nebula_4} />
                                        </AwesomeSlider>
                                    </div>
                                    <div className='project_box_title'>
                                        E-commerce Website 
                                    </div>
                                    <div className='project_box_description'>
                                        E-commerce website developed with wordpress / woocommerce and my custom Theme .
                                    </div>
                                    <div className='project_box_call_to_action_btn'>
                                        <Button variant='contained' className={classes.box_button} href='https://nebula-shop.000webhostapp.com/' target='_blank'>Live</Button>
                                        <Button variant='contained' className={classes.box_button} href='https://github.com/bilelmoussa/BrightCapella' target='_blank'>Code</Button>
                                    </div>
                                </div>

                                <div className='project_box'>
                                    <div className='imgs_project_box'>
                                        <AwesomeSlider className='aws-btn' cssModule={AwesomeSliderStyles} bullets={false} fillParent={true}>
                                            <div data-src={elite4her_4} />
                                            <div data-src={elite4her_2} />
                                            <div data-src={elite4her_1} />
                                            <div data-src={elite4her_5} />
                                        </AwesomeSlider>
                                    </div>
                                    <div className='project_box_title'>
                                        Girly E-commerce Website 
                                    </div>
                                    <div className='project_box_description'>
                                        E-commerce website developed with Mern stack . 
                                    </div>
                                    <div className='project_box_call_to_action_btn'>
                                        <Button variant='contained' className={classes.box_button} href='https://bilelmoussa.github.io/elite4you/' target='_blank'>Live</Button>
                                        <Button variant='contained' className={classes.box_button} href='https://github.com/bilelmoussa/elite4you/' target='_blank'>Code</Button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                   
                </div>                
            </div>
        )
    }
}

projects.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(projects);