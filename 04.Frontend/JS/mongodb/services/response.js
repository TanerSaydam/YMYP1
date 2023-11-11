const response = async(res, callback) => {
    try {
        callback();
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = response;