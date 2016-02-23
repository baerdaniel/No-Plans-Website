$(window).load(function() {
  $('.loader').fadeOut(400);
});

$(document).ready(function(){
	var ww = $(window).width();
	new LazyLoad();
/*
	if  (ww > 700) {
		$(function() {
	    	$('.wide-only').imageloader();
	    	$('.both-only').imageloader();
	  	});
	} */

	if  (ww <= 700) {
		/* $(function() {
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

$(window).resize(function(){
/*	var ww = $(window).width();
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
	} */
});


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
	var point2T = $('.project-2').offset().top - half_wh;
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
/*
  //detects direction of scroll
  	if (st > lastScrollTop){
	    // downscroll code
	    if (st > point1T && st < point2T && !scrolled1) {
	      $('.gallery-cell').removeClass('cruising');
	      $('.project-1 .gallery-cell').addClass('cruising');
	      scrolled1 = true;
	    }
	    if (st > point2T && st < point3T && !scrolled2 ) {
	      $('.gallery-cell').removeClass('cruising');
	      $('.project-2 .gallery-cell').addClass('cruising');
	      scrolled2 = true;
	    }
	    if (st > point3T && st < point4T && !scrolled3 ) {
	      $('.gallery-cell').removeClass('cruising');
	      $('.project-3 .gallery-cell').addClass('cruising');
	      scrolled3 = true;
	    }
	    if (st > point4T && !scrolled4 ) {
	      $('.gallery-cell').removeClass('cruising');
	      $('.project-4 .gallery-cell').addClass('cruising');
	      scrolled4 = true;
	    }	  
	} 
	*/

});

// FLICKITY -------- 

// Define function variable

function callFlickity() {
	var ww = $(window).width();
    if (ww > 700) {
		var $gallery = $('.project-gallery').flickity({
	    	cellSelector: '.project-gallery .gallery-cell',
			cellAlign: 'center',
		  	wrapAround: true,
		  	contain: true,
		  	pageDots: false,
		  	accessibility: false,
		  	freeScroll: true,
		  	resize: true,
		  	setGallerySize: false,
		  	// watchCSS: true,
		  	// autoPlay: 2000,
		  	lazyLoad: false,
			arrowShape: {
		      x0: 20,
		      x1: 70, y1: 20,
		      x2: 70, y2: 20,
		      x3: 70
		    }
		});
	  function onLoadeddata( event ) {
	    var cell = $gallery.flickity( 'getParentCell', event.target );
	    $gallery.flickity( 'cellSizeChange', cell && cell.element );
	  }
	  
	  $gallery.find('video').each( function( i, video ) {
	    video.play();
	    $( video ).on( 'loadeddata', onLoadeddata );
	  });
 	}
    if (ww <= 700) { 
    	// alert('Small Screens')
    	var $gallery = $('.project-gallery').flickity({
	    	cellSelector: '.project-gallery .gallery-cell',
			cellAlign: 'center',
		  	wrapAround: false,
		  	draggable: false,
		  	contain: true,
		  	pageDots: false,
		  	accessibility: false,
		  	freeScroll: true,
		  	resize: true,
		  	setGallerySize: true,
		  	lazyLoad: false
		});
		function onLoadeddata( event ) {
		    var cell = $gallery.flickity( 'getParentCell', event.target );
		    $gallery.flickity( 'cellSizeChange', cell && cell.element );
		}
		  
		$gallery.find('video').each( function( i, video ) {
		    video.play();
		    $( video ).on( 'loadeddata', onLoadeddata );
		});
    }

}

// Call function variable
$(window).load(callFlickity);




