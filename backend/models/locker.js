import mongoose from 'mongoose';

// Define Locker Schema
const lockerSchema = new mongoose.Schema({
  location: {
    type: Number,  // Changed to 'Number' instead of 'Int32Array'
    enum: [12, 13, 14],  // Enum of valid floor numbers
    required: true
  },
  size: {
    type: String,
    enum: ['small', 'large'],
    required: true
  },
  label: {
    type: String,
  },
  status: {
    type: String,
    enum: ['available', 'rented'],
    default: 'available'
  }
});

// Export the Locker model
const Locker = mongoose.model('Locker', lockerSchema);

export default Locker;
