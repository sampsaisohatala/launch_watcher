import React from 'react';

import { connect } from 'react-redux';
import { useEffect, useState, useMemo } from 'react';
import LaunchTimer from './LaunchTimer';
//import { ReactComponent as Logo } from './siluetti.svg';

function HomePage(props) {
   const nextLaunch = useMemo(() => props.launches, [props.launches]);

   return (
      <div className="container">
         <h1>Home</h1>
      </div>
   );
}

const mapStateToProps = (state) => {
   console.log('mapStateToProps', state.launches.result);
   return {
      upcomingLaunch: state.launches.result,
   };
};

export default connect(mapStateToProps)(HomePage);

//{/* Next launch information */}
//{nextLaunch && <h1 className="landing-view__information">{nextLaunch.name}</h1>}

//{/* Next launch heading */}
//<h2 className="landing-view__heading">{nextLaunch ? 'Launch starting in' : 'No data available'}</h2>

//{/* Next launch timer */}
//{nextLaunch && <LaunchTimer nextLaunch={nextLaunch} />}
