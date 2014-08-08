

App = Ember.Application.create({
	// ready: function() {
 //    this.register('main:auth', App.AuthController);
 //    this.inject('route', 'auth', 'main:auth');
 //    this.inject('controller', 'auth', 'main:auth');
 //  }
});

// App Adapter 

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
    firebase: new Firebase("https://blushingfox.firebaseio.com/")
  });

App.ApplicationSerializer = DS.FirebaseSerializer.extend();