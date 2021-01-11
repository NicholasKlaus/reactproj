import React from 'react';
import {
  TodoPage,
  WeatherPage,
  LandingPage
} from "./pages/index"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {ROUTES} from "./constants/routes";

function App () {
  
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.WEATHER} component={WeatherPage} />
            <Route path={ROUTES.TODOPAGE} component={TodoPage} />
            <Redirect from="/" to={ROUTES.LANDING} />
          </Switch>
        </Router>
    </div>
  );

}

export default App;
