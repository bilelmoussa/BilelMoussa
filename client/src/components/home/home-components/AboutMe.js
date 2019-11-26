import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import About_me_img from '../../../static/img/about_me.jpg';
import Button from '@material-ui/core/Button';


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
    AboutMeSection:{
        marginTop: '1rem',
        overflow: 'hidden',
        maxWidth: 2500,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '5rem',        
    },
    AboutMeContainer:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '1rem',
        justifyContent: 'center',
    },
    AboutMeContent:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '45%',
        margin: '1rem 0',
    },
    AboutMeContentHeader:{
        color:' #72b6ff',
        textTransform: 'capitalize',
        marginBottom: '2rem',
    },
    AboutMeContentDesc:{
        fontSize: 18,
        marginBottom: '2rem',
        lineHeight: '2.2rem',
        fontWeight: '500',
    },
    AboutMeImgContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '45%',
        margin: '1rem 0',
    },
    AboutMeImg:{
        height: 500,
        marginTop: '4rem',
    },
    '@media(max-width: 770px)':{
        AboutMeContainer:{
            flexDirection: 'column',
            alignItems: 'center',
        },
        AboutMeContent:{
            width: '90%',
        },
        AboutMeContentHeader:{
            marginBottom: '1rem',
        },
        AboutMeContentDesc:{
            fontSize: 16,
            marginBottom: '1rem',
            lineHeight: '1.8rem',
        },
        AboutMeImgContainer:{
            width: '90%',
            justifyContent: 'center',
        },
        AboutMeImg:{
            marginTop: 0,
            height: 400,
        }
    }
})

class AboutMe extends Component {
    render() {
        const{classes} = this.props;
        return (
            <div>
                <ScrollableAnchor  id={'about_me_section_href'}>
                    <div className={classes.AboutMeSection}>
                        <div className={classes.AboutMeContainer}>
                            <div className={classes.AboutMeContent}>
                                <h1 className={classes.AboutMeContentHeader}>About me</h1>
                                <p className={classes.AboutMeContentDesc}>
                                Hello, Thank you for visiting my website. I'm a web developer / designer with an experience of 3 years i'm seeking for reputation rather than money and my primary goal is Client satisfaction.
                                My aim has always been to produce website that works best for clients business and looks beautiful and professional .
                                Thus, if you need quality Website or any other web work  It is a pleasure for me to work with you and i hope we accomplish a high quality with the lowest price available. Feel free to contact me !
                                </p>
                                <div>
                                    <Button variant='contained' className={classes.button} component={Link} to={`/contact`} >Contact me</Button>
                                </div>
                            </div>
                            <div className={classes.AboutMeImgContainer}>
                                <img className={classes.AboutMeImg} alt="bilel moussa" src={About_me_img} />
                            </div>
                        </div> 
                    </div>
                </ScrollableAnchor>                   
            </div>
        )
    }
}

AboutMe.protoType = {
    classes: PropTypes.object.isRequired
}

export default withStyles(Styles)(AboutMe)
