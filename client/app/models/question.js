import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),

  title: DS.attr('string'),
  body: DS.attr('string')
});
