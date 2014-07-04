import DS from 'ember-data';

export default DS.Model.extend({
  questions: DS.hasMany('question', { async: true }),
  answers: DS.hasMany('answer', { async: true }),

  name: DS.attr('string'),
  twitter: DS.attr('string'),
  password: DS.attr('string'),

  avatar: function () {
    return 'http://avatars.io/twitter/' + this.get('twitter');
  }.property('twitter')
});
