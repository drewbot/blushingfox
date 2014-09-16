

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

///////////////////////////////////////////////////////////////////////
//////////////////////// Routers //////////////////////////////////////
///////////////////////////////////////////////////////////////////////

App.Router.map(function(){
	this.resource('app', function(){
		this.resource('gallery');
		this.resource('about');
		this.resource('blog');
		this.resource('contact');
		this.resource('session', {path: ':session_id/session'});
		this.resource('new');
	});

});

///////////////////////////////////////////////////////////////////////
////////////////////////// Routes /////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// Index redirect
App.IndexRoute = Ember.Route.extend({
	redirect: function() {
	    this.transitionTo('gallery');
    }
});

App.AppRoute = Ember.Route.extend({
    model: function(params) {
      return this.store.findAll("portfolio");
    }
});

App.NewRoute = Ember.Route.extend({
    model: function(params) {
      return this.store.findAll("portfolio");
    }
});

App.GalleryRoute = Ember.Route.extend({
    model: function(params) {
      return this.store.findAll("portfolio");
    }

});

App.SessionRoute = Ember.Route.extend({
    model: function(params) {
      return this.store.find("portfolio", params.session_id);
    }
});

///////////////////////////////////////////////////////////////////////
////////////////////////// Models /////////////////////////////////////
///////////////////////////////////////////////////////////////////////


// portfolio
var attr = DS.attr;

App.Portfolio = DS.Model.extend({
	title: attr('string'),
	// date: attr('string'),
 //    thumbnail: attr('file'),
	introCopy: attr('string')
	// imageOne: attr('file'),
	// blogCopyOne: attr('string'),
	// imageTwo: attr('file'),
	// blogCopyTwo: attr('string'),
	// imageThree: attr('file'),
	// blogCopyThree: attr('string'),
	// imageFour: attr('file'),
	// blogCopyFour: attr('string'),
	// imageFive: attr('file'),
	// blogCopyFive: attr('string'),
	// imageSix: attr('file'),
	// blogCopySix: attr('string'),
	// imageSeven: attr('file'),
	// blogCopySeven: attr('string'),
	// imageEight: attr('file'),
	// blogCopyEight: attr('string'),
	// imageNine: attr('file'),
	// blogCopyNine: attr('string'),
	// imageTen: attr('file'),
	// blogCopyTen: attr('string')
});

///////////////////////////////////////////////////////////////////////
//////////////////// Controllers //////////////////////////////////////
///////////////////////////////////////////////////////////////////////

App.NewController = Ember.ObjectController.extend({
 
  actions :{
    save : function(){
    	var title = $('#title').val();
        var introCopy = $('#intro-copy').val();

        var store = this.get('store');
        var portfolio = this.store.createRecord('portfolio',{
        	title : title,
			introCopy: introCopy
        });
        portfolio.save();

        // this.transitionToRoute('gallery');

    },
  }
});

// All Text Fields
Ember.TextField.reopen({
    classNames: ['all-text-inputs']
});

//////////////////////////// Dashboard Controller /////////////////////////////////
App.GalleryController = Ember.ArrayController.extend({
	// itemController: 'portfolio',

	actions:{

	}
});






