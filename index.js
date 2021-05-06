const { nextISSTimesForMyLocation } = require('./iss');





const printPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log('error with next iss times for my location');
    return;
  }
  printPassTimes(passTimes);
});
