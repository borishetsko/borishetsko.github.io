(function($)
{
	$(document).ready(function()
	{
		$('.slows').slick({
			autoplay: true,
  			autoplaySpeed: 2500,
			arrows: false,
			dots: true,
		  	speed: 3000,
		  	slidesToShow: 1,
		  	slidesToScroll: 1
	});
		
	$("body").on("click", ".to-top a, .main-nav li a, .slider a", function() {
		var idtop = $($(this).attr("href")).offset().top;
		$('html,body').animate({scrollTop: idtop}, 1500);
		return false;
	});

	var menu = $('#menu').offset().top;
	$(window).scroll(function(){
		if($(window).scrollTop() >= menu) {
			$('.to-top').addClass('vis');
		} else {
			$('.to-top').removeClass('vis');
		}
	});

	})
})(jQuery);