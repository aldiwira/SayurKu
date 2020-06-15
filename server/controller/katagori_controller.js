const katagori = require('../models/Kategori');
const crud = require('../helper/crud');
const response = require('../helper/response');
let code;
let data;
let massage;

module.exports = {
  getKatagori: async (req, res) => {
    await crud
      .read(katagori, null, null)
      .then((datas) => {
        code = response.CODE_SUCCESS;
        data = datas;
        massage = 'Success fetch all katagori';
      })
      .catch((err) => {
        code = response.CODE_ERROR;
        data = err;
        massage = 'Failed fetch all katagori';
      });
    res.status(code).json(response.set_response(code, data, massage));
  },
  createKatagori: async (req, res) => {
    const datas = {
      id_katagori: response.getUniqId(),
      nama_katagori: req.body.nama_katagori,
    };
    if (!(await crud.read(katagori, datas, 'one'))) {
      await crud
        .create(katagori, datas)
        .then((datas) => {
          code = response.CODE_SUCCESS;
          data = datas;
          massage = 'Success create katagori';
        })
        .catch((err) => {
          code = response.CODE_ERROR;
          data = err;
          massage = 'Failed create katagori';
        });
    } else {
      code = response.CODE_ERROR;
      data = null;
      massage = 'katagori ' + datas.nama_katagori + ' is available';
    }
    res.status(code).json(response.set_response(code, data, massage));
  },
  updateKatagori: async (req, res) => {
    const datas = {
      filter: {
        id_katagori: req.params.id,
      },
      update: {
        nama_katagori: req.body.nama_katagori,
      },
    };
    await crud
      .update(katagori, datas.filter, datas.update)
      .then((datas) => {
        code = response.CODE_SUCCESS;
        data = datas;
        massage = 'katagori was changed';
      })
      .catch((err) => {
        code = response.CODE_ERROR;
        data = err;
        massage = 'error update katagori';
      });
    res.status(code).json(response.set_response(code, data, massage));
  },
  deleteKatagori: async (req, res) => {
    const datas = {
      filter: {
        id_katagori: req.params.id,
      },
    };
    await crud
      .delete(katagori, datas.filter)
      .then((datas) => {
        code = response.CODE_SUCCESS;
        data = null;
        massage = 'katagori was deleted';
      })
      .catch((err) => {
        code = response.CODE_ERROR;
        data = err;
        massage = 'error delete katagori';
      });
    res.status(code).json(response.set_response(code, data, massage));
  },
};
