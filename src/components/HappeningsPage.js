import React, { useState } from 'react';
import { connect } from 'react-redux';
import HappeningCard from './HappeningCard';
import { getVisibleHappenings } from '../selectors/happenings';
import Filter from './Filter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function LaunchesPage(props) {
   const [showScroll, setShowScroll] = useState(false);

   const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 100) {
         setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 100) {
         setShowScroll(false);
      }
   };

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   window.addEventListener('scroll', checkScrollTop);

   console.log('filters baby', props.filters.category);

   return (
      <div className="container--scrollable">
         <div className="happenings-page_header">
            <h1 className="happenings-page_header-title">{props.filters.category === 'all' ? 'happenings' : props.filters.category}</h1>
            <Filter />
         </div>
         {props.happenings && props.happenings.map((happening) => <HappeningCard key={happening.id} happening={happening} />)}
         <button className={showScroll ? 'happenings-page__scroll-button active' : 'happenings-page__scroll-button'} onClick={scrollTop}>
            {' '}
            <FontAwesomeIcon icon={faAngleUp} />
         </button>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      happenings: state.happenings ? getVisibleHappenings(state.happenings, state.filters) : null,
      filters: state.filters,
   };
};

export default connect(mapStateToProps)(LaunchesPage);
