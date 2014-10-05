// Isotope controls
// Docs: http://isotope.metafizzy.co/

$(document).ready(function() {
	// Initialize Isotope and set grid container by calling class
	$('.dynamic-gallery').isotope({
		// Set items to be placed in grid by calling class
		itemSelector: '.item',
		// Set layout mode to masonry ("pinterest style"): see docs http://isotope.metafizzy.co/layout-modes.html
		layoutMode: 'masonry',
		// Set column width
		// masonry: {  // Keeping this as reference to consider percentage based image width
		//   	columnWidth: 300,
		//   	gutter: 10
		// }
	});
});

// Filters
// Call button by class for click action to be applied to
// Filter within a specified container by specified classname
$('.filter-one').click(function(){
	$('.dynamic-gallery').isotope({ filter: '.item-one' })
})

$('.filter-two').click(function(){
	$('.dynamic-gallery').isotope({ filter: '.item-two' })
})

$('.filter-all').click(function(){
	$('.dynamic-gallery').isotope({ filter: '*' })
})
