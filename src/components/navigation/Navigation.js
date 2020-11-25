import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
//import DelayLink from 'react-delay-link';
import DelayLink from './DelayLink';

function Navigation(props) {
   const handleDelayStart = () => {
      props.setDelay(true);
   };

   const handleDelayEnd = () => {
      props.setDelay(false);
   };

   return (
      <header className="nav">
         {/*<span className="">Space Launch Watcher</span>*/}
         <div>
            <DelayLink className="nav-link" to="/" delay={510} onDelayStart={handleDelayStart} onDelayEnd={handleDelayEnd}>
               Home
            </DelayLink>

            <DelayLink className="nav-link" to="/launches" delay={510} onDelayStart={handleDelayStart} onDelayEnd={handleDelayEnd}>
               Launches
            </DelayLink>
         </div>
      </header>
   );
}

export default Navigation;
