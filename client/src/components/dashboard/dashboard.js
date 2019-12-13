import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavigatonBar from '../../styleComponents/navigation/NavigatonBar';
import { withStyles } from '@material-ui/core/styles';
import { logoutUser, GetGaUsers, GetGaNewUsers, GetGaPageViews, GetGaSessions, GetGaUsersMetrcis, handleDrawertoggle } from '../../actions/apiCalls';
import LineChart from './charts/LineChart';
import UsersCount from './charts/UsersCount';
import NewUsersCount from './charts/NewUsersCount';
import PageViewsCount from './charts/PageViewsCount';
import SessionsCount from './charts/SessionsCount'
import moment from 'moment';

const styles = theme => ({
    root:{
        display: 'flex'
    },
    MultiBoxs:{
        padding: theme.spacing(3, 2),
        display: "flex",
        flexDirection: "row",
        margin: "1rem 0",
        flexWrap: "wrap",
        maxWidth: 1200,
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
        overflow: "auto"
    },
    dashRootH1:{
        marginBottom: "1rem"
    },
    dashH1:{
        margin: "1rem 0",
        font: "300 18px/14px 'Roboto',sans-serif",
        color: "#4a4a4a",
        lineHeight: "1.5em"
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
        let last7days = moment().subtract(7, 'days').format("YYYY-MM-DD");
        let lastMonth = moment().subtract(28, 'days').format("YYYY-MM-DD");
        let yesterday = moment().subtract(1, 'days').format("YYYY-MM-DD");

        const GaMonthlyDate = {
            startDate: lastMonth,
            endDate: yesterday
        }

        const GaWeeklyDate = {
            startDate: last7days,
            endDate: yesterday
        }

        this.props.GetGaUsers(GaMonthlyDate);
        this.props.GetGaNewUsers(GaWeeklyDate);
        this.props.GetGaPageViews(GaMonthlyDate);
        this.props.GetGaSessions(GaMonthlyDate);
        this.props.GetGaUsersMetrcis(GaMonthlyDate);

        this.setState({IsLoggedIn: this.props.user.IsLoggedIn})   
		if(!this.state.IsLoggedIn) { 
            this.props.history.push('/');
        }
        if(!this.props.user.user.role === 'admin'){
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
            if(!this.props.user.IsLoggedIn) { 
                this.props.history.push('/');
            }
            if(!this.props.user.user.role === 'admin'){
                this.props.history.push('/');
            }
        }else{
            return null;
        }
    }

    logoutUser(e){
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }   


    render(){
        const{classes, user, Ga} = this.props;
        return(
            <div className={classes.root}>
                <NavigatonBar LogoutUser={this.logoutUser.bind(this)} handleDrawertoggle={this.props.handleDrawertoggle} user={user}  />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <div className={classes.dashRootH1}>
                        <h1 className={classes.dashH1}>Dashboard / Google Analytics</h1>
                    </div>
                    <div className={classes.MultiBoxs}>
                        <UsersCount users={Ga.GaUsers}/>
                        <NewUsersCount NewUsers={Ga.GaNewUsers}/>
                        <PageViewsCount PageViews={Ga.GaPageViews}/>
                        <SessionsCount Sessions={Ga.GaSessions}/>
                    </div>
                    <LineChart SharedStyle={this.props.SharedStyle} data={Ga.GaUsersMetrics}/>
                </main> 
            </div>
        );
    }
}

Dashboard.protoType = {
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
    GetGaUsers: PropTypes.func.isRequired,
    GetGaNewUsers: PropTypes.func.isRequired,
    GetGaPageViews: PropTypes.func.isRequired,
    GetGaSessions: PropTypes.func.isRequired,
    GetGaUsersMetrcis: PropTypes.func.isRequired,
    handleDrawertoggle: PropTypes.func.isRequired,
    SharedStyle: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    Ga: state.Ga,
    SharedStyle: state.SharedStyle
});

export default connect(mapStateToProps, {logoutUser, GetGaUsers, GetGaNewUsers, GetGaPageViews, GetGaSessions, GetGaUsersMetrcis, handleDrawertoggle})(withStyles(styles)(Dashboard));



