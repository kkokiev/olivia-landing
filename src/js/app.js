//ie fix
if(!(window.console && console.log)) {
	console = {
		log: function(){},
		debug: function(){},
		info: function(){},
		warn: function(){},
		error: function(){}
	};
}

$(document).ready(function() {

	//stop carousels auto scroll
	$('#carousel-screenshots, #carousel-testimonials, #carousel-blog').each(function(){
		$(this).carousel({
			interval: false
		});
	});

	//setup swipe carousel pages on touch
	$(".carousel-inner").swipe( {
		//Generic swipe handler for all directions
		swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).parent().carousel('next');
		},
		swipeRight: function() {
			$(this).parent().carousel('prev');
		},
		//Default is 75px, set to 0 so any distance triggers swipe
		threshold:0
	});

	//Smooth Scrolling
	var topOffset = 80
	$('.js-link').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - topOffset
				}, 1000);
				return false;
			}
		}
	});

	$('.js-link').on('click', function(){
		setTimeout (function(){
			 $('#navbar').collapse('hide');
		}, 1000);
	});

	//add class too navbar on scroll
	function addFixedClass(){
		var nav = $('#navbar-container');
		yPos = window.pageYOffset;
		nav.removeClass("navbar-fixed-top");
		if(yPos > 120){
			nav.addClass("navbar-fixed-top");
		}
	}
	window.addEventListener("scroll", addFixedClass);


	//setup some animations on page
	$('.features').css('opacity', 0);

	$('.features').waypoint(function() {
		$('.features').addClass('animated fadeInUp');
	}, { offset: '80%' });


	$('.info-list__item').css('opacity', 0);
	$('.info-list__item:first-child').waypoint(function() {
		$('.info-list__item:first-child').addClass('animated fadeInLeft');
	}, { offset: '80%' });

	$('.info-list__item:nth-child(2)').waypoint(function() {
		$('.info-list__item:nth-child(2)').addClass('animated fadeInLeft');
	}, { offset: '85%' });

	$('.info-list__item:last-child').waypoint(function() {
		$('.info-list__item:last-child').addClass('animated fadeInLeft');
	}, { offset: '90%' });


	$('.worker').css('opacity', 0);
	$('.js-worker-1').waypoint(function() {
		$('.js-worker-1').addClass('animated fadeInLeft');
	}, { offset: '70%' });

	$('.js-worker-2').waypoint(function() {
		$('.js-worker-2').addClass('animated fadeInLeft');
	}, { offset: '90%' });

	$('.js-worker-3').waypoint(function() {
		$('.js-worker-3').addClass('animated fadeInRight');
	}, { offset: '60%' });

	$('.js-worker-4').waypoint(function() {
		$('.js-worker-4').addClass('animated fadeInRight');
	}, { offset: '80%' });


	$('.form__submit').css('opacity', 0);
	$('.form__submit').waypoint(function() {
		$('.form__submit').addClass('animated fadeInUp');
	}, { offset: '100%' });
});
