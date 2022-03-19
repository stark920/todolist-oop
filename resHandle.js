const { headers, errMsg } = require('./utils/constants');

const successHandle = (res, data) => {
    res.writeHead(200, headers);
    if (data) {
        res.write(JSON.stringify(
            {
                "status": "true",
                "data": data
            }
        ));
    }
    res.end();
}

const errorHandle = (res, statusCode) => {
    res.writeHead(statusCode, headers);
    res.write(JSON.stringify(
        {
            "status": "false",
            "msg": errMsg[statusCode]
        }
    ));
    res.end();
}

module.exports = {successHandle, errorHandle}