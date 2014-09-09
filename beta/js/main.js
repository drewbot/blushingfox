
// Click to show and hide nav
$('.menu').click(function(){
	$('.nav').toggleClass('show-nav');
	$('.menu').toggleClass('menu-open');
})

// *--- Click outside of nav to hide when nav is visible --*
// $(document).on('click', function(event) {
//   if (!$(event.target).closest('#menucontainer').length) {
//     // Hide the menus.
//   }
// });

$(document).click(function(event){
	if (!$(event.target).closest('.nav').length) {

	}
})

// Mouseover events
var $caption = $('<p class="overlay-caption"></p>');
var $overlay = $('<div class="item-overlay">')

$('.item').mouseover(function() {
    var captionText = $(this).find('img').attr('alt');
    console.log(captionText)
    $caption.text(captionText);
    $(this).append($overlay);
    $(this).append($caption);
})

