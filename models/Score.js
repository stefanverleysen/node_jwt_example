const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new mongoose.Schema({
    match: {
        type: Schema.Types.ObjectId,
        ref: 'Match'   
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
      },
    points: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
      },
});


module.exports = mongoose.model('Score', ScoreSchema);