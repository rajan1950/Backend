const userschema = require('../models/UserModel');

const getAllUser = async (req, res) => {
    console.log("Api calling")
    const allUser = await userschema.find()
    res.json({
        message: 'All User',
        data: allUser
    })
}

module.exports = {
    getAllUser
}