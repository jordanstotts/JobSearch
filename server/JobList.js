const mongoose = require('mongoose')

const JobListSchema = new mongoose.Schema({
    position: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    applicationLink: {
        type: String,
        required: true
    },
    appliedOn: {
        type: Date,
        required: true
    },
    followUp: {
        type: Date,
        required: true
    },
})

const JobList = mongoose.model('JobList', JobListSchema)

module.exports = JobList