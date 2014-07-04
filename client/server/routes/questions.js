var data = require('../data');

module.exports = function(app) {
  app.get('/api/questions', function(req, res) {
    res.send({
      questions: data.questions
    });
  });
  app.get('/api/questions/:questionId', function(req, res) {
    res.send({
      questions: data.questions.filter(function (question) { return question.id == req.params.questionId; })
    });
  });
  app.post('/api/questions', function(req, res) {
    var question = req.body.question;

    question.id = data.id();
    question.answers = [];

    data.questions.push(question);
    data.users.forEach(function (user) {
      if (user.id == question.user) {
        user.questions.push(question.id)
      }
    });

    res.send(201, {
      question: question
    });
  })
};
