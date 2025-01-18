const sendResponse = (res, result, message, code = 200, success = true) => {
    const response = {
        success: success,
        code: code,
        message: message,
        data: result
    };
    return res.status(code).json(response);
};

module.exports = sendResponse;