const Driver = require('./models.js').Driver
const Passenger = require('./models.js').Passenger


const DriverSeedData = require('./DriverSeedData.json');
const PassengerSeedData = require('./PassengerSeedData.json');

Driver.remove({}, () =>{
  Driver.create(DriverSeedData, () => {
    process.exit();
  });
});

Passenger.remove({}, () =>{
  Passenger.create(PassengerSeedData, () => {
    process.exit();
  });
});
