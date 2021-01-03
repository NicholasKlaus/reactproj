import React from 'react';
import {
  TodoPage,
  WeatherPage,
  LandingPage
} from "./pages/index"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App () {
  
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/LandingPage">
              <LandingPage />
            </Route>
            <Route path="/WeatherPage">
              <WeatherPage />
            </Route>
            <Route path="/TodoPage">
              <TodoPage />
            </Route>
            <Redirect from='/' to='/LandingPage'/>
          </Switch>
        </Router>
    </div>
  );

}

export default App;
