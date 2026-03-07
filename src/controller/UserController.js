const userschema = require('../models/UserModel');

const getAllUser = async (req, res) => {
    try {
        const allUser = await userschema.find()
        res.json({
            message: 'All User',
            data: allUser
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllUser
}