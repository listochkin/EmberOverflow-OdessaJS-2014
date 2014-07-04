var questions = [
  { id: 21, title: 'How ca I add two values in JavaScript?', body: 'I have numbers 2 and 3 and I have no idea how I can add them together in JavaScript. Can you guys help me?', user: 11, answers: [31, 32, 33] }
];

module.exports = function(app) {
  app.get('/api/questions', function(req, res) {
    res.send({
      questions: questions
    });
  });
  app.get('/api/questions/:questionId', function(req, res) {
    res.send({
      questions: questions.filter(function (question) { return question.id == req.params.questionId; })
    });
  });
};
