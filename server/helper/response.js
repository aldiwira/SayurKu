const uniqid = require('uniqid');
module.exports = {
  CODE_SUCCESS: 200,
  CODE_CREATED: 201,
  CODE_ERROR: 400,
  CODE_UNKNOWN: 404,
  set_response: (response, data, massage) => {
    let status;
    if (response === 200 || response === 201) {
      status = true;
    } else {
      status = false;
    }
    return !data
      ? {
          status: status,
          massage: massage,
        }
      : {
          status: status,
          massage: massage,
          data: data,
        };
  },
  getUniqId: () => {
    return uniqid.time();
  },
};
