const express = require("express");
const User = require("../models/User");
const { protect } = require("../middleware/auth");

const router = express.Router();

// GET PROFILE
router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE PROFILE
router.put("/profile", protect, async (req, res) => {
  try {
    const { name, phone, location, bio, gender } = req.body;
    const user = await User.findByIdAndUpdate(
      req.userId,
      {
        name,
        phone,
        location,
        bio,
        gender,
      },
      { new: true },
    );
    res.json({ message: "Profile updated", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
