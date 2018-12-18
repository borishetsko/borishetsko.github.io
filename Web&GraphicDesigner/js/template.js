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

	// (function($){
	// $(document).ready(function(){
	// 	$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
	// 		event.preventDefault(); 
	// 		event.stopPropagation(); 
	// 		$(this).parent().siblings().removeClass('open');
	// 		$(this).parent().toggleClass('open');
	// 	});
	// });
	// })(jQuery);

	$("body").on("click", ".to-top a, .main-nav li a, .slider a", function() {
		var idtop = $($(this).attr("href")).offset().top;
		$('html,body').animate({scrollTop: idtop}, 1500);
		return false;
	});

	})
})(jQuery);