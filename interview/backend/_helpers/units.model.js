const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    unitNo: { type: String,  required: true },
    comblexName: { type: String, required: true },
    statuses: { type: String, default: 'available'}
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Units', schema);