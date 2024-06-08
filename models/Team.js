const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamSchema = new mongoose.Schema({
  player_one: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  player_two: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  score: {
    type: Schema.Types.ObjectId,
    ref: 'Score'
  },

  match: [{
    type: Schema.Types.ObjectId,
    ref: 'Match'
  }]
});

module.exports = mongoose.model('Team', TeamSchema);