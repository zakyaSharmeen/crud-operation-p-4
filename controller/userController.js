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

// for updating the data into the database
const update = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findOne({_id: id})
        if (!userExist) {
            return res.status(400).json({ message: "User already exists" });
        }
        const updateUser = await User.findByIdAndUpdate(id, req.body, {new: true})
        res.status(201).json(updateUser)
       
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};


// for deleting the data into the database
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findOne({_id: id})
        if (!userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        await User.findByIdAndDelete(id)
        res.status(201).json({message: "User deleted successfully" })
       
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};





// for checking if this works and fetching the dta
const fetch = async (req, res) => {
    try {
        // return res.json("hello world miss zakya");
        const users = await User.find()
        if(users.length === 0){
            return res.status(404).json({message: "User Not Found"})
        }
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { fetch, create, update, deleteUser };
