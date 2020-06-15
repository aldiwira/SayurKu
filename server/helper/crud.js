// Mongoose CRUD Helper Ver.0.1.0
// aldiwiraw
const mongoose = require('mongoose');

module.exports = {
  read: async (model, filter, find) => {
    if (find === 'one') {
      return await model.findOne(filter);
    } else if (find === null) {
      return await model.find(filter);
    }
  },
  create: async (model, update) => {
    return await model.create(update);
  },
  update: async (model, filter, update) => {
    return await model.findOneAndUpdate(filter, update, {
      useFindAndModify: true,
    });
  },
  delete: async (model, filter) => {
    return await model.findOneAndDelete(filter);
  },
};
