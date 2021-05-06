const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org/?format=json');
};
const fetchCoordsByIP = (body) => {
  let ip = JSON.parse(body)
  return request(`https://freegeoip.app/json/${ip.ip}`);
}
const fetchISSFlyOverTimes = (body) => {
  const data = JSON.parse(body);
  const coords = {
    latitude: data.latitude,
    longitude: data.longitude
  };
  return request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`);
}

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
    const {response} = JSON.parse(body);
    return response;
    })
};
module.exports = {
  nextISSTimesForMyLocation
};