import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { logoutUser, GetGaUsers, GetGaNewUsers, GetGaPageViews, GetGaSessions, GetGaUsersMetrcis, handleDrawertoggle } from '../../actions/apiCalls';

import NavigatonBar from '../../styleComponents/navigation/NavigatonBar';
import LineChart from './charts/LineChart';
import UsersCount from './charts/UsersCount';
import NewUsersCount from './charts/NewUsersCount';
import PageViewsCount from './charts/PageViewsCount';
import SessionsCount from './charts/SessionsCount';
import GeoChart from './charts/GeoChart';

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
        margin:  theme.spacing(2),
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
    ChartBoxs:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: 2000
    }
})



class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            IsLoggedIn: false,
            user: '',
            GaMonthlyDate: {},
            GaWeeklyDate: {}
        }
    }

    componentDidMount() {
        this.setState({IsLoggedIn: this.props.user.IsLoggedIn})   
		if(!this.props.user.IsLoggedIn) { 
            this.props.history.push('/');
        }
        if(!this.props.user.user.role === 'admin'){
            this.props.history.push('/');
        }


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

        this.setState({GaMonthlyDate: GaMonthlyDate, GaWeeklyDate: GaWeeklyDate});

        if(this.props.Ga.GaUsers === '-'){
            this.props.GetGaUsers(GaMonthlyDate);
        }
        if(this.props.Ga.GaNewUsers === '-'){
            this.props.GetGaNewUsers(GaWeeklyDate);
        }
        if(this.props.Ga.GaPageViews === '-'){
            this.props.GetGaPageViews(GaMonthlyDate);
        }
        if(this.props.Ga.GaSessions === '-'){
            this.props.GetGaSessions(GaMonthlyDate);
        }
        if(this.props.Ga.GaUsersMetrics.length === 0){
            this.props.GetGaUsersMetrcis(GaMonthlyDate);
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

    RenderLineChart = (data) =>{
        const{Ga, SharedStyle} = this.props;
        if(Ga.GaUsersMetrics.length > 0){
            return(
                <LineChart SharedStyle={SharedStyle} data={Ga.GaUsersMetrics} />
            )
        }else{
            return null;
        }
    }

    render(){
        const{classes, user, Ga, SharedStyle} = this.props;
        
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
                    <div className={classes.ChartBoxs}>
                        {this.RenderLineChart()}
                        <GeoChart SharedStyle={SharedStyle} />
                    </div>
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



