(function($)
{
	$(document).ready(function()
	{
		$('.project-slider').slick({
			autoplay: true,
  			autoplaySpeed: 2500,
			arrows: true,
			dots: false,
		  	speed: 1500,
		  	slidesToShow: 4,
		  	slidesToScroll: 1,
	});

	})
})(jQuery);