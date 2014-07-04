var data = require('../data');

module.exports = function(app) {
  app.get('/api/answers', function(req, res) {
    res.send({
      answers: data.answers
    });
  });
  app.get('/api/answers/:answerId', function(req, res) {
    res.send({
      answers: data.answers.filter(function (answer) { return answer.id == req.params.answerId; })
    });
  });
};
