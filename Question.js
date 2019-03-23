const mongoose = require('mongoose');
var random = require('mongoose-simple-random');

const questionSchema = new mongoose.Schema({

    text: {
        type: String
    },

    score: {
        type: Number
    }

})
questionSchema.plugin(random);

module.exports = mongoose.model('Question', questionSchema)