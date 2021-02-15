const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    comblexName: { type: String, required: true , unique: true},
    noOfBlocks: { type: Number, required: true },
    noOfTowers: { type: Number, required: true },
    noOfFloors:{type:Number,required: true },
    noOfUnits: { type: Number,required: true  }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('apartment', schema);