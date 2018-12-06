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
		  	responsive: [
			    {
			      breakpoint: 1300,
			      settings: {
			      	slidesToShow: 3,
			      	slidesToScroll: 1,
			        arrows: false
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			      	slidesToShow: 2,
			      	slidesToScroll: 1,
			      	arrows: false
			      }
			    },
			    {
			      breakpoint: 544,
			      settings: {
			      	slidesToShow: 1,
			      	slidesToScroll: 1,
			      	arrows: false
			      }
			    }
			]
	});

	})
})(jQuery);