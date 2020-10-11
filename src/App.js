import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

import Tasks from './pages/taskList/taskList';
import Weather from './pages/weather/weather';

function App() {
  
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/Tasks">
            <Tasks />
          </Route>
          <Route path="/Weather">
            <Weather />
          </Route>
          <Redirect from='/' to='/Tasks'/>
        </Switch>
      </Router>
    </div>
  );

}

export default App;
