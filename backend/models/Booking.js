const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    checkIn: {
      type: String,
      required: true,
    },

    checkOut: {
      type: String,
      required: true,
    },

    roomType: {
      type: String,
      required: true,
    },

    guests: {
      type: Number,
      required: true,
    },

    specialRequests: {
      type: String,
      default: "",
    },

    paymentMethod: {
      type: String,
      default: "Pay at Hotel",
    },

    status: {
      type: String,
      default: "Confirmed",
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;