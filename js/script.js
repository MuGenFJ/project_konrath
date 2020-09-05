// TOGGLE NAVBAR //
function Sidebar(ref) {
	ref.classList.toggle('active');
	document.getElementById('sidebar').classList.toggle('active');
	document.getElementById('overlay').classList.toggle('active');
}

// FILTER SECTION //
$(document).ready(function () {

	var $grid = $('.grid-container').isotope({
		itemSelector: '.grid-item'
	});

	// filter items on button click
	$('ul.filter-menu').on('click', 'li', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
		return false;
	});

	$("ul.filter-menu li").click(function () {
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});

});


// CAROUSEL-SLIDER //
$('.slider-area').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3.2,
	slidesToScroll: 1,
	prevArrow: '<span class="arrow-prev"><i class="fas fa-chevron-left"></i></span>',
	nextArrow: '<span class="arrow-next"><i class="fas fa-chevron-right"></i></span>',
	responsive: [
		{
			breakpoint: 1758,
			settings: {
				slidesToShow: 3.2,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 1250,
			settings: {
				slidesToShow: 2.2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 760,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
			}
		}
	]
});