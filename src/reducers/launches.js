// Launches Reducer

const launchesReducerDefaultState = [];

const launchesReducer = (state = launchesReducerDefaultState, action) => {
   switch (action.type) {
      case 'ADD_LAUCNHES':
         return [action.launches];
      default:
         return state;
   }
};

export default launchesReducer;
