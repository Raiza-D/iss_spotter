// Requires and will run our main fetch function

const { fetchMyIP, fetchCoordsByIP} = require("./iss");

// Temporary code:
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
// });

fetchCoordsByIP("24.80.162.169", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});
