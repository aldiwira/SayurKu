const Mongoose = require("mongoose");
const uniqid = require("uniqid");
const bcrypt = require("bcrypt");
const users = new Mongoose.Schema(
  {
    id_user: {
      type: String,
      required: true,
      default: uniqid.time(),
    },
    nama: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    no_telp: {
      type: String,
      required: true,
    },
    alamat: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = Mongoose.model("users", users);
