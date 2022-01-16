const userModel = require('../model/user')
const getAllUsers = async (req, res) => {
    res.send(await userModel.find());
}

module.exports = getAllUsers