import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nextLaunchUrl = "https://api.spacexdata.com/v3/launches";
  const [nextLaunch, setNextLaunch] = useState(null);

  useEffect(() => {
    fetch(nextLaunchUrl)
      .then(res => res.json())
      .then(json => {
        setNextLaunch(json)
        console.log(json)
      })
  }, []);
    
  // return loading screen
  if(nextLaunch == null){
    return(
      <div>
        <h1> Loading... </h1>
      </div>
    )
  }

  // return main page 
  else{
    return (   
      <div>
        <h1> API calls with React Hooks </h1>
      </div>
    );
  } 
}

export default App;
