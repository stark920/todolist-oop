const checkObjectTitle = (data) => {
  try {
    data = JSON.parse(data);
    if (typeof data !== 'object') {
      return false;
    }
    if (!data?.title) {
      return false;
    }
    return data;
  } catch {
    return false;
  }
};

module.exports = checkObjectTitle;
