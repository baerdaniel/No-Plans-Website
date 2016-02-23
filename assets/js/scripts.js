 $(window).load(function() {
 	$('.loader').fadeOut(400);
}); 

$(document).ready(function(){
	var ww = $(window).width();

	$(function() {
	    $('img').lazyload();
	});

/*	if  (ww > 700) {
		$(function() {
	    	$('.wide-only').imageloader();
	    	$('.both-only').imageloader();
	  	});
	} */

	if  (ww <= 700) {
	/*	$(function() {
	    	$('.thin-only').imageloader();
	    	$('.both-only').imageloader();
	  	}); */

	  	$('.gallery-toggle').click(function(){
			$(this).next('.project-gallery').slideToggle(350);
			$(this).slideToggle(450);
		});
	}

	$('.about-us').click(function(){
		$('.about').css('position', 'fixed');
		$('.about').toggleClass('slide');
		$('.about-us').toggleClass('about-close');
	});
});

/*
$(window).resize(function(){
	var ww = $(window).width();
	if  (ww > 700) {
		$(function() {
	    	$('.wide-only').imageloader();
	    	$('.both-only').imageloader();
	  	});
	}

	if  (ww <= 700) {
		$(function() {
	    	$('.thin-only').imageloader();
	    	$('.both-only').imageloader();
	  	});
	}
});
*/

$(window).scroll(function () { 

	var wh = $(window).height() * 0.8;
	var half_wh = $(window).height() * 0.5;
	var scrollBottom = $('.page-footer').offset().top;
	var st = $(this).scrollTop();
	var lastScrollTop = 0;
	var scrolled1 = false;
	var scrolled2 = false;
	var scrolled3 = false;
	var scrolled4 = false;
	var point1T = $('.project-1').offset().top - half_wh;
	/*var point2T = $('.project-2').offset().top - half_wh; */
	var point3T = $('.project-3').offset().top - half_wh;
	var point4T = $('.project-4').offset().top - half_wh;

	if ($(window).scrollTop() > scrollBottom - wh) {
		$('.about-us').fadeOut(200);
		$('.about').addClass('slide-footer');
		$('.about').css('position', 'relative');
	}
	else {
		$('.about-us').fadeIn(200);
		$('.about').removeClass('slide-footer');
	}

});

	




