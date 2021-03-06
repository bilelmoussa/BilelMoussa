import {LOG_ERRORS} from '../actions/types';

const initialState = {
    LogErrors: {},
}

export default function(state = initialState, action) {
    switch(action.type){
        case LOG_ERRORS:
            return { ...state, LogErrors: action.payload }
        default:
            return state;    
    }
}