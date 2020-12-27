// Launches Reducer

const launchesReducerDefaultState = {};

const launchesReducer = (state = launchesReducerDefaultState, action) => {
   switch (action.type) {
      case 'SET_UPCOMING_LAUNCHES':
         //console.log('SET_UPCOMING_LAUNCHES', action.launches);
         return {
            ...state,
            upcomingLaunches: action.launches,
         };
      case 'SET_EVENTS':
         //console.log('SET_EVENTS', action.events);
         return {
            ...state,
            events: action.events,
         };

      default:
         return state;
   }
};

export default launchesReducer;
