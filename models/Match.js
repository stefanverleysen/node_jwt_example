const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatchSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now(),
        required: true
    },

    loation: {
        type: String,
        required: true
    },

    teamA: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    teamB: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },

    scoreA: {
        type: Number,
        required: true,
        default: 0
    },
    
    scoreB: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('Match', MatchSchema);