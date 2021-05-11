import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
const PageLanding = import('../pages/landing');

function Container() {

  const LazyLoadedLanding = React.lazy(() => PageLanding);

  return(
    <Router>
      <Switch>
        <Route exact path="/" component={LazyLoadedLanding} />
      </Switch>
    </Router>
  );
};

export default Container;
