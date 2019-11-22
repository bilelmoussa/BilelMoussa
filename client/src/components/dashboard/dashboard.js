import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavigatonBar from '../../styleComponents/navigation/NavigatonBar';
import { withStyles } from '@material-ui/core/styles';
import {logoutUser} from '../../actions/apiCalls';

const styles = theme => ({
    root:{
        display: 'flex'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
})



class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            IsLoggedIn: false,
            user: '',
        }
    }

    componentDidMount() {
        this.setState({IsLoggedIn: this.props.user.IsLoggedIn})   
		if(!this.state.IsLoggedIn) { 
            this.props.history.push('/');
        }
    }
    
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps !== prevState){
            return {IsLoggedIn: nextProps.user.IsLoggedIn}
        }else{
            return null;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props){
            this.setState({
                IsLoggedIn: this.props.user.IsLoggedIn
            })
        }else{
            return null;
        }
    }

    logoutUser(e){
        e.preventDefault();
        console.log(this.props.history);
        this.props.logoutUser(this.props.history);
    }

    render(){
        const{classes, user} = this.props;
        return(
            <div className={classes.root}>
                <NavigatonBar LogoutUser={this.logoutUser.bind(this)} user={user} />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <div>Hi Dashboard !!</div>
                </main> 
            </div>
        );
    }
}

Dashboard.protoType = {
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps, {logoutUser})(withStyles(styles)(Dashboard));



