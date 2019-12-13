import React, { Component } from 'react'
import Contact from '../home/home-components/contact';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import Footer from '../footer/footer';

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
    goBackContainer:{
        display: "flex",
        margin: "1rem 2rem"
    }
})

class contact extends Component {
    componentDidMount(){
        window.scrollTo(0, 0); 
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Helmet>
                    <title>Bilel Moussa | Contact</title>
                    <meta name="description" content="Bilel Moussa Contact Page" />
                    <meta name="keywords" content="Web Developer Contact Page, Web Designer Contact Page, Contact Form"/>
                </Helmet>
                <div className={classes.goBackContainer}>
                    <Button variant="contained" className={classes.button} component={Link} to={`/`}>Go Back Home</Button>
                </div>
                <Contact />
                <Footer />
            </div>
        )
    }
}

contact.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(Styles)(contact);
