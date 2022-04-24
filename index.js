// Will run our main fetch function within iss.js

const { nextISSTimesForMyLocation } = require("./iss");

// Temporary code:
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
// });

// Temporary code:
// fetchCoordsByIP("24.80.162.169", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned coordinates:", coordinates);
// });


// Temporary code:
// Valid coords: { latitude: "49.2635", longitude: "-122.9331" }
// Invalid coords: { latitude: "-450.2635", longitude: "-122.9331" }
// const exampleCoords = { latitude: "-450.2635", longitude: "-122.9331" };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! ISS fly over times for your coordinates are: ", passTimes);
// });

/* 
 * Input: 
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns: 
 *   undefined
 * Sideffect: 
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  console.log("SUCCESS!");
  printPassTimes(passTimes);
});

// module.exports = { printPassTimes };