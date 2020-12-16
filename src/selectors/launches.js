// get next launch from upcoming launches
export const getNextLaunch = (upcomingLaunches) => {
   if (!upcomingLaunches) return;
   // get the first upcoming launch that hasnt happend yet
   for (let index = 0; index < upcomingLaunches.length; index++) {
      const difference = new Date(upcomingLaunches[index].net).getTime() - Date.now();
      if (difference > 0) return upcomingLaunches[index];
      console.log(upcomingLaunches[index]);
   }
};
