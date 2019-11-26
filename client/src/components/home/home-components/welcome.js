import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import WelcomeSvg from '../../../static/img/WelcomeSvg.svg';


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
    welcomeSection:{
        position: 'relative'
    },
    welcomeSvgContainer:{
        width: '100%',
        maxWidth: 2500,
        margin: '0 0 0 auto'
    },
    svgBackground:{
        zIndex: '-2',
        position: 'relative',
        top: 0,
        right: 0,
        width: '100%',
    },
    welcomeSectionContent:{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 2500,
    },
    welcomeHeader:{
        position: 'relative',
        marginTop: '10%',
        marginLeft: '1rem',
        color: '#4e4e4e',
        letterSpacing: 2,
        fontSize: '3em',
        padding: '0.5rem 1rem',
        marginRight: 'auto',
        borderRadius: 3,
        textAlign: 'center',
        zIndex: 2,
        overflow: 'hidden',
        '&::before':{
            position: 'absolute',
            content: '""',
            height: '100%',
            width: '100%',
            zIndex: '-1',
            backgroundColor: '#fff',
            opacity: '0.5',
            borderRadius: 3,
        }
    },
    welcomeDescription:{
        position: 'relative',
        marginTop: '1rem',
        marginLeft: '1rem',
        fontSize: '1.5em',
        color: '#4e4e4e',
        padding: '0.5rem 1rem',
        marginRight: 'auto',
        borderRadius: 3,
        textAlign: 'center',
        zIndex: 2,
        overflow: 'hidden',
        '&::before':{
            position: 'absolute',
            content: '""',
            height: '100%',
            width: '100%',
            zIndex: '-1',
            backgroundColor: '#fff',
            opacity: '0.5',
            borderRadius: 3,
        }
    },
    welcomeBtnsContainer:{
        display: 'flex',
        flexDirection: 'row',
        marginRight: 'auto',
        marginLeft: '1rem',
        padding: '0.5rem 1rem',
        flexWrap: 'wrap-reverse',
        marginTop: '1rem',
        zIndex: 2,
    },
    scrollDown:{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    scrollDownA:{
        position: 'relative',
        bottom: 10,
        zIndex: 2,
        textDecoration: 'none',
        paddingTop: 60,
        color: '#4e4e4e',
        textTransform: 'capitalize',
        letterSpacing: 1,
        fontSize: 18,
        margin: 'auto auto 0 auto',
        cursor: 'pointer',
    },
    scrollDownASpan:{
        position: 'absolute',
        top: 0,
        left: '50%',
        width: 30,
        height: 50,
        marginLeft: -15,
        border: '2px solid #3b94db',
        borderRadius: 50,
        boxSizing: 'border-box',
        '&::before':{
            position: 'absolute',
            top: 10,
            left: '50%',
            content: '""',
            width: 6,
            height: 6,
            marginLeft: -3,
            backgroundColor: '#fff',
            borderRadius: '100%',
            '-webkit-animation': 'sdb10 2s infinite',
            animation: 'sdb10 2s infinite',
            boxSizing: 'border-box',
        },
        '&::after':{
            position: 'absolute',
            content: '""',
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
            background: '#afdbff',
            borderRadius: 50,
            zIndex: -1,
            opacity: '0.7',
        }
    },
    '@media (max-width: 600px)': {
        welcomeSectionContent:{
            position: 'relative',
            marginBottom: '3rem'
        },
        welcomeHeader:{
            marginTop: '-40%',
            marginLeft: 'auto'
        },
        welcomeDescription:{
            marginLeft: 'auto'
        },
        welcomeBtnsContainer:{
            marginRight: 0,
            justifyContent: 'center'
        }
    },
    '@media (max-width: 400px)': {
        welcomeHeader:{
            fontSize: '2em',
        },
        welcomeDescription:{
            fontSize: '1em'
        },
        scrollDownASpan:{
            bottom: 0,
        }
    },
    '@media(max-width: 920px)':{
        scrollDown:{
            position: 'relative',
            height: 100,
            marginTop: '-10%'
        }
    },
    '@media(max-height: 520px)':{
        welcomeHeader:{
            margintop: '-40%',
            marginLeft: 'auto',
        }
    },
    '@media(min-width: 601px)':{
        welcomeHeader:{
            margintop: '10%',
            marginLeft: '1rem',
        }
    }
})   

class Welcome extends Component {


    render() {
        const{classes} = this.props;
        return (
            <div>
                <div className={classes.welcomeSection}>
                    <div className={classes.welcomeSvgContainer}>
                        <img className={classes.svgBackground} alt="welcome img" src={WelcomeSvg} />
                    </div>
                    <div className={classes.welcomeSectionContent}>
                        <h1 className={classes.welcomeHeader}>Hi I'm Bilel Moussa</h1> 
                        <p className={classes.welcomeDescription}>A Web <b>Developer</b> & Web <b>Designer</b></p>
                        <div className={classes.welcomeBtnsContainer}>
                            <Button variant='contained' className={classes.button} component={Link} to={`/projects`}>Projects</Button>
                            <Button variant='contained' className={classes.button} component={Link} to={`/contact`}>Contact Me</Button>
                        </div>
                    </div>
                    <div className={classes.scrollDown}>
                        <a href='#about_me_section_href' className={classes.scrollDownA}><span className={classes.scrollDownASpan}></span>Scroll</a>
                    </div>           
                </div>                
            </div>
        )
    }
}

Welcome.protoType = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(Styles)(Welcome);