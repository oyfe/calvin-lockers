const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const Locker = require('./models/locker');
const Rental = require('./models/rental');

const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/calvin_lockers', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));


app.use('/api', userRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});