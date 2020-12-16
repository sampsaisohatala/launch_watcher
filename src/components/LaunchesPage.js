import React from 'react';
import { useEffect, useState } from 'react';
//import Loadingscreen from '../../components/loadingScreen/Loadingscreen';
import Filter from './Filter';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function LaunchesView(props) {
   const allLaunchUrl = 'https://api.spacexdata.com/v3/launches';
   const allPadsUrl = 'https://api.spacexdata.com/v3/launchpads';
   const [allLaunches, setAllLaunches] = useState(null);
   const [allPads, setAllPads] = useState([]);
   const [filter, setFilter] = useState('all');
   const [filteredLaunches, setFilteredLaunches] = useState([]);

   // fetch next available launch
   useEffect(() => {
      fetch(allLaunchUrl)
         .then((res) => res.json())
         .then((json) => {
            setAllLaunches(json);
         });
      fetch(allPadsUrl)
         .then((res) => res.json())
         .then((json) => {
            setAllPads(json);
         });
   }, []);

   useEffect(() => {
      if (allLaunches) filteredLaunchHandler();
   }, [allLaunches, filter]);

   const filteredLaunchHandler = () => {
      let launches;
      let sortedLaunches;
      console.log(new Date(), ' / ', allLaunches[0].launch_date_utc);

      switch (filter) {
         case 'future':
            launches = allLaunches.filter((launch) => new Date() < new Date(launch.launch_date_utc));
            sortedLaunches = launches.sort((a, b) => a.launch_date_unix - b.launch_date_unix);
            setFilteredLaunches(sortedLaunches);
            break;

         case 'past':
            launches = allLaunches.filter((launch) => new Date() > new Date(launch.launch_date_utc));
            sortedLaunches = launches.sort((a, b) => b.launch_date_unix - a.launch_date_unix);
            setFilteredLaunches(sortedLaunches);
            break;

         default:
            sortedLaunches = allLaunches.sort((a, b) => a.launch_date_unix - b.launch_date_unix);
            setFilteredLaunches(sortedLaunches);
            break;
      }
   };

   return (
      <div className="launches">
         <h1 className="text-center">{`${filter} launches`.toUpperCase()}</h1>
         <Filter setFilter={setFilter} />
         <div className="m-5">
            <Table striped bordered hover variant="dark">
               <thead>
                  <tr>
                     <th>Mission Name</th>
                     <th>Launch date</th>
                     <th>Rocket</th>
                     <th>Launch site</th>
                  </tr>
               </thead>
               <tbody>
                  {filteredLaunches.map((launch) => (
                     <tr key={launch.flight_number + launch.mission_name}>
                        <td>{launch.mission_name}</td>
                        <td>{launch.launch_date_utc.slice(0, -1).split('T')[0]}</td>
                        <td>{launch.rocket.second_stage.block ? `${launch.rocket.rocket_name} Block ${launch.rocket.second_stage.block}` : `${launch.rocket.rocket_name}`}</td>
                        <td>{allPads.map((pad) => (pad.site_id === launch.launch_site.site_id ? pad.location.name : ''))}</td>
                     </tr>
                  ))}
               </tbody>
            </Table>
         </div>
      </div>
   );
}

export default LaunchesView;
