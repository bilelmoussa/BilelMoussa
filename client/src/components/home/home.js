import React, { Component } from 'react';
import WelcomeSvg from '../../static/img/WelcomeSvg.svg';
import About_me_img from '../../static/img/about_me.jpg';
import TabletPhoneSvg from '../svg_img/TabletPhoneSvg';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import SkillSvg from '../svg_img/skill_svg';
import ScrollableAnchor from 'react-scrollable-anchor';
import SkillChart from './home-components/skill-chart';
import Card from '@material-ui/core/Card';
import Contact from './home-components/contact';
import { GetIpInfo, GetLocalIpInfo } from '../../actions/apiCalls'
import {Helmet} from "react-helmet";

import Kpi_5 from '../../static/img/KPI_5.jpg';
import Kpi_1 from '../../static/img/KPI_1.jpg';
import Kpi_4 from '../../static/img/KPI_4.jpg';
import Land_1 from '../../static/img/Land_1.jpg';
import land_2 from '../../static/img/Land_2.jpg';
import Land_3 from '../../static/img/Land_3.jpg';
import nebula_5 from '../../static/img/nebula_5.jpg';
import nebula_1 from '../../static/img/nebula_1.jpg';
import nebula_2 from '../../static/img/nebula_2.jpg';
import nebula_3 from '../../static/img/nebula_3.jpg';
import nebula_4 from '../../static/img/nebula_4.jpg';
import elite4her_4 from '../../static/img/elite4her_4.jpg';
import elite4her_2 from '../../static/img/elite4her_2.jpg';
import elite4her_1 from '../../static/img/elite4her_1.jpg';
import elite4her_5 from '../../static/img/elite4her_5.jpg';

const Styles = theme => ({
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
    more_button:{
        boxShadow: 'none',
        margin: theme.spacing(1),
        backgroundColor: '#419aff',
        borderColor: '#419aff',
        color: '#fff',
        textTransform: 'capitalize',
        letterSpacing: 1,
        padding: '6px 1.5rem',
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
    input: {
        display: 'none',
    },
    pog_bar:{
        width: '50%',
        maxWidth: 500,
        minWidth: 200,
        height: 16,
        margin: '0 1rem',
        marginTop: 5,
    },
    pog_bar_color:{
        backgroundColor: '#72b6ff'
    },
    card:{
        display: 'flex',
        flexDirection: 'column',
        margin: '2rem 0'
    },
    card_content:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    card_header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '2rem 0',
        color: '#4a4a4a'
    }
});




