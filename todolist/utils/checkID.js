const validator = require('validator');

const checkID = (data, id) => {
  if (!validator.isUUID(id, 4)) return -1;

  const index = data.findIndex((el) => el.id === id);

  if (index < 0) return -1;

  return index;
};

module.exports = checkID;
