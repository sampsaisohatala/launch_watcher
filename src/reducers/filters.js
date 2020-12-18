// Filters Reducer

const filtersReducerDefaultState = {
   // page transition delay
   delay: true,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
   switch (action.type) {
      case 'SET_DELAY':
         return {
            ...state,
            delay: action.delay,
         };
      default:
         return state;
   }
};

export default filtersReducer;
