$(document).ready(function(){
	$("#slider ul").jcarousel({
		scroll: 1,
		wrap: 'both',
		initCallback: mycarousel_initCallback,
		itemVisibleInCallback: mycarousel_itemVisibleInCallback,
		buttonNextHTML: null,
		buttonPrevHTML: null
    });
});
function mycarousel_initCallback(carousel) {
	$(".slider-controls a").click(function(){
    	var x = parseInt($(this).text());
    	carousel.scroll(x);
    	return false;
    });
};
function mycarousel_itemVisibleInCallback(carousel, li, pos, state) {
	$(".slider-controls a").removeClass('active');
	$(".slider-controls a").eq(pos-1).addClass('active');
};
