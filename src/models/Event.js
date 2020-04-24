const mongoose = require('../configs/database');
const PointSchema = require('./utils/PointSchema');

const EventPlugin = require('./utils/EventPlugin');

const EventSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String,
    status: String,
    eventURL:[String],
    imageURL: String,
    startTime: Date,
    endTime: Date,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

EventSchema.plugin(EventPlugin);

module.exports = mongoose.model('Event',EventSchema);