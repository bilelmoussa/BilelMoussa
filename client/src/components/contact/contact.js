import React, { Component } from 'react'
import Contact from '../home/home-components/contact';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
                <div className={classes.goBackContainer}>
                    <Button variant="contained" className={classes.button} component={Link} to={`/`}>Go Back Home</Button>
                </div>
                <Contact />
            </div>
        )
    }
}

contact.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(Styles)(contact);
