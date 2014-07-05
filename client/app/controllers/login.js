import Ember from 'ember';

export default Ember.Controller.extend({
  previousTransition: null,

  username: null,
  password: null,

  actions: {
    login: function () {
      this.session.login(this.get('username'), this.get('password')).then(function (user) {
        var transition = this.get('previousTransition');

        this.setProperties({
          previousTransition: null,
          username: null,
          password: null
        });

        if (transition) {
          transition.retry();
        } else {
          this.transitionToRoute('index');
        }
      }.bind(this));
    }
  }
});
