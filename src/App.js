import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Tasks from './pages/task-list';
import Weather from './pages/weather';

function App() {
  
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
          <Redirect from='/' to='/tasks'/>
        </Switch>
      </Router>
    </div>
  );

}

export default App;
