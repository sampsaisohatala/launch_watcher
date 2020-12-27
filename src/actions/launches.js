import moment from 'moment';

/// LAUNCHES ACTIONS

// URL docs -> https://ll.thespacedevs.com/2.0.0/swagger    /   https://thespacedevs.com/llapi

const upcomingLaunchesURL = 'https://ll.thespacedevs.com/2.0.0/launch/upcoming/';
const upcomingEventsURL = 'https://ll.thespacedevs.com/2.0.0/event/upcoming/';

const apiCallTimeLimit = 10;
let readLocalStorage;

const formatLaunchData = (launches) => {
   return launches.map((launch) => ({
      id: launch.id,
      image: launch.image,
      name: launch.name,
      status: launch.status.name,
      provider: launch.launch_service_provider.name,
      net: launch.net,
      description: launch.mission && launch.mission.description,
      location: launch.pad.location.name,
   }));
};

const formatEventData = (events) => {
   return events.map((event) => ({
      id: event.id,
      image: event.feature_image,
      name: event.name,
      net: event.date,
      location: event.location,
      video_url: event.video_url,
      description: event.description,
   }));
};

export const asyncSetLaunchesAndEvents = () => {
   // Get data from localStorage if last api call has made in a apiCallTimeLimit
   readLocalStorage = moment.duration(moment().valueOf() - localStorage.getItem('timestamp')).asMinutes() < apiCallTimeLimit;

   if (readLocalStorage) console.log('Reading data from localStorage. Last API call', Math.floor(moment.duration(moment().valueOf() - localStorage.getItem('timestamp')).asMinutes()), 'minutes ago.');
   else console.log('Fetching data from API.');

   return (dispatch) => {
      return dispatch(asyncSetUpcomingLaunches()).then(() => dispatch(asyncSetEvents()));
   };
};

// SET_UPCOMING_LAUNCHES
export const setUpcomingLaunches = (launches) => ({
   type: 'SET_UPCOMING_LAUNCHES',
   launches,
});
export const asyncSetUpcomingLaunches = () => {
   return (dispatch) => {
      // Read from localStorage
      if (readLocalStorage) {
         return Promise.resolve().then(() => {
            const launches = JSON.parse(localStorage.getItem('upcomingLaunches'));
            dispatch(setUpcomingLaunches(launches));
         });
      }
      // Fetch data from API and save it to localStorage
      else {
         return fetch(upcomingLaunchesURL)
            .then((res) => {
               if (res.status === 200) return res.json();
               else throw new Error(`Launches response status code: ${res.status}`);
            })
            .then((result) => {
               // formt data
               const formattedData = formatLaunchData(result.results);

               console.log('launches', result);

               localStorage.setItem('timestamp', moment().valueOf());
               localStorage.setItem('upcomingLaunches', JSON.stringify(formattedData));
               dispatch(setUpcomingLaunches(formattedData));
            })
            .catch((err) => console.log(err));
      }
   };
};

// SET_EVENTS
export const setEvents = (events) => ({
   type: 'SET_EVENTS',
   events,
});

export const asyncSetEvents = () => {
   return (dispatch) => {
      // Read from localStorage
      if (readLocalStorage) {
         return Promise.resolve().then(() => {
            const events = JSON.parse(localStorage.getItem('events'));
            dispatch(setEvents(events));
         });
      }
      // Fetch data from API and save it to localStorage
      else {
         return fetch(upcomingEventsURL)
            .then((res) => {
               if (res.status === 200) return res.json();
               else throw new Error(`Events response status code: ${res.status}`);
            })
            .then((result) => {
               // formt data
               const formattedData = formatEventData(result.results);

               console.log('events', result.results);

               localStorage.setItem('events', JSON.stringify(formattedData));
               dispatch(setEvents(formattedData));
            })
            .catch((err) => console.log(err));
      }
   };
};
