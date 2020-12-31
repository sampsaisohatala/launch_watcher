import React, { useState } from 'react';
import { connect } from 'react-redux';
import HappeningCard from './HappeningCard';
import { getVisibleHappenings } from '../selectors/happenings';
import Filter from './Filter';

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

   return (
      <div className="container--scrollable">
         <h1>Happenings</h1>
         <Filter />
         {props.happenings &&
            props.happenings.map((happening) => {
               return <HappeningCard key={happening.id} happening={happening} />;
            })}
         <button className={showScroll ? 'happenings-page__scroll-button active' : 'happenings-page__scroll-button'} onClick={scrollTop} />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      happenings: state.happenings ? getVisibleHappenings(state.happenings, state.filters) : null,
   };
};

export default connect(mapStateToProps)(LaunchesPage);
