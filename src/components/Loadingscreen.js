import React from 'react';
//import { useEffect, useState } from 'react';
//import {animated, useTransition} from 'react-spring'
import { Spinner } from 'react-bootstrap';

function Loadingscreen() {
   const mystyle = {
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100vh',
      width: '100vw',
      color: 'black',
      backgroundColor: 'white',
      textAlign: 'center',
      zIndex: '0',
   };

   return (
      <div style={mystyle}>
         <h1>Loading..</h1>
         <Spinner animation="border" />
      </div>
   );
}

export default Loadingscreen;
