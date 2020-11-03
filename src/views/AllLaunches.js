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

const useStyles = makeStyles({
   table: {
      minWidth: 650,
   },
});

function AllLaunches() {
   const allLaunchUrl = 'https://api.spacexdata.com/v3/launches';
   const [allLaunches, setAllLaunches] = useState(null);
   const classes = useStyles();

   // fetch next available launch
   useEffect(() => {
      fetch(allLaunchUrl)
         .then((res) => res.json())
         .then((json) => {
            setAllLaunches(json);
         });
   }, []);

   // return loading screen
   if (allLaunches == null) {
      return <Loadingscreen />;
   }

   // return allLaunches page
   else {
      return (
         <div className="App">
            <h1> All launches </h1>
            <TableContainer component={Paper}>
               <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                     <TableRow>
                        <TableCell>Mission name</TableCell>
                        <TableCell align="left">Launch date</TableCell>
                        <TableCell align="left">Rocket used</TableCell>
                        <TableCell align="left">Launch site</TableCell>
                        <TableCell align="left">Launch success</TableCell>
                        {/* <TableCell align="left">Landing success</TableCell> */}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {allLaunches.map((launch) => (
                        <TableRow key={launch.flight_number}>
                           <TableCell component="th" scope="row">
                              {launch.mission_name}
                           </TableCell>
                           <TableCell align="left">{launch.launch_date_utc.slice(0, -1).split('T')[0]}</TableCell>
                           <TableCell align="left">{launch.rocket.rocket_name}</TableCell>
                           <TableCell align="left">{launch.launch_site.site_name}</TableCell>

                           {/* <TableCell align="left">{launch.launch_success}</TableCell> */}

                           {/* <TableCell align="left">{launch.rocket.second_stage.block}</TableCell> */}
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
            {/* <ul>
          {allLaunches.map(launch => (
            <li key={launch.flight_number}>{launch.launch_year}</li>
          ))};
        </ul> */}
         </div>
      );
   }
}

export default AllLaunches;
