// Will contain most of code logic for fetching data from each API endpoint

const request = require("request");

/*
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const fetchMyIP = function(callback) {
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    
    if (response.statusCode !== 200) {
      callback(Error(`Status code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

// https://freegeoip.app/json/

const fetchCoordsByIP = function(ip, callback) {
  const URL = "https://freegeoip.app/json/invalidIPHere" + ip;
  request(URL, (error, response, body) => {
    if (error) {
      callback(`Attention:${error}`, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status code ${response.statusCode} when fetching geo-coordinates: ${body}`), null);
    }

    const { latitude, longitude } = JSON.parse(body);
    callback(null, { latitude, longitude });
   });
};

module.exports = { fetchMyIP, fetchCoordsByIP };