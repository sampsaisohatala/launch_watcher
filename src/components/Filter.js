import React from 'react';
import { connect } from 'react-redux';

import { setCategoryAll, setCategoryLaunches, setCategoryEvents } from '../actions/filters';

function Filter(props) {
   const filterHandler = (e) => {
      props.setFilter(e.target.value);
   };

   return (
      <select
         className="filter-select"
         value={props.filters.category}
         onChange={(e) => {
            if (e.target.value === 'all') {
               props.dispatch(setCategoryAll());
            } else if (e.target.value === 'launches') {
               props.dispatch(setCategoryLaunches());
            } else if (e.target.value === 'events') {
               props.dispatch(setCategoryEvents());
            }

            // console.log('category filter: ', e.target.value);
         }}
      >
         <option value="all">All</option>
         <option value="launches">Launches</option>
         <option value="events">Events</option>
      </select>
   );
}

const mapStateToProps = (state) => {
   return {
      filters: state.filters,
   };
};

export default connect(mapStateToProps)(Filter);
