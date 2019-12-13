import axios from 'axios';
import { MSG_RES, IPINFO, SET_CURRENT_USER, LOG_ERRORS, GA_USERS, GA_NEW_USERS, GA_PAGE_VIEWS, GA_SESSIONS, GA_USERS_METRICS, DRAWER_CLOSED} from './types';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../setAuthToken';


export const PostMessage = (message) => dispatch =>{
    axios.post('/api/message/post_message', message)
        .then(res=>{
            dispatch({
                type: MSG_RES,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: MSG_RES,
                payload: err.response.data
            })
        })
}

export const GetIpInfo = () => dispatch =>{
    axios.get('https://ipapi.co/json/')
    .then(res=>{
        dispatch({
            type: IPINFO,
            payload: res.data
        })
        const IpStringify = JSON.stringify(res.data);
        localStorage.setItem('IpApi', IpStringify);
    })
    .catch(err=>{
        console.log(err);
    })
}

export const GetLocalIpInfo = (IpInfo) => dispatch =>{
    dispatch({
        type: IPINFO,
        payload: IpInfo
    })
}

export const ResetLogErr = () => (dispatch) =>{
    dispatch({
        type: LOG_ERRORS,
        payload: {},
    })
}

export const LoginUser = (user, history) => dispatch => {
    axios.post('/api/user/login', user)
    .then(res=>{
        const  { token } = res.data;
        localStorage.setItem('jwtToken', token);
		setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
        history.push('/dashboard');
    })
    .catch(err=>{
       console.log(err);
       dispatch({
            type: LOG_ERRORS,
            payload: err.response.data.msg
        });
    })
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
	if(history){
		history.push('/login')
	}
}

export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

export const GetGaUsers = date => dispatch =>{
    axios.get(`/api/ga/users?startDate=${date.startDate}&endDate=${date.endDate}`)
    .then(res =>{
        dispatch({
            type: GA_USERS,
            payload: res.data.data
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

export const GetGaNewUsers = date => dispatch =>{
    axios.get(`/api/ga/newusers?startDate=${date.startDate}&endDate=${date.endDate}`)
    .then(res =>{
        dispatch({
            type: GA_NEW_USERS,
            payload: res.data.data
        })
    })
    .catch(err=>{
        console.log(err);
    })
}

export const GetGaPageViews= date => dispatch =>{
    axios.get(`/api/ga/pageviews?startDate=${date.startDate}&endDate=${date.endDate}`)
    .then(res =>{
        dispatch({
            type: GA_PAGE_VIEWS,
            payload: res.data.data
        })
        
    })
    .catch(err=>{
        console.log(err);
    })
}

export const GetGaSessions= date => dispatch =>{
    axios.get(`/api/ga/sessions?startDate=${date.startDate}&endDate=${date.endDate}`)
    .then(res =>{
        dispatch({
            type: GA_SESSIONS,
            payload: res.data.data
        })
    })
    .catch(err=>{
        console.log(err);
    })
}

export const GetGaUsersMetrcis= date => dispatch =>{
    axios.get(`/api/ga/usersmetrics?startDate=${date.startDate}&endDate=${date.endDate}`)
    .then(res =>{
        dispatch({
            type: GA_USERS_METRICS,
            payload: res.data.data
        })
    })
    .catch(err=>{
        console.log(err);
    })
}

export const handleDrawertoggle = action => dispatch =>{
    dispatch({
        type: DRAWER_CLOSED,
        payload: action
    })
}