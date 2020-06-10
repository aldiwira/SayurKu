module.exports = {
  CODE_SUCCESS: 200,
  CODE_CREATED: 201,
  CODE_ERROR: 400,
  CODE_UNKNOWN: 404,
  set_response: (response, data, massage) => {
    let status = false;
    response.code === this.CODE_SUCCESS || response.code === this.CODE_CREATED
      ? (status = true)
      : (status = false);
    return {
      status: status,
      massage: massage,
      data: data,
    };
  },
};
