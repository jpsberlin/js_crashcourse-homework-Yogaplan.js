const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const PranayamaSchema = mongoose.Schema({
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
        ref: 'Pranayama'
    }],
    beginner: { 
        type: Boolean 
        }
})
PranayamaSchema.plugin(AutoIncrement, {inc_field: 'id'})

const PranayamaModel = mongoose.model('Pranayama', PranayamaSchema)

module.exports = PranayamaModel
