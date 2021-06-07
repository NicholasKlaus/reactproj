import React from 'react';
import { WeatherPage, LandingPage } from "./pages/index"
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from "./constants/routes";

function App () {
  
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.WEATHER} component={WeatherPage} />
            <Redirect from="/" to={ROUTES.LANDING} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;