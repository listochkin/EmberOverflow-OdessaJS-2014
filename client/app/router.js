import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberOverflowENV.locationType
});

Router.map(function() {
  this.resource('users');
  this.resource('user', { path: 'users/:user_id' });
  this.resource('questions', function () {
    this.route('new');
  });
  this.resource('question', { path: 'questions/:question_id' });
  this.resource('answers');
  this.resource('answer', { path: 'answers/:answer_id' });
  this.route('login');
});

export default Router;
