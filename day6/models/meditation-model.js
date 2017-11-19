const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const MeditationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        default: 0,
        min: 0
    },
    yogaset: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meditation'
    }],
    beginner: { 
        type: Boolean 
        }
})
MeditationSchema.plugin(AutoIncrement, {inc_field: 'id'})

const MeditationModel = mongoose.model('Meditation', MeditationSchema)

module.exports = MeditationModel
