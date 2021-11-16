import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// store:
import store from './store';

// screens:
import { Login, Dashboard } from 'screens';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Redirect exact from='/' to='/login' />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
