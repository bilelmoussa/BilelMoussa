import React, { Component, Suspense, lazy  } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import {Helmet} from "react-helmet";
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/apiCalls';
import jwt_decode from 'jwt-decode';
import { createBrowserHistory } from 'history';
import withTracker from './withTracker';


const Home = lazy(() => import('./components/home/home'));
const Dashboard = lazy(() => import('./components/dashboard/dashboard'));
const Login = lazy(() => import('./components/login/login'));
const PageNotFound = lazy(() => import('./components/404/page_not_found'));
const contact = lazy(() => import('./components/contact/contact'));
const Projects = lazy(() => import('./components/projects/projects'));

const history = createBrowserHistory();

const store = configureStore({}, history)


function decodeToken(token) {
  let decoded = {};
  try {
    decoded = jwt_decode(token);
  } catch (err) {
    console.log(err)
    store.dispatch(logoutUser());
  }
  return decoded;
};

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = decodeToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
  }
}

 class App extends Component{

  componentDidMount(){

  }

  render(){
    return (
      <Provider store = { store }>
          <div className="App">
            <Helmet>
                    <meta charSet="utf-8" />
                    <title>Bilel Moussa</title>
                    <link rel="canonical" href="https://bilel-moussa.herokuapp.com" />
            </Helmet>
            <Router>
              <Suspense fallback={<div></div>}>
                <Switch>
                  <Route exact path="/" component={withTracker(Home)} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route exact path="/login" component={withTracker(Login)} />
                  <Route exact path="/contact" component={withTracker(contact)} />
                  <Route exact path="/projects" component={withTracker(Projects)} />
                  <Route component={PageNotFound} />
                </Switch>
              </Suspense>
            </Router>
          </div>
      </Provider>
    );
  }

}

export default App;
