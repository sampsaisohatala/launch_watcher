import React from 'react';
import { useEffect, useState } from 'react';
import NextLaunchTimer from '../components/NextLaunchTimer'

function Home() {

  const nextLaunchUrl = "https://api.spacexdata.com/v3/launches/next";
  const [nextLaunch, setNextLaunch] = useState(null);

  // fetch next available launch
  useEffect(() => {
    fetch(nextLaunchUrl)
      .then(res => res.json())
      .then(json => {
        setNextLaunch(json)
      })
  }, []);

  
    
  // return loading screen
  if(nextLaunch == null){
    return(
      <div className="App">
        <h1> Loading... </h1>
      </div>
    )
  }

  // return main page 
  else{
    return (   
      <div className="App">
        <h1> Space launch watcher </h1>
        <NextLaunchTimer nextLaunch={nextLaunch}/>
      </div>
    );
  } 
}

export default Home;
