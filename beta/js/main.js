
// Click to show and hide nav
$('.menu').click(function(){
	$('.nav').toggleClass('show-nav');
	$('.menu').toggleClass('menu-open');
})

// *--- Click outside of nav to hide when nav is visible --*
$(document).on('click', function() {
  	if (!$(this).hasClass('nav')) {
	  	if ($('.nav').hasClass('show-nav')) {
			console.log('true that')
  		} else {
  			console.log('woop woop')
  		}
	}
});

// Mouseover events
var $overlay = $('<div class="item-overlay"></div>');
var $caption = $('<p class="overlay-caption"></p>');
var $icon = $('<p class="overlay-icon">z</p>');

$('.item').mouseover(function() {
    var captionText = $(this).find('img').attr('alt');
    $caption.text(captionText);
    var overlayHeight = $(this).find('img').height(); // This fixes the problem of the overlay being the same height as the container which was a few pixels taller than the image because some weird anchor tag thing
    $overlay.height(overlayHeight);
    $(this).children('a').append($overlay);
    $(this).children('a').append($caption);
    $(this).children('a').append($icon);
})

