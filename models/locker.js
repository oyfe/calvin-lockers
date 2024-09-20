const mongoose = require('mongoose');

// Define Locker Schema
const lockerSchema = new mongoose.Schema({
  location: { type: String, required: true },
  size: { type: String, enum: ['small', 'large'], required: true },
  status: { type: String, enum: ['available', 'rented'], default: 'available' }
});

// Export the Locker model
module.exports = mongoose.model('Locker', lockerSchema);