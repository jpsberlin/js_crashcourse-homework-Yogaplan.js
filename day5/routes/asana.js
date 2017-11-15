const express = require('express')
const router = express.Router()

const AsanaService = require('../services/asana-service')

router.get('/', async (req, res, next) => {
    res.send(await AsanaService.findAll())
})

router.get('/all', async (req, res, next) => {
    const exercise = await AsanaService.findAll()
    res.render('exercise-list', {exercise})
})

router.get('/:id', async (req, res, next) => {
    const asana = await AsanaService.find(req.params.id)

    res.render('asana-detail', {asana})
})

router.post('/', async (req, res, next) => {
    const asana = await AsanaService.add(req.body)

    res.send(asana)
})

router.post('/:id/friends', async (req, res, next) => {
    const asana = await AsanaService.find(req.params.id)
    const target = await AsanaService.find(req.body.targetId)

    asana.yogaset.addToSet(target)
    const updatedAsana = await asana.save()
    res.send(updatedAsana)
});

router.delete('/:id', async (req, res, next) => {
    await AsanaService.del(req.params.id)

    res.send('ok!')
})

module.exports = router
