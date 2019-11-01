import React, { Component } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import My_projects_svg from '../../static/img/my_projects.svg'
import { Link } from 'react-router-dom';

const styles = theme => ({
    box_button:{
        boxShadow: 'none',
        margin: 4,
        backgroundColor: "#419aff",
        borderColor: '#419aff',
        color: "#fff",
        textTransform: 'capitalize',
        letterSpacing: 1,
        padding: '4px 0.5rem',
        fontSize: 14,
        borderBottom: "3px solid #357ac5",
        '&:hover':{
            backgroundColor: "#357ac5",
            borderColor: "#357ac5"
        },
        '&active':{
            boxShadow: 'none',
            backgroundColor: "#357ac5",
            borderColor: "#357ac5"
        }
    },
    button: {
        boxShadow: 'none',
        margin: theme.spacing(1),
        backgroundColor: "#419aff",
        borderColor: '#419aff',
        color: "#fff",
        borderBottom: "3px solid #357ac5",
        '&:hover':{
            backgroundColor: "#357ac5",
            borderColor: "#357ac5"
        },
        '&active':{
            boxShadow: 'none',
            backgroundColor: "#357ac5",
            borderColor: "#357ac5"
        }  
    },
    goBackContainer:{
        display: "flex",
        margin: "1rem 2rem"
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

                <div className={classes.goBackContainer}>
                    <Button variant="contained" className={classes.button} component={Link} to={`/`}>Go Back Home</Button>
                </div>

                    <div id="my_projects_section">

                    <div id="my_projects_container">
                        <div id="my_projects_content">
                            <h1>My Projects</h1>
                            <p>
                            All of my projects are responsive and supported by modern browsers .        
                            </p>
                        </div>
                        <div id="my_projects_svg">
                            <img alt="" src={My_projects_svg} />
                        </div>
                    </div>
                    
                    <div id="my_projects_boxes">
                        <div className="project_box_column">
                            <div className="project_box_row">

                                <div className="project_box">
                                    <div className="imgs_project_box">
                                        <AwesomeSlider className="aws-btn" cssModule={AwesomeSliderStyles} bullets={false} fillParent={true}>
                                            <div data-src={require('../../static/img/KPI_5.PNG')} />
                                            <div data-src={require('../../static/img/KPI_1.PNG')} />
                                            <div data-src={require('../../static/img/KPI_4.PNG')} />
                                        </AwesomeSlider>
                                    </div>
                                    <div className="project_box_title">
                                        KPI-APP
                                    </div>
                                    <div className="project_box_description">
                                    KPI App is a Web Application for 3D Printing companies .
                                    </div>
                                    <div className="project_box_call_to_action_btn">
                                        <Button variant="contained" className={classes.box_button} href="https://kpi-application.herokuapp.com/" target="_blank">Live</Button>
                                        <Button variant="contained" className={classes.box_button} href="https://github.com/bilelmoussa/kpi-app" target="_blank">Code</Button>
                                    </div>
                                </div>

                                <div className="project_box">
                                    <div className="imgs_project_box">
                                        <AwesomeSlider className="aws-btn" cssModule={AwesomeSliderStyles} bullets={false} fillParent={true}>
                                            <div data-src={require('../../static/img/Land_1.PNG')} />
                                            <div data-src={require('../../static/img/Land_2.PNG')} />
                                            <div data-src={require('../../static/img/Land_3.PNG')} />
                                        </AwesomeSlider>
                                    </div>
                                    <div className="project_box_title">
                                        Landing Page Website
                                    </div>
                                    <div className="project_box_description">
                                    This is a Landing Page Website, i used html/css and JavaScript(jQuery) for the design.
                                    </div>
                                    <div className="project_box_call_to_action_btn">
                                        <Button variant="contained" className={classes.box_button} href="https://bilelmoussa.github.io/landsafe/" target="_blank">Live</Button>
                                        <Button variant="contained" className={classes.box_button} href="https://github.com/bilelmoussa/landsafe" target="_blank">Code</Button>
                                    </div>
                                </div>

                            </div>

                            <div className="project_box_row">

                                <div className="project_box">
                                    <div className="imgs_project_box">
                                        <AwesomeSlider className="aws-btn" cssModule={AwesomeSliderStyles} bullets={false} fillParent={true}>
                                            <div data-src={require('../../static/img/nebula_5.PNG')} />
                                            <div data-src={require('../../static/img/nebula_1.PNG')} />
                                            <div data-src={require('../../static/img/nebula_2.PNG')} />
                                            <div data-src={require('../../static/img/nebula_3.PNG')} />
                                            <div data-src={require('../../static/img/nebula_4.PNG')} />
                                        </AwesomeSlider>
                                    </div>
                                    <div className="project_box_title">
                                        E-commerce Website 
                                    </div>
                                    <div className="project_box_description">
                                        E-commerce website developed with Mern stack . 
                                    </div>
                                    <div className="project_box_call_to_action_btn">
                                        <Button variant="contained" className={classes.box_button} href="https://nebula-shop.000webhostapp.com/" target="_blank">Live</Button>
                                        <Button variant="contained" className={classes.box_button} href="https://github.com/bilelmoussa/BrightCapella" target="_blank">Code</Button>
                                    </div>
                                </div>

                                <div className="project_box">
                                    <div className="imgs_project_box">
                                        <AwesomeSlider className="aws-btn" cssModule={AwesomeSliderStyles} bullets={false} fillParent={true}>
                                            <div data-src={require('../../static/img/elite4her_4.PNG')} />
                                            <div data-src={require('../../static/img/elite4her_2.PNG')} />
                                            <div data-src={require('../../static/img/elite4her_1.PNG')} />
                                            <div data-src={require('../../static/img/elite4her_5.PNG')} />
                                        </AwesomeSlider>
                                    </div>
                                    <div className="project_box_title">
                                        Girly E-commerce Website 
                                    </div>
                                    <div className="project_box_description">
                                        E-commerce website developed with wordpress / woocommerce and my custom Theme . 
                                    </div>
                                    <div className="project_box_call_to_action_btn">
                                        <Button variant="contained" className={classes.box_button} href="https://bilelmoussa.github.io/elite4you/" target="_blank">Live</Button>
                                        <Button variant="contained" className={classes.box_button} href="https://github.com/bilelmoussa/elite4you" target="_blank">Code</Button>
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