const express = require('express');
const router = express.Router();
const controller = require('./controller');
const narrativeController = require('./NarrativeController');


router.get('/', (req, res) => {
    res.send("it works");
});
router.post('/question', controller.createQuestion);

router.get('/question', controller.getQuestions);

router.get('/question/5', controller.getLessThanFive);

router.post('/submit',narrativeController.createNarrative);

module.exports = router;
