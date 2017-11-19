const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const AsanaSchema = mongoose.Schema({
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
        ref: 'Asana'
    }],
    beginner: { 
        type: Boolean 
        }
})
AsanaSchema.plugin(AutoIncrement, {inc_field: 'id'})

const AsanaModel = mongoose.model('Asana', AsanaSchema)

module.exports = AsanaModel
