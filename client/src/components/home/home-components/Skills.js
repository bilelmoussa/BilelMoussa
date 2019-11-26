import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import SkillSvg from '../../svg_img/skill_svg';
import SkillChart from './skill-chart';
import Card from '@material-ui/core/Card';

const Styles = theme =>({
    SkillSection:{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '5rem',
        marginBottom: '5rem',
        maxWidth: 2500,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#f9f9f9',   
    },
    SkillContainer:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '1rem',
        justifyContent: 'center',
    },
    SkillContent:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '45%',
        margin: '1rem 0',
    },
    SkillContentHeader:{
        color: '#72b6ff',
        textTransform: 'capitalize',
        marginBottom: '2rem',
    },
    SkillContentDesc:{
        fontSize: 18,
        marginBottom: '2rem',
        lineHeight: '2.2rem',
        fontWeight: 500,
    },
    SkillImgContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: '1rem 0',
        width: '45%',
    },
    SkillImg:{
        width: '100%',
        marginTop: '4rem',
        maxWidth: 300,
        minWidth: 280, 
    },
    SkillsList:{
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
    },
    SkillsCat:{
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        margin: '0 auto',
        overflow: 'hidden',
        marginTop: '0.5rem',
        marginBottom: '2.5rem',
    },
    SkillCard:{
        display: 'flex',
        flexDirection: 'column',
        margin: '2rem 0'
    },
    SkillCardContent:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    SkillCardHeader:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '2rem 0',
        color: '#4a4a4a'
    },
    '@media(max-width: 770px)':{
        SkillContainer:{
            flexDirection: 'column',
            alignItems: 'center',
        },
        SkillContent:{
            width: '90%'
        },
        SkillImgContainer:{
            width: '90%',
            justifyContent: 'center',
        },
        SkillImg:{
            marginTop: 0,
        },
        SkillContentHeader:{
            marginBottom: '1rem',
        },
        SkillContentDesc:{
            fontSize: 16,
            marginBottom: '1rem',
            lineHeight: '1.8rem',
        }
    }

})

class Skills extends Component {
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

    handleScroll(){
        this.skills_animation();
    }

    handleLoad(){
        this.skills_animation();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentDidMount(){
        
        let navData = window.performance.getEntriesByType('navigation');
        if (navData.length > 0 && navData[0].loadEventEnd > 0)
        {
            window.addEventListener('scroll', this.handleScroll);
        } else {
            window.addEventListener('load', this.handleLoad);
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props !== prevProps){
            window.addEventListener('scroll', this.handleScroll);
        }
    }


    componentWillUnmount(){
        window.removeEventListener('load', this.handleLoad);
        window.removeEventListener('scroll', this.handleScroll);
    }


    render() {
        const{classes} = this.props;
        return (
            <div>
                <div className={classes.SkillSection}>
                    <div className={classes.SkillContainer}>
                        <div className={classes.SkillContent}>
                            <h1 className={classes.SkillContentHeader}>Skills</h1>
                            <p className={classes.SkillContentDesc}>
                            I have the skills and abilities to develop and design websites, i am a self taught, i have been learning on online platforms for more than 2 years like (codecademy/sololearn/w3schools ...) .
                            <br/>
                            My main programming language is Javascript, i use some of the js frameworks/libraries too like React and Angular .
                            </p>
                        </div>
                        <div className={classes.SkillImgContainer}>
                            <SkillSvg className={classes.SkillImg} />
                        </div>
                    </div>
                    <div className={classes.SkillsList}>
                        <div className={classes.SkillsCat}>
                            <Card className={classes.SkillCard}>
                                <div className={classes.SkillCardHeader}>
                                    <h1>Front-End Technologies</h1>
                                </div>
                                <div className={classes.SkillCardContent}> 
                                    <SkillChart scrolltime={this.state.js_scroll_time} title={'JavaScript'} value={80} id={'JavaScript'}/>
                                    <SkillChart scrolltime={this.state.html_scroll_time} title={'HTML'} value={95} id={'HTML'}/>
                                    <SkillChart scrolltime={this.state.css_scroll_time} title={'css'} value={85} id={'css'}/>
                                    <SkillChart scrolltime={this.state.scss_scroll_time} title={'scss'} value={60} id={'scss'}/>
                                </div>
                            </Card> 
                            <Card className={classes.SkillCard}>
                                <div className={classes.SkillCardHeader}>
                                    <h1>Back-End Technologies And Others</h1>
                                </div>
                                <div className={classes.SkillCardContent}> 
                                    <SkillChart scrolltime={this.state.node_scroll_time} title={'NodeJS'} value={65} id={'NodeJS'}/>
                                    <SkillChart scrolltime={this.state.php_scroll_time} title={'PHP'} value={40} id={'PHP'}/>
                                    <SkillChart scrolltime={this.state.wordpress_scroll_time} title={'Wordpress'} value={50} id={'Wordpress'}/>
                                    <SkillChart scrolltime={this.state.git_github_scroll_time} title={'Git & Github'} value={40} id={'Git_Github'}/>
                                </div>
                            </Card> 
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(Styles)(Skills);
