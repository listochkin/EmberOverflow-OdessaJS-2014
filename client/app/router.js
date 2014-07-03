import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberOverflowENV.locationType
});

Router.map(function() {
  this.resource('users');
  this.resource('user', { path: 'users/:user_id' });
});

export default Router;
