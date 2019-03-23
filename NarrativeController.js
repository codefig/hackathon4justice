const mongoose = require('mongoose')
const Narrative = mongoose.model('Narrative');



exports.createNarrative = async (req, res) => {

    const narrative = await (new Narrative(req.body).save())
    res.json(narrative);

}


exports.getNarratives = async (req, res) => {

     const results = await Narrative.find();
     res.json(results);
    
}


// 27 35 91

