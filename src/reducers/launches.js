// Launches Reducer

const launchesReducerDefaultState = {};

const launchesReducer = (state = launchesReducerDefaultState, action) => {
   switch (action.type) {
      case 'SET_NEXT_LAUNCH':
         return {
            state,
            nextLaunch: action.launch,
         };
      case 'SET_UPCOMING_LAUNCHES':
         return {
            state,
            upcomingLaunches: action.launches,
         };
      default:
         return state;
   }
};

export default launchesReducer;
