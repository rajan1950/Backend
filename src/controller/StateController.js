const stateSchema = require('../models/StateModel')

const getAllStates = async (req, res) => {
    const allStates = await stateSchema.find()
    res.json({
        message: 'all states',
        data: allStates
    })
}

const getStateById = async (req, res) => {
    const foundState = await stateSchema.findById(req.params.id)
    if (foundState) {
        res.json({
            message: 'state found',
            data: foundState
        })
    } else {
        res.json({
            message: 'state not found'
        })
    }
}

const createState = async (req, res) => {
    const savedState = await stateSchema.create(req.body)
    res.status(201).json({
        message: 'state saved',
        data: savedState
    })
}

const deleteState = async (req, res) => {
    const deletedState = await stateSchema.findByIdAndDelete(req.params.id)
    if (deletedState) {
        res.status(200).json({
            message: 'state deleted',
            data: deletedState
        })
    } else {
        res.status(200).json({
            message: 'state not found to delete'
        })
    }
}

// PUT /states/:id/color        => add a color   (req.body.color)
const addColor = async (req, res) => {
    const updatedState = await stateSchema.findByIdAndUpdate(
        req.params.id,
        { $push: { colors: req.body.color } },
        { new: true }
    )
    if (updatedState) {
        res.status(200).json({ message: 'color added', data: updatedState })
    } else {
        res.status(404).json({ message: 'state not found' })
    }
}

// PUT /states/:id/color/remove  => remove a color (req.body.color)
const removeColor = async (req, res) => {
    const updatedState = await stateSchema.findByIdAndUpdate(
        req.params.id,
        { $pull: { colors: req.body.color } },
        { new: true }
    )
    if (updatedState) {
        res.status(200).json({ message: 'color removed', data: updatedState })
    } else {
        res.status(404).json({ message: 'state not found' })
    }
}

module.exports = {
    getAllStates,
    getStateById,
    createState,
    deleteState,
    addColor,
    removeColor
}


