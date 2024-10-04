import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true, unique: true
  },
  password: {
    type: String,
    required: true
  },
  student_id: {
    type: Number,
    required: true
  },
  registered_date: { type: Date, default: Date.now }
});

// Export the User model
const User = mongoose.model('User', userSchema);
export default User
