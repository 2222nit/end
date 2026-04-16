const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      required: true,
      trim: true,
    },

    verification: {
      user: {
        userotp: {
          type: String,
          default: "0",
        },
        isverify: {
          type: Boolean,
          default: false,
        },
        isdeleted: {
          type: Boolean,
          default: false,
        },
        isAccountActive: {
          type: Boolean,
          default: true,
        },
      },

      admin: {
        adminotp: {
          type: String,
          default: "0",
        },
        isverify: {
          type: Boolean,
          default: false,
        },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);