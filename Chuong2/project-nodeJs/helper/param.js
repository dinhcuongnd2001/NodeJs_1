const getParams = (params, property, defaultValue) => {
  //   console.log(property, params[property]);
  if (params.hasOwnProperty(property) && params[property] !== undefined) {
    return params[property];
  }
  return defaultValue;
};

module.exports = {
  getParams,
};
