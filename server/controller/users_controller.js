const userModels = require('../models/Users');
const response = require('../helper/response');
const bcrypt = require('bcrypt');
let code;
let massage;
let data;

const userAvailable = async (data) => {
  return userModels.findOne(data);
};

module.exports = {
  registerProcess: async (req, res) => {
    const datas = {
      nama: req.body.nama,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      gender: req.body.gender,
      no_telp: req.body.no_telp,
      alamat: req.body.alamat,
    };
    const cond = await userAvailable({
      $or: [{email: datas.email}, {no_telp: datas.no_telp}],
    });
    if (!cond) {
      await userModels
        .create(datas)
        .then((result) => {
          code = response.CODE_CREATED;
          massage = 'User account was created';
          data = result;
        })
        .catch((err) => {
          code = response.CODE_ERROR;
          massage = "Users account wasn't created";
          data = err;
        });
    } else {
      code = response.CODE_ERROR;
      massage = 'Users account was available';
      data = null;
    }

    res.status(code).json(response.set_response(code, data, massage));
  },
  loginProcess: async (req, res) => {
    const datas = {
      email: req.body.email,
      password: req.body.password,
    };
    await userModels
      .findOne({email: datas.email})
      .then((result) => {
        if (result) {
          const hashChecker = bcrypt.compareSync(
            datas.password,
            result.password,
          );
          if (hashChecker) {
            code = response.CODE_SUCCESS;
            massage = 'Login was successfull';
            data = result;
          } else {
            code = response.CODE_ERROR;
            massage = 'Username or password is wrong';
            data = null;
          }
        } else {
          code = response.CODE_ERROR;
          massage = 'Username or password is wrong';
          data = null;
        }
      })
      .catch((err) => {
        code = response.CODE_ERROR;
        massage = 'Login error';
        data = err;
      });
    res.status(code).json(response.set_response(code, data, massage));
  },
};
