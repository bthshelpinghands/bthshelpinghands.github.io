const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please Enter a Name for the Event"]
    },
    date: {
        type: Date,
        required: [true, "Please Enter the Date of the Event"],
    },
    location: {
        type: String,
        required: [true, "Please Enter the Location of the Event"]
    },
    description: {
        type: String,
        required: [true, "Please give a Description for the Event"]
    },
    points: {
        type: Number,
        required: false
    },
    hours: {
        type: Number,
        required: false,
    },
    attendees: {
        type: Array,
        required: true
    },
    coverImage: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Event = mongoose.model('event', eventSchema);
module.exports = Event;