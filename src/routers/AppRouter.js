import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Navigation from '../components/Navigation';
import HomePage from '../components/HomePage';
import LaunchesPage from '../components/LaunchesPage';
import EventsPage from '../components/EventsPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => {
   return (
      <BrowserRouter>
         <Navigation />
         <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/launches" component={LaunchesPage} />
            <Route path="/events" component={EventsPage} />
            <Route component={NotFoundPage} />
         </Switch>
      </BrowserRouter>
   );
};

export default AppRouter;
