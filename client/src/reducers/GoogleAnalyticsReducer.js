import { GA_USERS, GA_NEW_USERS, GA_PAGE_VIEWS, GA_SESSIONS, GA_USERS_METRICS } from '../actions/types';

const initialState = {
    GaUsers: '-',
    GaNewUsers: '-',
    GaPageViews: '-',
    GaSessions: '-',
    GaUsersMetrics: [],
}

export default function(state = initialState, action){
    switch(action.type){
        case GA_USERS:
            return { ...state, GaUsers: action.payload };
        case GA_NEW_USERS:
            return { ...state, GaNewUsers: action.payload };  
        case GA_PAGE_VIEWS:
            return { ...state, GaPageViews: action.payload };
        case GA_SESSIONS:
            return { ...state, GaSessions: action.payload };
        case GA_USERS_METRICS:
            return { ...state, GaUsersMetrics: action.payload };       
        default:
            return state;    
    }
}