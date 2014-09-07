
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
var $overlay = $('<div id="overlay"></div>');
var $caption = $("<p></p>");

$( ".item" )
  .mouseover(function() {
    var captionText = $(this).children("img").attr("alt");
    console.log(captionText)
  })

  .mouseout(function() {
    console.log('mouseout')
  });