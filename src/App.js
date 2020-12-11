import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {
  WeatherPage,
  TodoPage
} from "./pages/index"

function App () {
  
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/tasks">
            <TodoPage />
          </Route>
          <Route path="/weather">
            <WeatherPage />
          </Route>
          <Redirect from='/' to='/tasks'/>
        </Switch>
      </Router>
    </div>
  );

}

export default App;
