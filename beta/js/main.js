
// Click logo to go to home page
$('.logo').click(function(){
	window.location.href = "index.html";
})

// Click logo to go to home page (from session pages)
$('.session-logo').click(function(){
	window.location.href = "../index.html";
})

// Click menu icon to show nav
$('.menu-icon').click(function(){
	$('.nav').addClass('show-nav');
	$('.menu-icon').addClass('menu-open'); // Hide menu icon
	$('.menu-x-icon').addClass('menu-x-open'); // Display close icon
})

// Click menu-x icon to hide nav
$('.menu-x-icon').click(function(){
	$('.nav').removeClass('show-nav');
	$('.menu-icon').removeClass('menu-open'); // Display menu icon
	$('.menu-x-icon').removeClass('menu-x-open'); // Hide close icon
})


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


// Dynamic gallery item mouseover events
// var $overlay = $('<div class="item-overlay"></div>');
// var $caption = $('<p class="overlay-caption"></p>');
// var $icon = $('<i class="fa fa-th overlay-icon"></i>');
// // var $icon = $('<i class="fa fa-share overlay-icon"></i>');   Arrow out option

// $('.item').mouseover(function() {
//     var captionText = $(this).find('img').attr('alt');
//     $caption.text(captionText);
//     var overlayHeight = $(this).find('img').height(); // This fixes the problem of the overlay being the same height as the container which was a few pixels taller than the image because some weird anchor tag thing
//     $overlay.height(overlayHeight);
//     $(this).children('a').append($overlay);
//     $(this).children('a').append($caption);
//     $(this).children('a').append($icon);
//     // $(this).children('a').append($overlay).show('slow');  Can't seem to get overlay transition to work
//     // $(this).children('a').append($caption).show('slow');  in css or js
//     // $(this).children('a').append($icon).show('slow');
// })

