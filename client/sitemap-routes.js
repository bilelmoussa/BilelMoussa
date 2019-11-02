import React from 'react';
import { Switch, Route } from 'react-router';
 
export default (
    <Switch>
        <Route exact path="/"  />
        <Route path="/dashboard"  />
        <Route exact path="/login" />
        <Route exact path="/register"  />
        <Route exact path="/contact"  />
        <Route exact path="/projects"  />
        <Route />
    </Switch>
);