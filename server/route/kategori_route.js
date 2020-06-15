const express = require('express');
const route = express.Router();
const katagori = require('../controller/katagori_controller');

route.get('/', katagori.getKatagori);
route.post('/', katagori.createKatagori);
route.put('/:id', katagori.updateKatagori);
route.delete('/:id', katagori.deleteKatagori);

module.exports = route;
