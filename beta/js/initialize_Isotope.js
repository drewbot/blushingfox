

$('.container').isotope({
  itemSelector: '.item',
  layoutMode: 'masonry',
  columnWidth: 300,
});



$('.filter-one').click(function(){
	$('.container').isotope({ filter: '.item-one' })
})

$('.filter-two').click(function(){
	$('.container').isotope({ filter: '.item-two' })
})

$('.filter-all').click(function(){
	$('.container').isotope({ filter: '*' })
})