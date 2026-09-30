const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const Booking = require("../models/Booking");
const Contact = require("../models/Contact");
const Room = require("../models/Room");

const router = express.Router();

// ==================== REGISTER ====================

router.post("/register", async (req, res) => {
  try {
    const { fullName, email, phone, password } = req.body;

    if (!fullName || !email || !phone || !password) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User with this email already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Account created successfully!",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Registration error:", error.message);

    res.status(500).json({
      message: "Server error during registration.",
    });
  }
});

// ==================== LOGIN ====================

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    res.status(200).json({
      message: "Login successful!",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);

    res.status(500).json({
      message: "Server error during login.",
    });
  }
});

// ==================== CREATE BOOKING ====================

router.post("/bookings", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      checkIn,
      checkOut,
      roomType,
      guests,
      specialRequests,
      paymentMethod,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !checkIn ||
      !checkOut ||
      !roomType ||
      !guests
    ) {
      return res.status(400).json({
        message: "Please fill in all required booking fields.",
      });
    }

    const booking = await Booking.create({
      fullName,
      email,
      phone,
      checkIn,
      checkOut,
      roomType,
      guests,
      specialRequests,
      paymentMethod: paymentMethod || "Pay at Hotel",
    });

    res.status(201).json({
      message: "Booking created successfully!",
      booking,
    });
  } catch (error) {
    console.error("Booking error:", error.message);

    res.status(500).json({
      message: "Server error while creating booking.",
    });
  }
});

// ==================== GET BOOKINGS ====================

router.get("/bookings", async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({
        message: "Email is required.",
      });
    }

    const bookings = await Booking.find({ email }).sort({
      createdAt: -1,
    });

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Get bookings error:", error.message);

    res.status(500).json({
      message: "Server error while getting bookings.",
    });
  }
});

// ==================== CANCEL BOOKING ====================

router.delete("/bookings/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found.",
      });
    }

    booking.status = "Cancelled";

    await booking.save();

    res.status(200).json({
      message: "Booking cancelled successfully!",
      booking,
    });
  } catch (error) {
    console.error("Cancel booking error:", error.message);

    res.status(500).json({
      message: "Server error while cancelling booking.",
    });
  }
});

// ==================== CONTACT FORM ====================

router.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "All contact fields are required.",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      message: "Message sent successfully!",
      contact,
    });
  } catch (error) {
    console.error("Contact form error:", error.message);

    res.status(500).json({
      message: "Server error while sending message.",
    });
  }
});

// ==================== GET ROOMS ====================

router.get("/rooms", async (req, res) => {
  try {
    const rooms = await Room.find().sort({
      createdAt: -1,
    });

    res.status(200).json(rooms);
  } catch (error) {
    console.error("Get rooms error:", error.message);

    res.status(500).json({
      message: "Server error while getting rooms.",
    });
  }
});

// ==================== ADD ROOM ====================

router.post("/rooms", async (req, res) => {
  try {
    const {
      name,
      type,
      price,
      description,
      image,
      capacity,
      available,
    } = req.body;

    if (
      !name ||
      !type ||
      !price ||
      !description ||
      !image ||
      !capacity
    ) {
      return res.status(400).json({
        message: "All room fields are required.",
      });
    }

    const room = await Room.create({
      name,
      type,
      price,
      description,
      image,
      capacity,
      available:
        available !== undefined ? available : true,
    });

    res.status(201).json({
      message: "Room added successfully!",
      room,
    });
  } catch (error) {
    console.error("Add room error:", error.message);

    res.status(500).json({
      message: "Server error while adding room.",
    });
  }
});

module.exports = router;
