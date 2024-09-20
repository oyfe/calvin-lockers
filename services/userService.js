const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.register = async (username, password, email) => {
    // Check if username or email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('Username or email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    return user;
};
