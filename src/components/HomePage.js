import React from 'react';
import { connect } from 'react-redux';
import { useMemo } from 'react';
import LaunchTimer from './LaunchTimer';
import { getNextLaunch } from '../selectors/launches';

function HomePage(props) {
   const upcomingLaunch = useMemo(() => props.upcomingLaunch, [props.upcomingLaunch]);

   return (
      <div className="container">
         {/* Next launch information */}
         {upcomingLaunch && <h1 className="home-page__information">{`${upcomingLaunch.name}`}</h1>}

         {/* Next launch heading */}
         <h2 className="home-page__heading">{upcomingLaunch ? 'Launch starting in' : 'No data available'}</h2>

         {/* Next launch timer */}
         {upcomingLaunch && <LaunchTimer launchTime={upcomingLaunch.net} />}
      </div>
   );
}

const mapStateToProps = (state) => {
   console.log(state.launches.upcomingLaunches);
   return {
      upcomingLaunch: state.launches.upcomingLaunches ? state.launches.upcomingLaunches[0] : null, //getNextLaunch(state.launches.upcomingLaunches),
   };
};

export default connect(mapStateToProps)(HomePage);
