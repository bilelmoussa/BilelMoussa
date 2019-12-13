import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import ipinfoReducer from './ipinfoReducer'
import userReducer  from './userReducer';
import ErrorsReducer from './ErrorsReducer';
import GoogleAnalyticsReducer from './GoogleAnalyticsReducer';
import StyleReducer from './StyleReducer';

export default combineReducers({
    Msg_res: messageReducer,
    ipinfo : ipinfoReducer,
    user: userReducer,
    Errors: ErrorsReducer,
    Ga: GoogleAnalyticsReducer,
    SharedStyle: StyleReducer
});