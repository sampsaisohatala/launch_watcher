import React from 'react';
import { useEffect, useState } from 'react';

function AllLaunches() {

  const allLaunchUrl = "https://api.spacexdata.com/v3/launches/next";
  const [allLaunches, setAllLaunches] = useState(null);

  // fetch next available launch
  useEffect(() => {
    fetch(allLaunchUrl)
      .then(res => res.json())
      .then(json => {
        setAllLaunches(json)
      })
  }, []);

  
    
  // return loading screen
  if(allLaunches == null){
    return(
      <div className="App">
        <h1> Loading... </h1>
      </div>
    )
  }

  // return allLaunches page 
  else{
    return (   
      <div className="App">
        <h1> All launches </h1>
      </div>
    );
  } 
}

export default AllLaunches;