class Home extends Component {
    constructor(){
        super();
        this.state = {
            js_value: 80,
            html_value: 99,
            css_value: 80,
            nodejs_value: 60,
            php_value: 40,
            js_scroll_time: false,
            html_scroll_time: false,
            css_scroll_time: false,
            scss_scroll_time: false,
            node_scroll_time: false,
            php_scroll_time: false,
            wordpress_scroll_time: false,
            git_github_scroll_time: false
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleLoad = this.handleLoad.bind(this);

    }


    componentDidMount(){

        let navData = window.performance.getEntriesByType('navigation');
        if (navData.length > 0 && navData[0].loadEventEnd > 0)
        {
            window.addEventListener('scroll', this.handleScroll);
        } else {
            window.addEventListener('load', this.handleLoad);
        }

        if(!localStorage.IpApi){
            this.props.GetIpInfo();
        }else{
            const IpApi = localStorage.IpApi;
            const parseIpApi = JSON.parse(IpApi);
            this.props.GetLocalIpInfo(parseIpApi);
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props !== prevProps){
            window.addEventListener('scroll', this.handleScroll);
        }
    }

    handleLoad(){
        this.skills_animation();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('load', this.handleLoad);
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        this.skills_animation();
    }

    skills_animation(){
        //js
        let JavaScript = document.getElementById('JavaScript');
        let js_oTOp = JavaScript.offsetTop - window.innerHeight;
        
        if(window.pageYOffset > js_oTOp){
            this.setState({js_scroll_time: true});
        }

        //html
        let Html = document.getElementById('HTML');
        let html_oTOp = Html.offsetTop - window.innerHeight;

        if(window.pageYOffset > html_oTOp){
            this.setState({html_scroll_time: true});
        }

        //css
        let css = document.getElementById('css');
        let css_oTOp = css.offsetTop - window.innerHeight;

        if(window.pageYOffset > css_oTOp ){
            this.setState({css_scroll_time: true});
        }

        //scss
        let scss = document.getElementById('scss');
        let scss_oTOp = scss.offsetTop - window.innerHeight;

        if(window.pageYOffset > scss_oTOp ){
            this.setState({scss_scroll_time: true});
        }


        //node
        let node = document.getElementById('NodeJS');
        let node_oTOp = node.offsetTop - window.innerHeight;

        if(window.pageYOffset > node_oTOp ){
            this.setState({node_scroll_time: true});
        }
        
        //Php
        let php = document.getElementById('PHP');
        let php_oTOp = php.offsetTop - window.innerHeight;

        if(window.pageYOffset > php_oTOp ){
            this.setState({php_scroll_time: true});
        }
        
        //Wordpress
        let wordpress = document.getElementById('Wordpress');
        let wordpress_oTOp = wordpress.offsetTop - window.innerHeight;

        if(window.pageYOffset > wordpress_oTOp ){
            this.setState({wordpress_scroll_time: true});
        }
        
        //Git & Github
        let git_github = document.getElementById('Git_Github');
        let git_github_oTOp = git_github.offsetTop - window.innerHeight;

        if(window.pageYOffset > git_github_oTOp ){
            this.setState({git_github_scroll_time: true});
        }        
    }

    render(){
        const { classes } = this.props;

        return(
            <div>
                <Helmet>
                    <title>Bilel Moussa</title>
                    <meta name='description' content='Bilel Moussa Personal Website' />
                    <meta name="keywords" content='bilel moussa, bilel, moussa, Personal Website, Portfolio, Web Developer, Web Designer, HTML, CSS, XML,JavaScript, react, UI, UX ,Material-ui, Hammam sousse, sousse, Tunisia, TN, North Africa, MENA Region, Africa, Arabe' />
                </Helmet>
                
                <div id='welcome_section'>
                    <div id='welcome_svg_container'>
                        <img id='svg_background' alt="welcome img" src={WelcomeSvg} />
                    </div>
                    <div id='welcome_section_content'>
                        <h1 id='welcome_header'>Hi I'm Bilel Moussa</h1> 
                        <p id='welcome_description'>A Web <b>Developer</b> & Web <b>Designer</b></p>
                        <div id='welcome_btns_container'>
                            <Button variant='contained' className={classes.button} component={Link} to={`/projects`}>Projects</Button>
                            <Button variant='contained' className={classes.button} component={Link} to={`/contact`}>Contact Me</Button>
                        </div>
                    </div>
                    <div id='scroll_down'>
                        <a href='#about_me_section_href'><span></span>Scroll</a>
                    </div>           
                </div>

                <ScrollableAnchor  id={'about_me_section_href'}>
                    <div id='about_me_section'>
                        <div id='about_container'>
                            <div id='about_me_content'>
                                <h1>About me</h1>
                                <p>
                                Hello, Thank you for visiting my website. I'm a web developer / designer with an experience of 3 years i'm seeking for reputation rather than money and my primary goal is Client satisfaction.
                                My aim has always been to produce website that works best for clients business and looks beautiful and professional .
                                Thus, if you need quality Website or any other web work  It is a pleasure for me to work with you and i hope we accomplish a high quality with the lowest price available. Feel free to contact me !
                                </p>
                                <div>
                                    <Button variant='contained' className={classes.button} component={Link} to={`/contact`} >Contact me</Button>
                                </div>
                            </div>
                            <div id='about_me_img'>
                                <img alt="" src={About_me_img} />
                            </div>
                        </div> 
                    </div>
                </ScrollableAnchor>
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
                            <TabletPhoneSvg />
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
                                            <div data-src={land_2} />
                                            <div data-src={Land_3} />
                                        </AwesomeSlider>
                                    </div>
                                    <div className='project_box_title'>
                                        Landing Page Website
                                    </div>
                                    <div className='project_box_description'>
                                    This is a Landing Page Website, i used Html/css and JavaScript(jQuery) for the design.
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
                                        <Button variant='contained' className={classes.box_button} href='https://github.com/bilelmoussa/elite4you' target='_blank'>Code</Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                       
                    </div>

                    <div id='my_projects_btns'>
                        <Button variant='contained' className={classes.more_button} component={Link} to={`/projects`} >More Projects</Button>
                    </div>

                </div>

                <div id='skills_section'>
                    <div id='skills_header'>
                        <div id='skills_content'>
                            <h1>Skills</h1>
                            <p>
                            I have the skills and abilities to develop and design websites, i am a self taught, i have been learning on online platforms for more than 2 years like (codecademy/sololearn/w3schools ...) .
                            <br/>
                            My main programming language is Javascript, i use some of the js frameworks/libraries too like React and Angular .
                            </p>
                        </div>
                        <div id='skills_illustration'>
                            <SkillSvg id='skill_svg' />
                        </div>
                    </div>
                    <div id='skills_lists'>
                        <div className='skills_cat'>
                            <Card className={classes.card}>
                                <div className={classes.card_header}>
                                    <h1>Front-End Technologies</h1>
                                </div>
                                <div className={classes.card_content}> 
                                    <SkillChart scrolltime={this.state.js_scroll_time} title={'JavaScript'} value={80} id={'JavaScript'}/>
                                    <SkillChart scrolltime={this.state.html_scroll_time} title={'HTML'} value={95} id={'HTML'}/>
                                    <SkillChart scrolltime={this.state.css_scroll_time} title={'css'} value={85} id={'css'}/>
                                    <SkillChart scrolltime={this.state.scss_scroll_time} title={'scss'} value={60} id={'scss'}/>
                                </div>
                            </Card> 
                            <Card className={classes.card}>
                                <div className={classes.card_header}>
                                    <h1>Back-End Technologies And Others</h1>
                                </div>
                                <div className={classes.card_content}> 
                                    <SkillChart scrolltime={this.state.node_scroll_time} title={'NodeJS'} value={65} id={'NodeJS'}/>
                                    <SkillChart scrolltime={this.state.php_scroll_time} title={'PHP'} value={40} id={'PHP'}/>
                                    <SkillChart scrolltime={this.state.wordpress_scroll_time} title={'Wordpress'} value={50} id={'Wordpress'}/>
                                    <SkillChart scrolltime={this.state.git_github_scroll_time} title={'Git & Github'} value={40} id={'Git_Github'}/>
                                </div>
                            </Card> 
                        </div>
                    </div>
                </div>

                <Contact />
                

            </div>   
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    ipinfo: PropTypes.object.isRequired,
    GetIpInfo: PropTypes.func.isRequired,
    GetLocalIpInfo: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	ipinfo: state.ipinfo,
})

export default connect(mapStateToProps, {GetIpInfo, GetLocalIpInfo})(withStyles(Styles)(Home));