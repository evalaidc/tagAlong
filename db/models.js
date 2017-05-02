const mongoose = require('./connection.js');

const DriverSchema = new mongoose.Schema ({
  name: String,
  age: { type: Number, min: 16 },
  photo_url: { type: String, required: true},
  bio: String,
  company: String
  started: { type: Date, default: Date.now }
}, {
  timestamps: true
});

const PassengerSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  photo_url: String,
  group: String
})

const Driver = mongoose.model('Driver', DriverSchema);
const Passenger = mongoose.model('Passenger', PassengerSchema);


modules.exports = {
  Driver,
  Passenger
}
