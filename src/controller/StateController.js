const stateSchema = require('../models/StateModel')

const getAllStates = async (req, res) => {
    try {
        const allStates = await stateSchema.find()
        res.json({
            message: 'all states',
            data: allStates
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getStateById = async (req, res) => {
    try {
        const foundState = await stateSchema.findById(req.params.id)
        if (foundState) {
            res.json({
                message: 'state found',
                data: foundState
            })
        } else {
            res.status(404).json({
                message: 'state not found'
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createState = async (req, res) => {
    try {
        const savedState = await stateSchema.create(req.body)
        res.status(201).json({
            message: 'state saved',
            data: savedState
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteState = async (req, res) => {
    try {
        const deletedState = await stateSchema.findByIdAndDelete(req.params.id)
        if (deletedState) {
            res.status(200).json({
                message: 'state deleted',
                data: deletedState
            })
        } else {
            res.status(404).json({
                message: 'state not found to delete'
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllStates,
    getStateById,
    createState,
    deleteState
}


