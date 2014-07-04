import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberOverflowENV.locationType
});

Router.map(function() {
  this.resource('users');
  this.resource('user', { path: 'users/:user_id' });
  this.resource('questions');
  this.resource('question', { path: 'questions/:question_id' });
});

export default Router;
