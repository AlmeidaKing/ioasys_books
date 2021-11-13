import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// screens:
import { Login } from 'screens';

const App = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from='/' to='/login' />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
