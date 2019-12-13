import { DRAWER_CLOSED } from '../actions/types';


const initialState = {
    isDrawerClosed: false
}

export default function(state = initialState, action){
    switch(action.type){
        case DRAWER_CLOSED:
            return {
                isDrawerClosed: action.payload
            } 
        default:
            return state;   
    }
}