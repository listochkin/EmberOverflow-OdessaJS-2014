import Ember from 'ember';

export default Ember.Object.extend({
  user: null,
  isLoggedIn: Ember.computed.notEmpty('user'),

  login: function (username, password) {
    return new Promise(function (resolve, reject) {
      this.store.find('user', {
        twitter: username,
        password: password
      }).then(function (users) {
        if (users.get('length') === 1) {
          this.set('user', users.objectAt(0));
          resolve(this.get('user'));
        } else {
          reject(users);
        }
      }.bind(this));
    }.bind(this));
  }
});
