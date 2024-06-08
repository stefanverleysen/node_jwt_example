const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RsvpSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
    matchDate: {
        type: Date,
        default: Date.now,
        required: true
      },
    
    status: {
        type: Boolean,
        default: false,
        required: true
    }
});



module.exports = mongoose.model('Rsvp', RsvpSchema);