const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Profile = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true,
        required: true
    },

});

Profile.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Profile', Profile);