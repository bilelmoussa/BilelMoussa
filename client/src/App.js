import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';
import Register from './components/register/register';
import PageNotFound from './components/404/page_not_found';
import contact from './components/contact/contact';
import projects from './components/projects/projects';
import { Provider } from 'react-redux';
import configureStore from './store';
import Footer from './components/footer/footer';
import {Helmet} from "react-helmet";
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/apiCalls';
import jwt_decode from 'jwt-decode';
import {createBrowserHistory} from 'history';
import ReactGA from 'react-ga';

const history = createBrowserHistory();

ReactGA.initialize('UA-153042401-1')

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
    const callback = list => {
      list.getEntries().forEach(entry => {
        const Latency = entry.responseStart - entry.requestStart;
        const DownloadTime = entry.responseEnd - entry.responseStart;
        const webLoadTime = entry.responseEnd - entry.requestStart;
        console.log('Total app load time:', entry);
      })
    }
  
    var observer = new PerformanceObserver(callback);
    observer.observe({entryTypes: ['navigation'] });

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
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/contact" component={contact} />
                <Route exact path="/projects" component={projects} />
                <Route component={PageNotFound} />
              </Switch>
              <Footer />
            </Router>
          </div>
      </Provider>
    );
  }

}

export default App;
