const mongoose = require('mongoose');
var random = require('mongoose-simple-random');

const narrativeSchema = new mongoose.Schema({

    comment: {
        type: String
    },
    imagePath: {
        type: String
    }

})
narrativeSchema.plugin(random);

module.exports = mongoose.model('Narrative', narrativeSchema)