import moment from 'moment';

/// LAUNCHES ACTIONS

// URL docs -> https://ll.thespacedevs.com/2.0.0/swagger
// https://thespacedevs.com/llapi
const upcomingLaunches = 'https://ll.thespacedevs.com/2.0.0/launch/upcoming/';

// SET_UPCOMING_LAUNCHES
export const setUpcomingLaunches = (launches) => ({
   type: 'SET_UPCOMING_LAUNCHES',
   launches,
});
export const asyncSetUpcomingLaunches = () => {
   return (dispatch) => {
      const apiCallTimeLimit = 10;
      // Get data from localStorage if last api call has made in a apiCallTimeLimit
      if (moment.duration(moment().valueOf() - localStorage.getItem('timestamp')).asMinutes() < apiCallTimeLimit) {
         // Not necessarily need to be promise, but it enables to use then in index.js
         return Promise.resolve().then(() => {
            console.log('From localStorage. Last API call', Math.floor(moment.duration(moment().valueOf() - localStorage.getItem('timestamp')).asMinutes()), 'minutes ago.');
            const launches = JSON.parse(localStorage.getItem('upcomingLaunches'));
            dispatch(setUpcomingLaunches(launches));
         });
      }
      // Fetch data from API and save it to localStorage
      else {
         console.log('Fetching data from API');
         return fetch(upcomingLaunches)
            .then((res) => {
               if (res.status === 200) return res.json();
               else throw new Error(`Response status code: ${res.status}`);
            })
            .then((result) => {
               localStorage.setItem('timestamp', moment().valueOf());
               localStorage.setItem('upcomingLaunches', JSON.stringify(result.results));
               dispatch(setUpcomingLaunches(result.results));
            })
            .catch((err) => console.log(err));
      }
   };
};
