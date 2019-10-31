import axios from 'axios';
import { MSG_RES, IPINFO} from './types';

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
    })
    .catch(err=>{
        console.log(err);
    })
}