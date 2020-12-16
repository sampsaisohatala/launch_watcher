import React from 'react';
import { connect } from 'react-redux';
import { useEffect, useState, useMemo } from 'react';
import LaunchTimer from './LaunchTimer';
import { getNextLaunch } from '../selectors/launches';
//import { ReactComponent as Logo } from './siluetti.svg';

function HomePage(props) {
   const upcomingLaunch = useMemo(() => props.upcomingLaunch, [props.upcomingLaunch]);

   return (
      <div className="container">
         {/* Next launch information */}
         {upcomingLaunch && <h1 className="landing-view__information">{`${upcomingLaunch.vehicle.name} | ${upcomingLaunch.name}`}</h1>}

         {/* Next launch heading */}
         <h2 className="landing-view__heading">{upcomingLaunch ? 'Launch starting in' : 'No data available'}</h2>

         {/* Next launch timer */}
         {upcomingLaunch && <LaunchTimer launchTime={upcomingLaunch.sort_date} />}
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      upcomingLaunch: state.launches.result[0],
   };
};

export default connect(mapStateToProps)(HomePage);
