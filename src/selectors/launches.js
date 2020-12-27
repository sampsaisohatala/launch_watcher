// get next launch from upcoming launches
export const getNextLaunch = (upcomingLaunches) => {
   if (!upcomingLaunches) return;
   // get the first upcoming launch that hasnt happend yet
   for (let index = 0; index < upcomingLaunches.length; index++) {
      const difference = new Date(upcomingLaunches[index].net).getTime() - Date.now();
      if (difference > 0) return upcomingLaunches[index];
   }
};
// // status:
// id: 3
// name: "Success"

export const getNextHappening = (launches, events) => {
   const getUpcoming = (array) => {
      for (let index = 0; index < array.length; index++) {
         const difference = new Date(array[index].net).getTime() - Date.now();
         if (difference > 0) return array[index];
      }
   };

   const launchIsNext = new Date(getUpcoming(launches).net).getTime() < new Date(getUpcoming(events).net).getTime();
   console.log('Next launch:', getUpcoming(launches).name, ' / Next event:', getUpcoming(events).name, launchIsNext);
   return launchIsNext ? getUpcoming(launches) : getUpcoming(events);
};
