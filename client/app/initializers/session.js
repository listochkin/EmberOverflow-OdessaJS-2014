export default {
  name: 'session',
  initialize: function(container, app) {
    app.inject('route', 'session', 'service:session');
    app.inject('controller:login', 'session', 'service:session');
    app.inject('controller:application', 'session', 'service:session');
    app.inject('service:session', 'store', 'store:main');
  }
};
