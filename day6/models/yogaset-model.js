const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const YogasetSchema = mongoose.Schema({
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
        ref: 'Yogaset'
    }],
    beginner: { 
        type: Boolean 
        }
})
YogasetSchema.plugin(AutoIncrement, {inc_field: 'id'})

const YogasetModel = mongoose.model('YogasetModel', YogasetSchema)

module.exports = YogasetModel
