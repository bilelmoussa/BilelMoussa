import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import ipinfoReducer from './ipinfoReducer'


export default combineReducers({
    Msg_res: messageReducer,
    ipinfo : ipinfoReducer
});