const mongoose = require('mongoose')
const Question = mongoose.model('Question');



exports.createQuestion = async (req, res) => {
    req.body.score = 0
    const question = await (new Question(req.body).save())
    res.json(question);

}


exports.getQuestions = async (req, res) => {

    Question.findRandom({score: {$gt:5}}, {}, {count: 5, limit: 5}, function(err, results) {
        if (err) console.log(err);
        else res.json(results);
      });
}

exports.getLessThanFive = async (req, res) => {
   question = await Question.find().where('score').lt(5)
    res.json(question);
}
// 27 35 91

