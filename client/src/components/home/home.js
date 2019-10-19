import React, { Component } from 'react';
import Img from '../../static/img/Asset4.svg';
import About_me_img from '../../static/img/about_me.jpg';
import My_projects_svg from '../../static/img/my_projects.svg'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import SkillSvg from '../svg_img/skill_svg';
import ScrollableAnchor from 'react-scrollable-anchor'

const Styles = theme => ({
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
    more_button:{
        boxShadow: 'none',
        margin: theme.spacing(1),
        backgroundColor: "#419aff",
        borderColor: '#419aff',
        color: "#fff",
        textTransform: 'capitalize',
        letterSpacing: 1,
        padding: '6px 1.5rem',
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
    input: {
        display: 'none',
    },
});


class Home extends Component {

    componentDidMount(){

    }
    
    render(){
        const { classes } = this.props;
        return(
            <div>
                <div id="welcome_section">

                        <div id="welcome_svg_container">
                            <img id="svg_background" alt="" src={Img} />
                        </div>
        
                        <div id="welcome_section_content">
                            <h1 id="welcome_header">Hi I'm Bilel Moussa</h1> 
                            <p id="welcome_description">A Web <b>Developer</b> & Web <b>Designer</b></p>
                            <div id="welcome_btns_container">
                                <Button variant="contained" className={classes.button}>Projects</Button>
                                <Button variant="contained" className={classes.button}>Contact Me</Button>
                            </div>
                        </div>
                        <div id="scroll_down">
                            <a href="#about_me_section_href"><span></span>Scroll</a>
                        </div>           
                </div>

                <ScrollableAnchor  id={'about_me_section_href'}>
                    <div id="about_me_section">
                        <div id="about_container">
                            <div id="about_me_content">
                                <h1>About me</h1>
                                <p>
                                Hello Thank you for visiting my website. I'm a web developer / designer with an experience of 3 years i'm seeking for reputation rather than money and my primary goal is Client satisfaction.
                                My aim has always been to produce website that work best for clients business and look beautiful and professional .
                                Thus, if you need quality Website or any other web work  It is a pleasure for me to work with you and i hope we accomplish a high quality with the lowest price available. Feel free to contact me !
                                </p>
                                <div>
                                    <Button variant="contained" className={classes.button}>Contact me</Button>
                                </div>
                            </div>
                            <div id="about_me_img">
                                <img alt="" src={About_me_img} />
                            </div>
                        </div> 
                    </div>
                </ScrollableAnchor>
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
                                        <Button variant="contained" className={classes.box_button}>Live</Button>
                                        <Button variant="contained" className={classes.box_button}>Code</Button>
                                        <Button variant="contained" className={classes.box_button}>More</Button>
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
                                        <Button variant="contained" className={classes.box_button}>Live</Button>
                                        <Button variant="contained" className={classes.box_button}>Code</Button>
                                        <Button variant="contained" className={classes.box_button}>More</Button>
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
                                        <Button variant="contained" className={classes.box_button}>Live</Button>
                                        <Button variant="contained" className={classes.box_button}>Code</Button>
                                        <Button variant="contained" className={classes.box_button}>More</Button>
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
                                        <Button variant="contained" className={classes.box_button}>Live</Button>
                                        <Button variant="contained" className={classes.box_button}>Code</Button>
                                        <Button variant="contained" className={classes.box_button}>More</Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                       
                    </div>

                    <div id="my_projects_btns">
                        <Button variant="contained" className={classes.more_button}>More Projects</Button>
                    </div>

                </div>

                <div id="skills_section">
                    <div id="skills_header">
                        <div id="skills_content">
                            <h1>Skills</h1>
                            <p>I have diffrents technologies in use, but i'm more skilled in JS than others .</p>
                        </div>
                        <div id="skills_illustration">
                            <SkillSvg id="skill_svg" />
                        </div>
                    </div>
                    <div id="skills_lists">

                    </div>
                </div>

            </div>   
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(Styles)(Home);