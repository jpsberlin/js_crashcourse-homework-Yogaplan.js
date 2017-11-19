const fs = require('fs')

const PranayamaModel = require('../models/pranayama-model')

async function findAll() {
    return PranayamaModel.find().populate('yogaset')
}

async function add(pranayama) {
    return PranayamaModel.create(pranayama)
}

async function del(id) {
    return PranayamaModel.remove({ id })
}

async function find(id) {
    return PranayamaModel.findOne({ id }).populate('yogaset')
}

module.exports = {
    findAll,
    find,
    add,
    del
}
