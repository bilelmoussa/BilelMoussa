import React from 'react';
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
import store from './store';

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
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
        </Router>
      </div>
    </Provider>
  );
}

export default App;
