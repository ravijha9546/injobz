const express = require("express");
const bcrypt = require("bcrypt"); 
const User = require("./userModel"); 

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, emailId, password } = req.body;

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            emailId,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
