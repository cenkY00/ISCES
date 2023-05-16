const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  iztechMail: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;