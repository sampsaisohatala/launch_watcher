import React from 'react';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Loadingscreen from '../components/Loadingscreen';
import Filter from '../components/Filter';

const useStyles = makeStyles({
   table: {
      minWidth: 650,
   },
});

function AllLaunches() {
   const allLaunchUrl = 'https://api.spacexdata.com/v3/launches';
   const allPadsUrl = 'https://api.spacexdata.com/v3/launchpads';
   const [allLaunches, setAllLaunches] = useState(null);
   const [allPads, setAllPads] = useState([]);
   const [filter, setFilter] = useState('all');
   const [filteredLaunches, setFilteredLaunches] = useState([]);
   const style = useStyles();

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

   // return loading screen
   if (filteredLaunches == null) {
      return <Loadingscreen />;
   }

   // return allLaunches page
   else {
      return (
         <div className="App">
            <h1>{`${filter} launches`}</h1>
            <Filter setFilter={setFilter} />
            <TableContainer component={Paper}>
               <Table className={style.table} aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell>Mission name</TableCell>
                        <TableCell align="left">Launch date</TableCell>
                        <TableCell align="left">Rocket</TableCell>
                        <TableCell align="left">Launch site</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {filteredLaunches.map((launch) => (
                        <TableRow key={launch.flight_number}>
                           <TableCell component="th" scope="row">
                              {launch.mission_name}
                           </TableCell>
                           <TableCell align="left">{launch.launch_date_utc.slice(0, -1).split('T')[0]}</TableCell>
                           <TableCell align="left">
                              {launch.rocket.second_stage.block ? `${launch.rocket.rocket_name} Block ${launch.rocket.second_stage.block}` : `${launch.rocket.rocket_name}`}
                           </TableCell>
                           <TableCell align="left">{allPads.map((pad) => (pad.site_id === launch.launch_site.site_id ? pad.location.name : ''))}</TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </div>
      );
   }
}
//allPads.filter((pad) => pad.site_id === launch.launch_site.site_id)
export default AllLaunches;
