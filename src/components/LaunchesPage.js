import React from 'react';
import { connect } from 'react-redux';
import LaunchCard from './LaunchCard';

function LaunchesView(props) {
   return <div className="container--scrollable">{props.upcomingLaunches ? props.upcomingLaunches.map((launch) => <LaunchCard key={launch.id} launch={launch} />) : <p>No data</p>}</div>;
}

const mapStateToProps = (state) => {
   return {
      upcomingLaunches: state.launches.upcomingLaunches ? state.launches.upcomingLaunches : null,
   };
};

export default connect(mapStateToProps)(LaunchesView);
