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

$(function () {

	//stop carousels auto scroll
	$('#carousel-screenshots, #carousel-testimonials, #carousel-blog').each(function(){
		$(this).carousel({
			interval: false
		});
	});

	//setup swipe carousel pages on touch
	$(".js-carousel-inner").swipe( {
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
	var $jsLink = $('.js-link'),
		topOffset = 0;

	function setupOffset() {
		var $winWidth = $(window).width();

		if($winWidth > 480) {

			//80 is a height of navbar
			topOffset = 80;
		}else{

			//70 is a height of navbar
			topOffset = 70;
		}
	}

	setupOffset();
	$(window).resize(function(){
		setupOffset();
	});

	$jsLink.click(function() {
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

	$jsLink.on('click', function(){
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

	//section features 1
	var $features = $('.features');
	$features.css('opacity', 0);

	$features.waypoint(function() {
		$features.addClass('animated fadeInUp');
	}, { offset: '80%' });


	//section features2
	var $jsInfoItem1 = $('.js-info-item-1'),
		$jsInfoItem2 = $('.js-info-item-2'),
		$jsInfoItem3 = $('.js-info-item-3');

	$('.info-list__item').css('opacity', 0);
	$jsInfoItem1.waypoint(function() {
		$jsInfoItem1.addClass('animated fadeInLeft');
	}, { offset: '80%' });

	$jsInfoItem2.waypoint(function() {
		$jsInfoItem2.addClass('animated fadeInLeft');
	}, { offset: '85%' });

	$jsInfoItem3.waypoint(function() {
		$jsInfoItem3.addClass('animated fadeInLeft');
	}, { offset: '90%' });


	//section support
	var $jsWorker1 = $('.js-worker-1'),
		$jsWorker2 = $('.js-worker-2'),
		$jsWorker3 = $('.js-worker-3'),
		$jsWorker4 = $('.js-worker-4');

	$('.worker').css('opacity', 0);
	$jsWorker1.waypoint(function() {
		$jsWorker1.addClass('animated fadeInLeft');
	}, { offset: '70%' });

	$jsWorker2.waypoint(function() {
		$jsWorker2.addClass('animated fadeInLeft');
	}, { offset: '90%' });

	$jsWorker3.waypoint(function() {
		$jsWorker3.addClass('animated fadeInRight');
	}, { offset: '60%' });

	$jsWorker4.waypoint(function() {
		$jsWorker4.addClass('animated fadeInRight');
	}, { offset: '80%' });


	// section footer
	var $formSubmit = $('.js-form-submit');
	$formSubmit.css('opacity', 0);
	$formSubmit.waypoint(function() {
		$formSubmit.addClass('animated fadeInUp');
	}, { offset: '100%' });

	//parallax
	$('.section_screenshots').parallax({imageSrc: 'img/static/bg-photo-2.jpg'});
});
