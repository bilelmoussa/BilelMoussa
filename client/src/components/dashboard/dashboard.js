import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { logoutUser, GetGaUsers, GetGaNewUsers, GetGaPageViews, GetGaSessions, GetGaUsersMetrcis, handleDrawertoggle } from '../../actions/apiCalls';

import NavigatonBar from '../../styleComponents/navigation/NavigatonBar';
import LineChart from './charts/LineChart/LineChart';
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
        padding: `${theme.spacing(1)}px 0`,
        display: "flex",
        flexDirection: "row",
        margin: "0.5rem 0",
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
        margin:  `${theme.spacing(2)}px 0`,
        overflow: "auto"
    },
    dashH1:{
        margin: "0 1rem",
        font: "300 18px/14px 'Roboto',sans-serif",
        color: "#4a4a4a",
        lineHeight: "1.5em"
    },
    ChartBoxs:{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: 1500,
    }
})



class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            minWidth: 0,
            IsLoggedIn: false,
            user: '',
            GaLastYearDate: {},
            GaLast180Days: {},
            GaLast90Days: {},
            GaLastMonthDate: {},
            GaLastWeekDate: {},
        }
    }

    componentDidMount() {
        this.setState({IsLoggedIn: this.props.user.IsLoggedIn});   
		if(!this.props.user.IsLoggedIn) { 
            this.props.history.push('/');
        }
        if(!this.props.user.user.role === 'admin'){
            this.props.history.push('/');
        }

        //Style for responsive
        if(window.innerWidth < 600){
            const ScreenWidthNoNav = window.innerWidth - 53;
            this.setState({minWidth: ScreenWidthNoNav});
        }

        window.addEventListener("resize", () => {
            if(window.innerWidth < 600 && window.innerWidth >= 300){
                const ScreenWidthNoNav = window.innerWidth - 53;
                this.setState({minWidth: ScreenWidthNoNav});
            }
        });
        

        let lastyear  = moment().subtract(365, 'days').format("YYYY-MM-DD");
        let last180days = moment().subtract(180, 'days').format("YYYY-MM-DD");
        let last90days = moment().subtract(90, 'days').format("YYYY-MM-DD");
        let lastMonth = moment().subtract(28, 'days').format("YYYY-MM-DD");
        let last7days = moment().subtract(7, 'days').format("YYYY-MM-DD");
        let yesterday = moment().subtract(1, 'days').format("YYYY-MM-DD");
        
        const GaLastYearDate = {
            startDate: lastyear,
            endDate: yesterday
        }

        const GaLast180Days = {
            startDate: last180days,
            endDate: yesterday
        }

        const GaLast90Days = {
            startDate: last90days,
            endDate: yesterday
        }

        const GaLastMonthDate = {
            startDate: lastMonth,
            endDate: yesterday
        }

        const GaLastWeekDate = {
            startDate: last7days,
            endDate: yesterday
        }

        this.setState({GaLastMonthDate: GaLastMonthDate, GaLastWeekDate: GaLastWeekDate, GaLastYearDate: GaLastYearDate, GaLast180Days: GaLast180Days, GaLast90Days: GaLast90Days});

        if(this.props.Ga.GaUsers === '-'){
            this.props.GetGaUsers(GaLastMonthDate);
        }
        if(this.props.Ga.GaNewUsers === '-'){
            this.props.GetGaNewUsers(GaLastWeekDate);
        }
        if(this.props.Ga.GaPageViews === '-'){
            this.props.GetGaPageViews(GaLastMonthDate);
        }
        if(this.props.Ga.GaSessions === '-'){
            this.props.GetGaSessions(GaLastMonthDate);
        }
        if(this.props.Ga.GaUsersMetrics.length === 0){
            this.props.GetGaUsersMetrcis(GaLastMonthDate);
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
    
    
    OnLineChartDateChange = (date) =>{
        const{GaLastWeekDate, GaLastMonthDate, GaLastYearDate, GaLast180Days, GaLast90Days} = this.state;
        if(date === 'last 365 days'){
            this.props.GetGaUsersMetrcis(GaLastYearDate);
        }
        if(date === 'last 180 days'){
            this.props.GetGaUsersMetrcis(GaLast180Days);
        }
        if(date === 'last 90 days'){
            this.props.GetGaUsersMetrcis(GaLast90Days);
        }
        if(date === 'last 28 days'){
            this.props.GetGaUsersMetrcis(GaLastMonthDate);
        }
        if(date === 'last 7 days'){
            this.props.GetGaUsersMetrcis(GaLastWeekDate);
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
                    <div className={classes.ChartBoxs} style={{minWidth: this.state.minWidth}}>
                        <LineChart data={Ga.GaUsersMetrics} OnLineChartDateChange={this.OnLineChartDateChange} />
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



