const Mongoose = require("mongoose");
const uniqid = require("uniqid");

const Transaksi = new Mongoose.Schema(
  {
    id_transaksi: {
      type: Number,
      required: true,
      default: uniqid.time(),
    },
    id_user: {
      type: Number,
      required: true,
    },
    tanggal_order: {
      type: Date,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
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

module.exports = Mongoose.model("transaksi", Transaksi);
