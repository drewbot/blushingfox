
// Click menu to show and hide nav
$('.menu').click(function(){
	$('.nav').addClass('show-nav');
	$('.menu').addClass('menu-open');
	$('.menu-x').addClass('menu-x-open');
})

$('.menu-x').click(function(){
	$('.nav').removeClass('show-nav');
	$('.menu').removeClass('menu-open');
	$('.menu-x').removeClass('menu-x-open');
})

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

