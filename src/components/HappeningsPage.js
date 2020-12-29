import React from 'react';
import { connect } from 'react-redux';
import HappeningCard from './HappeningCard';
import { getVisibleHappenings } from '../selectors/happenings';
import Filter from './Filter';

function LaunchesPage(props) {
   return (
      <div className="container--scrollable">
         <h1>Happenings</h1>
         <Filter />
         {props.happenings &&
            props.happenings.map((happening) => {
               return <HappeningCard key={happening.id} happening={happening} />;
            })}
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      happenings: state.happenings ? getVisibleHappenings(state.happenings, state.filters) : null,
   };
};

export default connect(mapStateToProps)(LaunchesPage);
