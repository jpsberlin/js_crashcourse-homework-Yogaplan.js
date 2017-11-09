const fs = require('fs')

const AsanaModel = require('../models/asana-model')

const dbPath = `${__dirname}/../database.json`

async function findAll() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)

            const asana = JSON.parse(file).map(AsanaModel.create)

            resolve(posture)
        })
    })
}

async function add(asana) {
    const allPosture = await findAll()
    const lastAsana = allPosture[allPosture.length - 1]
    const lastAsanasName = lastAsana && lastAsana.name || 0
    asana.name = lastAsanasName + 1

    asana = AsanaModel.create(asana)
    allPosture.push(asana)
 
    await saveAll(allPosture)

    return asana
}

async function del(asanaName) {
    const allPosture = await findAll()
    const asanaIndex = allPosture.findIndex(a => a.name == asanaName)
    if (asanaIndex < 0) return

    allPosture.splice(asanaIndex, 1)

    saveAll(allPosture)
}

async function find(asanaName) {
    const allPosture = await findAll()

    return allPosture.find(a => a.name == asanaName)
}

async function saveAll(posture) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(posture), (err, file) => {
            if (err) return reject(err)

            resolve()
        })
    })
}

module.exports = {
    findAll,
    find,
    add,
    del
}
