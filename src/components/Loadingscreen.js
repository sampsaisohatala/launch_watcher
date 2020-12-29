import React from 'react';
import Loader from 'react-loader-spinner';

const Loadingscreen = () => {
   return (
      <div className="container">
         <h1 className="loadingscreen__heading">LOADING...</h1>
         <Loader type="Oval" color="#a5afd7" height={300} width={300} />
      </div>
   );
};

export default Loadingscreen;
