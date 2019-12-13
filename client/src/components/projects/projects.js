import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import TabletPhoneSvg from '../svg_img/TabletPhoneSvg';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import Footer from '../footer/footer';

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

const Styles = theme =>({
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
    },
    MyProjectsSection:{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 2500,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    MyProjectsContainer:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '1rem',
        justifyContent: 'center',
    },
    MyProjectsContent:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '45%',
        margin: '1rem 0',
    },
    MyProjectsContentHeader:{
        color: '#72b6ff',
        textTransform: 'capitalize',
        marginBottom: '2rem',   
    },
    MyProjectsContentDesc:{
        fontSize: 18,
        marginBottom: '2rem',
        lineHeight: '2.2rem',
        fontWeight: '500',
    },
    MyProjectsImgContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '45%',
        margin: '1rem 0', 
    },
    MyProjectsImg:{
        width: '100%',
        marginTop:'4rem',
        maxWidth: 550,
        minWidth: 280,
        maxHeight: 580,
    },
    MyProjectsBoxes:{
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
    },
    MyProjectsBoxColumn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    MyProjectsBoxRow:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: '50%',
        minWidth: 300,
    },
    MyProjectsBox:{
        width: '40%',
        minWidth: 280,
        maxWidth: 340,
        border: '1px solid #eaeaea',
        margin: '2rem 1px',
        borderRadius: 5,
        overflow: 'hidden',
        boxShadow: '0px 6px 11px 1px #c1c1c1',
        maxGeight: 460,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor:' #fff',
    },
    MyProjectsBoxImg:{
        position: 'relative',
        height: 240,
        backgroundColor: '#fff',
        borderBottom: '1px solid #eaeaea',
        overflow: 'hidden',
    },
    MyProjectsBoxName:{
        padding: '1rem 0.5rem',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '500',
        borderBottom: '1px solid #eaeaea',
    },
    MyProjectsBoxDesc:{
        borderBottom: '1px solid #eaeaea',
        padding: '0.5rem',
        textAlign: 'center',
        color: '#1f1f1f',
    },
    MyProjectsBoxBtnContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '0.5rem',
    },
    MyProjectsBoxBtn:{
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
    AwsBtn:{
        '--slider-height-percentage': '100% !important',
        '--slider-transition-duration': '575ms !important',
        '--organic-arrow-thickness': '3px !important',
        '--organic-arrow-border-radius': '3px !important',
        '--organic-arrow-height': '25px !important',
        '--organic-arrow-color': '#fff !important',
        '--control-button-width': '10% !important',
        '--control-button-height': '25% !important',
        '--control-button-background': '#000000a1 !important',
        '--control-bullet-color': '#6a6a6a !important',
        '--control-bullet-active-color': '#6a6a6a !important',
        '--loader-bar-color': '#419aff !important',
        '--loader-bar-height': '6px !important',
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
    '@media(max-width: 770px)':{
        MyProjectsContainer:{
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0, 
        },
        MyProjectsContent:{
            width: '90%',
        },
        MyProjectsImgContainer:{
            display: 'block',
            width: '100%',
            justifyContent: 'center',
        },
        MyProjectsImg:{
            display: 'block',
            width:  '90%',
            maxWidth: 400,
            margin: '0 auto',
        },
        MyProjectsContentHeader:{
            marginBottom: '1rem',
        },
        MyProjectsContentDesc:{
            fontSize: 16,
            marginBottom: '1rem',
            lineHeight: '1.8rem', 
        },
        MyProjectsBoxes:{
            paddingBottom: 0,
        }
    }
})

