import React from 'react';
import { connect } from 'react-redux';
import EventCard from './EventCard';

function EventPage(props) {
   return (
      <div className="container--scrollable">
         {/* Loop all events */}
         {props.events ? (
            props.events.map((event) => {
               return <EventCard key={event.id} event={event} />;
            })
         ) : (
            <p>No data</p>
         )}
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      events: state.launches.events ? state.launches.events : null,
   };
};

export default connect(mapStateToProps)(EventPage);
