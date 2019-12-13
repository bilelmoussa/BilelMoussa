import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Contact from './home-components/contact';
import { GetIpInfo, GetLocalIpInfo } from '../../actions/apiCalls'
import {Helmet} from "react-helmet";

import Welcome from './home-components/welcome';
import AboutMe from './home-components/AboutMe';
import MyProjects from './home-components/MyProjects'
import Skills from './home-components/Skills'

import Footer from '../footer/footer';


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
});






class Home extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){
        
        if(!localStorage.IpApi){
            this.props.GetIpInfo();
        }else{
            const IpApi = localStorage.IpApi;
            const parseIpApi = JSON.parse(IpApi);
            this.props.GetLocalIpInfo(parseIpApi);
        }

    }

    render(){

        return(
            <div>
                <Helmet>
                    <title>Bilel Moussa</title>
                    <meta name='description' content='Bilel Moussa Personal Website' />
                    <meta name="keywords" content='bilel moussa, bilel, moussa, Personal Website, Portfolio, Web Developer, Web Designer, HTML, CSS, XML,JavaScript, react, UI, UX ,Material-ui, Hammam sousse, sousse, Tunisia, TN, North Africa, MENA Region, Africa, Arabe' />
                </Helmet>

                <Welcome />

                <AboutMe />

                <MyProjects />

                <Skills />
                
                <Contact />
                
                <Footer />
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