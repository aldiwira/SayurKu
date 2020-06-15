const Mongoose = require('mongoose');
const uniqid = require('uniqid');

const detail_transaksi = new Mongoose.Schema(
  {
    id_detail: {
      type: Number,
      required: true,
      default: uniqid.time(),
    },
    id_transaksi: {
      type: Number,
      required: true,
    },
    id_barang: {
      type: Number,
      required: true,
    },
    qty: {
      type: Number,
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

module.exports = Mongoose.model('detail transaksi', detail_transaksi);
