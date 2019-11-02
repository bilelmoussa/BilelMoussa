import React from 'react';
import { Route } from 'react-router';
 
export default (
    <Route>
        <Route exact path="/"  />
        <Route path="/dashboard"  />
        <Route exact path="/login" />
        <Route exact path="/register"  />
        <Route exact path="/contact"  />
        <Route exact path="/projects"  />
    </Route>
);