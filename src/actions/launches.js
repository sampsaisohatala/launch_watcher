/// LAUNCHES ACTIONS

// URL docs -> https://ll.thespacedevs.com/2.0.0/swagger
// https://thespacedevs.com/llapi
const upcomingLaunches = 'https://ll.thespacedevs.com/2.0.0/launch/upcoming/';

// SET_NEXT_LAUNCH
export const setNextLaunch = (launch) => ({
   type: 'SET_NEXT_LAUNCH',
   launch,
});
// export const asyncSetNextLaunch = () => {
//    console.log('asyncSetNextLaunch');
//    return (dispatch) => {
//       return fetch(launchesUrl)
//          .then((res) => res.json())
//          .then((result) => {
//             console.log(result);
//             dispatch(setNextLaunch(result.result[0]));
//          });
//    };
// };

// SET_UPCOMING_LAUNCHES
export const setUpcomingLaunches = (launches) => ({
   type: 'SET_UPCOMING_LAUNCHES',
   launches,
});
export const asyncSetUpcomingLaunches = () => {
   console.log('asyncSetUpcomingLaunches');
   return (dispatch) => {
      return fetch(upcomingLaunches)
         .then((res) => {
            if (res.status === 200) return res.json();
            else throw new Error(`Response status code: ${res.status}`);
         })
         .then((result) => {
            console.log(result.results);
            dispatch(setUpcomingLaunches(result.results));
         })
         .catch((err) => console.log(err));
   };
};
