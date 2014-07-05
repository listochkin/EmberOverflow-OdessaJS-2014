var data = require('../data');

module.exports = function(app) {
  app.get('/api/users', function(req, res) {
    if (req.query.twitter || req.query.password) {
      res.send({
        users: data.users.filter(function (user) { return user.twitter == req.query.twitter && user.password == req.query.password; })
      });
    } else {
      res.send({
        users: data.users
      });
    }
  });

  app.get('/api/users/:userId', function(req, res) {
    res.send({
      users: data.users.filter(function (user) { return user.id == req.params.userId; })
    });
  });
};
