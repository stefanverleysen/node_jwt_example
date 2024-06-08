const mongoose = require('mongoose');

const CourtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    surfaceType: {
        type: String,
        required: true,
        enum: ['clay', 'grass', 'hard']
    }
});



module.exports = mongoose.model('Court', CourtSchema);