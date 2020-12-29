import moment from 'moment';

// Launches Reducer

const happeningsReducerDefaultState = [];

const happeningsReducer = (state = happeningsReducerDefaultState, action) => {
   switch (action.type) {
      case 'SET_HAPPENINGS':
         if (state.length === 0) {
            return action.happenings;
         } else {
            // sort array here once, so we dont have to sort it everytime
            const happenings = [...state, ...action.happenings].sort((a, b) => {
               return moment(a.net).valueOf() < moment(b.net).valueOf() ? -1 : 1;
            });
            return happenings;
         }
      default:
         return state;
   }
};

export default happeningsReducer;
