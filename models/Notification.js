const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NotificationSchema = new mongoose.Schema({
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    },
    dateSent: {
        type: Date,
        required: true,
        default: Date.now()
    },
    type: {
        type: String,
        required: true,
        enum: ['email', 'sms']
    }
});


module.exports = mongoose.model('Notification', NotificationSchema);