const fs = require('fs')

const YogasetModel = require('../models/yogaset-model')

async function findAll() {
    return YogasetModel.find().populate('yogaset')
}

async function add(yogaset) {
    return YogasetModel.create(yogaset)
}

async function del(id) {
    return YogasetModel.remove({ id })
}

async function find(id) {
    return YogasetModel.findOne({ id }).populate('yogaset')
}

module.exports = {
    findAll,
    find,
    add,
    del
}
