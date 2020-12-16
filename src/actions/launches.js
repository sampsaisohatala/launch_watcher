/// LAUNCHES ACTIONS

// URL docs -> https://www.rocketlaunch.live/api
const launchesUrl = 'https://fdo.rocketlaunch.live/json/launches/next/5';

// SET_LAUCNHES
export const setLaunches = (launches = [{}]) => ({
   type: 'SET_LAUNCHES',
   launches,
});
export const asyncSetLaunches = () => {
   return (dispatch) => {
      return fetch(launchesUrl)
         .then((res) => res.json())
         .then((result) => {
            dispatch(setLaunches(result));
         });
   };
};
