const { nextISSTimesForMyLocation } = require("./iss_promised");

nextISSTimesForMyLocation()
  .then(fetchMyIP)
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));