export class Projects extends Component {
    render() {
        const{classes} = this.props;
        return (
            <div>

                 <Helmet>
                    <title>Bilel Moussa | Projects</title>
                    <meta name='description' content='Bilel Moussa Projects Page' />
                    <meta name='keywords' content='Web Developer Projects, UI/UX Projects, Web Designer Projects, Web Developer Works' />
                </Helmet>

                <div className={classes.goBackContainer}>
                    <Button variant="contained" className={classes.button} component={Link} to={`/`}>Go Back Home</Button>
                </div>

                <div className={classes.MyProjectsSection}>

                    <div className={classes.MyProjectsContainer}>
                        <div className={classes.MyProjectsContent}>
                            <h1 className={classes.MyProjectsContentHeader}>My Projects</h1>
                            <p className={classes.MyProjectsContentDesc}>
                            An effective and immersive user experience is what catches the attention and spreads a clear message. this is why i use modern UI/UX design like Illustration/Colors, gradients and the overlapping effect/3D graphics ...
                            <br/>
                            All of my projects are responsive and supported by modern browsers .     
                            </p>
                        </div>
                        <div className={classes.MyProjectsImgContainer}>
                            <TabletPhoneSvg className={classes.MyProjectsImg} />
                        </div>
                    </div>

                    <div className={classes.MyProjectsBoxes}>
                        <div className={classes.MyProjectsBoxColumn}>
                            <div className={classes.MyProjectsBoxRow}>

                                <div className={classes.MyProjectsBox}>
                                    <div className={classes.MyProjectsBoxImg}>
                                        <AwesomeSlider className={classes.AwsBtn} cssModule={AwesomeSliderStyles} bullets={false} fillParent={true}>
                                            <div data-src={Kpi_5} />
                                            <div data-src={Kpi_1} />
                                            <div data-src={Kpi_4} />
                                        </AwesomeSlider>
                                    </div>
                                    <div className={classes.MyProjectsBoxName}>
                                        KPI-APP
                                    </div>
                                    <div className={classes.MyProjectsBoxDesc}>
                                    KPI App is a Web Application for 3D Printing companies .
                                    </div>
                                    <div className={classes.MyProjectsBoxBtnContainer}>
                                        <Button variant='contained' className={classes.MyProjectsBoxBtn} href='https://kpi-application.herokuapp.com/' target='_blank'>Live</Button>
                                        <Button variant='contained' className={classes.MyProjectsBoxBtn} href='https://github.com/bilelmoussa/kpi-app' target='_blank'>Code</Button>
                                    </div>
                            </div>

                            <div className={classes.MyProjectsBox}>
                                <div className={classes.MyProjectsBoxImg}>
                                    <AwesomeSlider className={classes.AwsBtn} cssModule={AwesomeSliderStyles} bullets={false} fillParent={true}>
                                        <div data-src={Land_1} />
                                        <div data-src={land_2} />
                                        <div data-src={Land_3} />
                                    </AwesomeSlider>
                                </div>
                                <div className={classes.MyProjectsBoxName}>
                                    Landing Page Website
                                </div>
                                <div className={classes.MyProjectsBoxDesc}>
                                This is a Landing Page Website, i used Html/css and JavaScript(jQuery) for the design.
                                </div>
                                <div className={classes.MyProjectsBoxBtnContainer}>
                                    <Button variant='contained' className={classes.MyProjectsBoxBtn} href='https://bilelmoussa.github.io/landsafe/' target='_blank'>Live</Button>
                                    <Button variant='contained' className={classes.MyProjectsBoxBtn} href='https://github.com/bilelmoussa/landsafe' target='_blank'>Code</Button>
                                </div>
                            </div>

                        </div>

                        <div className={classes.MyProjectsBoxRow}>

                            <div className={classes.MyProjectsBox}>
                                <div className={classes.MyProjectsBoxImg}>
                                    <AwesomeSlider className={classes.AwsBtn} cssModule={AwesomeSliderStyles} bullets={false} fillParent={true}>
                                        <div data-src={nebula_5} />
                                        <div data-src={nebula_1} />
                                        <div data-src={nebula_2} />
                                        <div data-src={nebula_3} />
                                        <div data-src={nebula_4} />
                                    </AwesomeSlider>
                                </div>
                                <div className={classes.MyProjectsBoxName}>
                                    E-commerce Website 
                                </div>
                                <div className={classes.MyProjectsBoxDesc}>
                                    E-commerce website developed with wordpress / woocommerce and my custom Theme .
                                </div>
                                <div className={classes.MyProjectsBoxBtnContainer}>
                                    <Button variant='contained' className={classes.MyProjectsBoxBtn} href='https://nebula-shop.000webhostapp.com/' target='_blank'>Live</Button>
                                    <Button variant='contained' className={classes.MyProjectsBoxBtn} href='https://github.com/bilelmoussa/BrightCapella' target='_blank'>Code</Button>
                                </div>
                            </div>

                            <div className={classes.MyProjectsBox}>
                                <div className={classes.MyProjectsBoxImg}>
                                    <AwesomeSlider className={classes.AwsBtn} cssModule={AwesomeSliderStyles} bullets={false} fillParent={true}>
                                        <div data-src={elite4her_4} />
                                        <div data-src={elite4her_2} />
                                        <div data-src={elite4her_1} />
                                        <div data-src={elite4her_5} />
                                    </AwesomeSlider>
                                </div>
                                <div className={classes.MyProjectsBoxName}>
                                    Girly E-commerce Website 
                                </div>
                                <div className={classes.MyProjectsBoxDesc}>
                                    E-commerce website developed with Mern stack . 
                                </div>
                                <div className={classes.MyProjectsBoxBtnContainer}>
                                    <Button variant='contained' className={classes.MyProjectsBoxBtn} href='https://bilelmoussa.github.io/elite4you/' target='_blank'>Live</Button>
                                    <Button variant='contained' className={classes.MyProjectsBoxBtn} href='https://github.com/bilelmoussa/elite4you' target='_blank'>Code</Button>
                                </div>
                            </div>

                        </div>
                    </div>
                
                </div>

                </div>

                <Footer />
            </div>
        )
    }
}


Projects.propTypes = {
    classes: PropTypes.object.isRequired,   
}

export default withStyles(Styles)(Projects)
