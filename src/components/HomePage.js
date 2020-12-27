import React from 'react';
import { connect } from 'react-redux';
import { useMemo } from 'react';
import LaunchTimer from './LaunchTimer';
import { getNextLaunch, getNextHappening } from '../selectors/launches';

function HomePage(props) {
   const nextHappening = useMemo(() => props.nextHappening, [props.nextHappening]);

   return (
      <div className="container">
         {/* Next launch information */}
         {nextHappening && <h1 className="home-page__information">{`${nextHappening.name}`}</h1>}

         {/* Next launch heading */}
         <h2 className="home-page__heading">{nextHappening ? 'Launch starting in' : 'No data available'}</h2>

         {/* Next launch timer */}
         {nextHappening && <LaunchTimer launchTime={nextHappening.net} />}
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      nextHappening: getNextHappening(state.launches.upcomingLaunches, state.launches.events),
   };
};

export default connect(mapStateToProps)(HomePage);
