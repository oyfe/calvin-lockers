import User from "../models/user.js";
import bcrypt from "bcrypt";

export const addUser = async (user) => {
    const { first_name, username, email, password, student_id } = user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userInfo = new User({
        first_name,
        username,
        email,
        password: hashedPassword,
        student_id
    });

    await userInfo.save();

    return userInfo;
};

// export const delete