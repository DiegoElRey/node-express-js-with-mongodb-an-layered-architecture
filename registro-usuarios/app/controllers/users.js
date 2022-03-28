const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')
const getItems = async(req, res) => {
    try {
        const listAll = await userModel.find({})
        res.send({data: listAll})
    } catch (error) {
        httpError(res, e)
    }
    
}
const getItem = async(req, res) => {
    try {
        const forID = await userModel.findById(req.params.id)
        res.send({data: forID})
    } catch (error) {
        httpError(res, e)
    }

}
const createItem = async(req, res) => {
    try {
        const {DNI, name, age, email} = req.body
        const resDetail = await userModel.create({
            DNI, name, age, email
        })
        res.send({data: resDetail})
    } catch (error) {
        httpError(res, e)
    }

}
const updateItem = async(req, res) => {
    try {
        console.log(req.params.id)
        const resDetailUpdate = await userModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send({data: resDetailUpdate})
    } catch (error) {
        httpError(res, e)
    }

}
const deleteItem = async(req, res) => {
    try {
        const deleteDeatil = await userModel.findByIdAndDelete(req.params.id)
        res.send({data: deleteDeatil})
    } catch (error) {
        httpError(res, e)
    }

}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem}