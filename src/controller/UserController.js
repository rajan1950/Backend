const userschema = require('../models/UserModel');

const getAllUser = async (req, res) => {
    console.log("Api calling")
    const allUser = await userschema.find()
    res.json({
        message: 'All User',
        data: allUser
    })
}

// PUT /users/:id/color        => add a color   (req.body.color)
const addColor = async (req, res) => {
    const updatedUser = await userschema.findByIdAndUpdate(
        req.params.id,
        { $push: { colors: req.body.color } },
        { new: true }
    )
    if (updatedUser) {
        res.status(200).json({ message: 'color added', data: updatedUser })
    } else {
        res.status(404).json({ message: 'user not found' })
    }
}

// PUT /users/:id/color/remove  => remove a color (req.body.color)
const removeColor = async (req, res) => {
    const updatedUser = await userschema.findByIdAndUpdate(
        req.params.id,
        { $pull: { colors: req.body.color } },
        { new: true }
    )
    if (updatedUser) {
        res.status(200).json({ message: 'color removed', data: updatedUser })
    } else {
        res.status(404).json({ message: 'user not found' })
    }
}

module.exports = {
    getAllUser,
    addColor,
    removeColor
}