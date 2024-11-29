const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
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
        required: true
    }
}, { timestamps: true });

const Event = mongoose.model('event', eventSchema);
module.exports = Event;