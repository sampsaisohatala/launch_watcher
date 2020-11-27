import React from 'react';
import DelayLink from './DelayLink';

function Navigation(props) {
   const handleDelayStart = () => {
      props.setDelay(true);
   };

   const handleDelayEnd = () => {
      props.setDelay(false);
   };

   return (
      <div className="navigation">
         <h2 className="navigation__title">Space Launch Watcher</h2>
         <div className="navigation__nav-container">
            <DelayLink className="navigation__nav-link" to="/" delay={510} onDelayStart={handleDelayStart} onDelayEnd={handleDelayEnd}>
               Home
            </DelayLink>

            <DelayLink className="navigation__nav-link" to="/launches" delay={510} onDelayStart={handleDelayStart} onDelayEnd={handleDelayEnd}>
               Launches
            </DelayLink>
         </div>
      </div>
   );
}

export default Navigation;
