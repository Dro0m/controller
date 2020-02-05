const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true,
        required: true
    },
    headline: {
        type: String,
        required: true,
        default: "I am a professional looking for a ethical company"
    },
    skills: {
        type: String,
        required: false
    },
    education: {
        type: [String],
        required: false,
    },
    work_experience {
    type: [String],
    required: false,
}

});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);