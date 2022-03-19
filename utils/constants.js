const headers = {
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
  'Content-Type': 'application/json'
}

const errMsg = {
  // According to MDN document
  // https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status
  '400': 'Bad Request',
  '401': 'Unathorized',
  '403': 'Forbidden',
  '404': 'Not Found',
  '405': 'Method Not Allowed',
  '406': 'Nor Acceptable'
}

module.exports = { headers, errMsg }