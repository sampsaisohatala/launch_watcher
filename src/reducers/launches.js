// Launches Reducer

const launchesReducerDefaultState = [];

const launchesReducer = (state = launchesReducerDefaultState, action) => {
   switch (action.type) {
      case 'SET_LAUNCHES':
         return action.launches;
      default:
         return state;
   }
};

export default launchesReducer;
