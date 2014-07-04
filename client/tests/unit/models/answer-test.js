import { test, moduleForModel } from 'ember-qunit';

moduleForModel('answer', 'Answer', {
  // Specify the other units that are required for this test.
  needs: ['model:question', 'model:user']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
