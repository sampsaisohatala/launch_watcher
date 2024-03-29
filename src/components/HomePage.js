import React from 'react';
import { connect } from 'react-redux';
import { useMemo } from 'react';
import LaunchTimer from './LaunchTimer';
import { getNextHappening } from '../selectors/happenings';
import CurvedBackground from './CurvedBackground';

function HomePage(props) {
   const nextHappening = useMemo(() => props.nextHappening, [props.nextHappening]);

   return (
      <div className="container--absolute">
         <div className="home_page__container">
            {/* Next launch information */}
            {nextHappening && <h1 className="home-page__information">{`${nextHappening.name}`}</h1>}

            {/* Next launch heading */}
            <h2 className="home-page__heading">{nextHappening ? 'Launch starting in' : 'No data available'}</h2>

            {/* Next launch timer */}
            {nextHappening && <LaunchTimer launchTime={nextHappening.net} />}
         </div>
         <CurvedBackground/>
         <div className="bottom-fill"/>
      </div>
   );
}

const mapStateToProps = (state) => {
   console.log('State:', state);
   return {
      nextHappening: getNextHappening(state.happenings),
   };
};

export default connect(mapStateToProps)(HomePage);
