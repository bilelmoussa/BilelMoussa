import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware  } from 'connected-react-router'
import rootReducer from './reducers';
import ReduxPromise from "redux-promise";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { googleAnalytics } from './reactGAMiddlewares'



export default function (initialState, browserHistory){

    const routermw = routerMiddleware(browserHistory)

    const store = createStore(
            rootReducer, 
            initialState, 
            compose(
                applyMiddleware(routermw),
                applyMiddleware(thunkMiddleware),
                applyMiddleware(googleAnalytics),
                composeWithDevTools(
                applyMiddleware(ReduxPromise))
            )
    )


    return store;	
}


