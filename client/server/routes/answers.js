var answers = [
  { id: 31, body: "I don't know, dude. May be there's a jQuery plugin for that?", user: 12, question: 21 },
  { id: 32, body: "V8's JIT is so fast, no need to add numbers - it will optimize all the results away!", user: 13, question: 21 },
  { id: 33, body: "What about just adding them with +???", user: 14, question: 21 }
];

module.exports = function(app) {
  app.get('/api/answers', function(req, res) {
    res.send({
      answers: answers
    });
  });
  app.get('/api/answers/:answerId', function(req, res) {
    res.send({
      answers: answers.filter(function (answer) { return answer.id == req.params.answerId; })
    });
  });
};
