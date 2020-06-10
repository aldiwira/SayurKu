import Mongoose from "mongoose";
import uniqid from "uniqid";

const kategori = new Mongoose.Schema(
  {
    id_kategori: {
      type: Number,
      required: true,
      default: uniqid.time(),
    },
    kategori: {
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

module.exports = Mongoose.model("kategori", kategori);
