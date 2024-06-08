const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Admin, Organiser, Player
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isRightHanded: {
    type: Boolean,
    required: true,
  },
  backhandType: {
    type: String,
    enum: ['one-handed', 'two-handed'],
    required: true,
  },
  active: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    required: true,
    default: "Player",
    enum: ["Organiser", "Admin", "Player"]
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },
  rsvp: {
    type: Schema.Types.ObjectId,
    ref: 'Rsvp'
  },
  leaderboard: {
    type: Schema.Types.ObjectId,
    ref: 'Leaderboard'
  },
  notifiations: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Notification'
    }
  ]  
});

module.exports = mongoose.model('User', UserSchema);