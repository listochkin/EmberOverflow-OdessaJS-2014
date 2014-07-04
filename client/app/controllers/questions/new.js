import Ember from 'ember';

export default Ember.Controller.extend({
  title: null,
  body: null,

  actions: {
    ask: function () {
      if (this.get('title') && this.get('body')) {

        this.store.createRecord('question', {
          title: this.get('title'),
          body: this.get('body')
        }).save();

        this.set('title', null);
        this.set('body', null);
      }
    }
  }
});
