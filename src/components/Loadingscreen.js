import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loadingscreen = () => {
   return (
      <div className="container">
         <h1 className="loadingscreen__heading">LOADING...</h1>
         <Spinner animation="border" className="loadingscreen__spinner" />
      </div>
   );
};

export default Loadingscreen;
