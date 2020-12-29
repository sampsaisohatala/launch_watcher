// Filters Reducer

const filtersReducerDefaultState = {
   category: 'all',
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
   switch (action.type) {
      case 'SET_CATEGORY_ALL':
         return {
            ...state,
            category: 'all',
         };
      case 'SET_CATEGORY_LAUNCHES':
         return {
            ...state,
            category: 'launches',
         };
      case 'SET_CATEGORY_EVENTS':
         return {
            ...state,
            category: 'events',
         };
      default:
         return state;
   }
};

export default filtersReducer;
