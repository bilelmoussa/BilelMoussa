import { combineReducers } from 'redux';
import messageReducer from './messageReducer'

export default combineReducers({
    Msg_res: messageReducer
});