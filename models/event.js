const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    user_Id:{
        type: String,
        required: true
    },
    eventName:{
        type: String,
        require:true
    },
    occurence: {
        type: String,
        require:true
    },
    startDate:{
        type: String,
        require:true
    },
    endDate:{
        type:String,
        require:true
    }
})

const Event = mongoose.model('Event',eventSchema);

module.exports = Event;