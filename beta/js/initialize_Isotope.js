

$('.container').isotope({
  itemSelector: '.item',
  layoutMode: 'masonry',
  columnWidth: 300,
  gutter: 10
});



$('.filter-one').click(function(){
	$('.container').isotope({ filter: '.item-one' })
})

$('.filter-all').click(function(){
	$('.container').isotope({ filter: '*' })
})