const fs = require('fs')

const MeditationModel = require('../models/meditation-model')

async function findAll() {
    return MeditationModel.find().populate('yogaset')
}

async function add(meditation) {
    return meditation.create(meditation)
}

async function del(id) {
    return MeditationModel.remove({ id })
}

async function find(id) {
    return MeditationModel.findOne({ id }).populate('yogaset')
}

module.exports = {
    findAll,
    find,
    add,
    del
}
