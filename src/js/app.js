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

});
