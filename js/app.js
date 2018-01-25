$(function(){
	$('.carousel').slick({
		arrows: false,
		dots: false,
		autoplay: true,
		infinite: true,
		speed: 300,
		slidesToShow: 8,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 2,
				}
			}
			
		]
	});
	
	$('.slider').slick({
		dots: false,
		prevArrow: '<div class="slick-prev"><i class="material-icons">keyboard_arrow_left</i></div>',
		nextArrow: '<div class="slick-next"><i class="material-icons">keyboard_arrow_right</i></div>'
	});
	
	
	// Accordeon
	
	$('.accordeon > li').on('click', function(){
		if(!$(this).hasClass('active')){
			$('.accordeon > li').removeClass('active').children('ul').slideUp();
			$(this).addClass('active').children('ul').slideDown();
		}
	});
	
	
	// Nav
	
	$('.toggler i').on('click', function(){
		$('.mobile-nav').animate({
			left: 0
		});
		$('body').animate({
			left: '300'
		});
	});
	
	$('.nav-close').on('click', function(){
		$('.mobile-nav').animate({
			left: '-300'
		});
		$('body').animate({
			left: 0
		});
	});
});