import axios from 'axios';
import {MSG_RES} from './types';

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