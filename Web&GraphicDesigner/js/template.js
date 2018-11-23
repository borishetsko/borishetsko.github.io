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
		  	slidesToScroll: 1,
		});
		// $("body").on("click", ".menu li a", function() {
		// 	var idtop = $($(this).attr("href")).offset().top;
		// 	$('html,body').animate({scrollTop: idtop}, 900);
		// 	return false;
		// });
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

	$(".menu-box").on("click",".main-nav li a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 2000);
	});

	})
})(jQuery);