// Will run our main fetch function within iss.js

const { fetchISSFlyOverTimes } = require("./iss");

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
//   } else {
//     console.log("It worked! ISS fly over times for your coordinates are: ", passTimes);
//   }
// });
