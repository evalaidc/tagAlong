const mongoose = require('mongoose');

// connection to mongodb
mongoose.connect('mongodb://localhost/tag_a_long_db');
const db = mongoose.connection;


// Will log an error if db can't connect to MongoDB
db.on('error', err => {
  console.log(err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', () => {
  console.log("Tag-along db has been connected!");
});

module.exports = mongoose;
