import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Navigation from '../components/Navigation';
import HomePage from '../components/HomePage';
import HappeningsPage from '../components/HappeningsPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Navigation />
         <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/happenings" component={HappeningsPage} />
            <Route component={NotFoundPage} />
         </Switch>
      </BrowserRouter>
   );
};

export default AppRouter;
