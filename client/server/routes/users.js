var users = [
  { id: 11, name: 'Artyom Trityak', twitter: 'artyomtrityak', password: '123', questions: [21] },
  { id: 12, name: 'Eldar Djafarov', twitter: 'edjafarov', password: '145', answers: [31] },
  { id: 13, name: 'Ingvar Stepanyan', twitter: 'RReverser', password: '178', answers: [32] },
  { id: 14, name: 'Maxim Klymyshyn', twitter: 'maxmaxmaxmax', password: '167', answers: [33] }
];


module.exports = function(app) {
  app.get('/api/users', function(req, res) {
    res.send({
      users: users
    });
  });

  app.get('/api/users/:userId', function(req, res) {
    res.send({
      users: users.filter(function (user) { return user.id == req.params.userId; })
    });
  });
};
