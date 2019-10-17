import React, { Component } from 'react';
import Img from '../../static/img/Asset4.svg';
import About_me_img from '../../static/img/about_me.jpg';
import My_projects_svg from '../../static/img/my_projects.svg'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


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
    input: {
        display: 'none',
    },
});

class Home extends Component {

    handleScrollToStats = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 900,
            behavior: 'smooth'
        })
   }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <div id="welcome_section">
                        <img id="svg_background" alt="" src={Img} />
                        <div id="welcome_section_content">
                            <h1 id="welcome_header">Hi I'm Bilel Moussa</h1> 
                            <p id="welcome_description">A Web <b>Developer</b> & Web <b>Designer</b></p>
                            <div id="welcome_btns_container">
                                <Button variant="contained" className={classes.button}>Projects</Button>
                                <Button variant="contained" className={classes.button}>Contact Me</Button>
                            </div>
                        </div>
                        <div id="scroll_down">
                            <a href="#thanks" onClick={this.handleScrollToStats}><span></span>Scroll</a>
                        </div>           
                </div>
                
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
                                </div>
                                <div className="project_box">
                                </div>
                            </div>
                            <div className="project_box_row">
                                <div className="project_box">
                                </div>
                                <div className="project_box">
                                </div>
                            </div>
                        </div>
                        <div className="project_box_column column-2">
                            <div className="project_box_row">
                                <div className="project_box">
                                </div>
                                <div className="project_box">
                                </div>
                            </div>
                            <div className="project_box_row">
                                <div className="project_box">
                                </div>
                                <div className="project_box">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="my_projects_btns">
                        <Button variant="contained" className={classes.more_button}>More</Button>
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