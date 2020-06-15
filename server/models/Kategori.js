const Mongoose = require('mongoose');
const uniqid = require('uniqid');

const kategori = new Mongoose.Schema(
  {
    id_katagori: {
      type: String,
      required: true,
    },
    nama_katagori: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);

module.exports = Mongoose.model('kategori', kategori);
