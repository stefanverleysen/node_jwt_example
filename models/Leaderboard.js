const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LeaderboardSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
    
      matchesPlayed: {
        type: Number,
        required: true,
        default: 0
      },
      matchesWon: {
        type: Number,
        required: true,
        default: 0
      },
      matchesLost: {
        type: Number,
        required: true,
        default: 0
      },
      points: {
        type: Number,
        required: true,
        default: 0
      }
});



module.exports = mongoose.model('Leaderboard', LeaderboardSchema);