import axios from 'axios';
import { MSG_RES, IPINFO, SET_CURRENT_USER, LOG_ERRORS} from './types';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../setAuthToken';


export const PostMessage = (message) => dispatch =>{
    axios.post('/api/message/post_message', message)
        .then(res=>{
            console.log(res);
            dispatch({
                type: MSG_RES,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            console.log(err.response);
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