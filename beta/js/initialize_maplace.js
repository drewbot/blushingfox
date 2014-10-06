
// Google map controls (Maplace.js)
$(function() {
  new Maplace({
	  locations: [{
	      lat: 34.8268344, 
	      lon: -82.3878306,
	      zoom: 12
	  }],
	  controls_on_map: false
  }).Load();
});