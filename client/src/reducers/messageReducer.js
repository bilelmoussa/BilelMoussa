import { MSG_RES } from '../actions/types';

const initialState = {
    response: {},
}

export default function(state = initialState, action){
    switch(action.type){
        case MSG_RES:
            return { ...state, response: action.payload };
        default:
            return state;    
    }
}