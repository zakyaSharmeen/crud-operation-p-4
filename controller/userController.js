const User = require("../model/userModel");

// for sending the data into the database
const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        const { email } = userData;

        
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Save the new user
        const newUser = await userData.save();
        return res.status(201).json(newUser); 
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// for checking if this works
const fetch = async (req, res) => {
    try {
        return res.json("hello world miss zakya");
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { fetch, create };
