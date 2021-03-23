import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

import DelayLink from './DelayLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navigation(props) {
   const [showMenu, setShowMenu] = useState(false);

   const maskTransitions = useTransition(showMenu, null, {
      from: { position: 'absolute', opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
   });

   const menuTransitions = useTransition(showMenu, null, {
      from: { opacity: 0, transform: 'translateX(-100%)' },
      enter: { opacity: 1, transform: 'translateX(0%)' },
      leave: { opacity: 0, transform: 'translateX(-100%)' },
   });

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
            <Link className="navigation__nav-link" to="/">
               Home
            </Link>
            <Link className="navigation__nav-link" to="/happenings">
               Happenings
            </Link>
            <button className="navigation__hamburger" onClick={() => setShowMenu(!showMenu)}>
               <FontAwesomeIcon className="navigation__icon" icon={faBars} />
            </button>

            {maskTransitions.map(({ item, key, props }) => item && <animated.div key={key} style={props} className="navigation__menu_mask" onClick={() => setShowMenu(!showMenu)} />)}
            {menuTransitions.map(
               ({ item, key, props }) =>
                  item && (
                     <animated.div key={key} style={props} className="navigation__menu">
                        <Link className="navigation__nav-link--menu" to="/" onClick={() => setShowMenu(!showMenu)}>
                           Home
                        </Link>
                        <Link className="navigation__nav-link--menu" to="/happenings" onClick={() => setShowMenu(!showMenu)}>
                           Happenings
                        </Link>
                     </animated.div>
                  )
            )}
            {/* TODO: Add delay for the fade in/out animations */}

            {/* <DelayLink className="navigation__nav-link" to="/" delay={510} onDelayStart={handleDelayStart} onDelayEnd={handleDelayEnd}>
               Home
            </DelayLink>

            <DelayLink className="navigation__nav-link" to="/launches" delay={510} onDelayStart={handleDelayStart} onDelayEnd={handleDelayEnd}>
               Launches
            </DelayLink> */}
         </div>
      </div>
   );
}

export default Navigation;
