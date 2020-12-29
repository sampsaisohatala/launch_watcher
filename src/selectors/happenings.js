export const getNextHappening = (happenings) => {
   for (let index = 0; index < happenings.length; index++) {
      const difference = new Date(happenings[index].net).getTime() - Date.now();
      if (difference > 0) return happenings[index];
   }
};

export const getVisibleHappenings = (happenings, filters) => {
   return happenings;
};
