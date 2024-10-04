const mongoose = require('mongoose');

// Define Rental Schema
const rentalSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    locker_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Locker', required: true },
    start_date: { type: Date, default: Date.now },
    end_date: { type: Date },
    payment_status: { type: String, enum: ['pending', 'paid'], default: 'pending' }
});

// Export the Rental model
module.exports = mongoose.model('Rental', rentalSchema);
