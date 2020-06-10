import Mongoose from "mongoose";
import uniqid from "uniqid";

const barang = new Mongoose.Schema(
  {
    id_barang: {
      type: Number,
      required: true,
      default: uniqid.time(),
    },
    id_kategori: {
      type: Number,
      required: true,
    },
    nama_barang: {
      type: String,
      required: true,
    },
    harga: {
      type: Number,
      required: true,
    },
    satuan_jual: {
      type: String,
      required: true,
    },
    stok: {
      type: Number,
      required: true,
    },
    tanggal_masuk: {
      type: Date,
      required: true,
    },
    expired: {
      type: Date,
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

module.exports = Mongoose.model("barang", barang);
