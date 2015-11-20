$(document).ready(function(){
	$(function(){
	    //$('#slideShowCont img').show();
	});
	$( '.slideShow2, .patternSlideShow' ).cycle({});
 
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	if ( windowWidth <= 640 ) {
    	$('#mainGallery1').attr('src','./assets/img/mainGallery/Lobby2_640.jpg');
    	$('#mainGallery2').attr('src','./assets/img/mainGallery/Hospital_640.jpg');
    	$('#mainGallery3').attr('src','./assets/img/mainGallery/Office_640.jpg');
    	$('#mainGallery4').attr('src','./assets/img/mainGallery/Retail_640.jpg');

    	$('#cycAmerica .singleImgCont .lazyload').attr('data-src','./assets/img/cycAmerica/cycAmerica_640.jpg');

    	$('#inspirationsGallery1').attr('src','./assets/img/inspiration/inspiration_1b_640.jpg');
    	$('#inspirationsGallery2').attr('src','./assets/img/inspiration/inspiration_2b_640.jpg');
    	$('#inspirationsGallery3').attr('src','./assets/img/inspiration/inspiration_3b_640.jpg');
    	$('#inspirationsGallery4').attr('src','./assets/img/inspiration/inspiration_4b_640.jpg');

  	} else {
	    $('#mainGallery1').attr('src','./assets/img/mainGallery/Lobby2_1536.jpg');
	    $('#mainGallery2').attr('src','./assets/img/mainGallery/Hospital_1536.jpg');
	    $('#mainGallery3').attr('src','./assets/img/mainGallery/Office_1536.jpg');
	    $('#mainGallery4').attr('src','./assets/img/mainGallery/Retail_1536.jpg');

	    $('#cycAmerica .singleImgCont .lazyload').attr('data-src','./assets/img/cycAmerica/cycAmerica_1536.jpg');

	    $('#inspirationsGallery1').attr('src','./assets/img/inspiration/inspiration_1b.jpg');
    	$('#inspirationsGallery2').attr('src','./assets/img/inspiration/inspiration_2b.jpg');
    	$('#inspirationsGallery3').attr('src','./assets/img/inspiration/inspiration_3b.jpg');
    	$('#inspirationsGallery4').attr('src','./assets/img/inspiration/inspiration_4b.jpg');
	}

	//var topSmallNavHeight = $('#topSmallNav').height();
	var topSmallNavHeight = $('#smallNavigation').height();
	var topLargeNavHeight = $('#largeNavigation .navigation').height();
	var mainNavHeight = $('.mainNavHeight').height();
	if ($('#smallNavigation').is(':visible')){
		$('#app').css('margin-top', topSmallNavHeight);
		//$('#mainContainer').css('margin-top', '60px');
	} else {
		$('#app').css('margin-top', topLargeNavHeight);
		//$('#mainContainer').css('margin-top', '60px');
	}

	
	var adjustedWindowHeight = windowHeight - topSmallNavHeight;
	var smallNav = $('#smallNavigation .navigation');
	$('#smallNavigation .navigation').css('height',adjustedWindowHeight);
	$('.hamburger').click(function(){
		if ($(smallNav).is(':hidden')){
			$('#smallNavigation .navigation').slideDown( 'slow', function() {
			    //$('#app').hide();
			});
		} else {
			//$('#app').show();
			$('#smallNavigation .navigation').slideUp('slow');
		}
	});	

	// COLLECTIONS SECTION -- HIDE SHOW ARROW AND CONTAINER

	//$('#asmartContainer, #achoiceContainer, #auroraContainer, #bestrongContainer, #ecobestContainer')
	$('#achoiceContainer, #auroraContainer, #bestrongContainer, #ecobestContainer').css('display','none');
	//$('.asmart .downArrow, .achoice .downArrow, .aurora .downArrow, .bestrong .downArrow, .ecobest .downArrow')
	$('.achoice .downArrow, .aurora .downArrow, .bestrong .downArrow, .ecobest .downArrow').css('display','none');

	$('.mainRow .selectionBox').click(function(){
		$('.selectionBox').children('.downArrow').hide();
		$(this).children('.downArrow').show();
		var id = $(this).attr('id');
		var newId = '#' + id +'Container';
		$('.selectionBoxContainer').hide();
		$(newId).show();
	});
	if (windowWidth < 650){
		$('#smallNavigation .navigation').click(function(){
			$('#smallNavigation .navigation').hide();
		});
	};

		$('.navigation .page1').click(function(){
			//$("html, body").animate({scrollTop: $('#slideShowCont').offset().top + (-60) }, 1000);
			$("html, body").animate({scrollTop: $('#slideShowCont').offset().top + (-60) }, 1000);
		});
		$('.navigation .page2').click(function(){
			//$("html, body").animate({scrollTop: $('#inspirations').offset().top + (-60) }, 1000);
			$("html, body").animate({scrollTop: $('#features').offset().top + (-60) }, 1000);
		});
		$('.navigation .page3').click(function(){
			//$("html, body").animate({scrollTop: $('#collections').offset().top + (-60) }, 1000);
			$("html, body").animate({scrollTop: $('#inspirations').offset().top + (-20) }, 1000);
		});
		$('.navigation .page4').click(function(){
			//$("html, body").animate({scrollTop: $('#cycAmerica').offset().top + (-60) }, 1000);
			$("html, body").animate({scrollTop: $('#collections').offset().top + (-20) }, 1000);
		});
		$('.navigation .page5').click(function(){
			//$("html, body").animate({scrollTop: $('#cycAmerica').offset().top + (-60) }, 1000);
			$("html, body").animate({scrollTop: $('#cycAmerica').offset().top + (-20) }, 1000);
		});


});
	


/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20141007 */
!function(a){"use strict";a.event.special.swipe=a.event.special.swipe||{scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var b=a(this);b.bind("touchstart",function(c){function d(b){if(g){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;e={time:(new Date).getTime(),coords:[c.pageX,c.pageY]},Math.abs(g.coords[0]-e.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault()}}var e,f=c.originalEvent.touches?c.originalEvent.touches[0]:c,g={time:(new Date).getTime(),coords:[f.pageX,f.pageY],origin:a(c.target)};b.bind("touchmove",d).one("touchend",function(){b.unbind("touchmove",d),g&&e&&e.time-g.time<a.event.special.swipe.durationThreshold&&Math.abs(g.coords[0]-e.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(g.coords[1]-e.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&g.origin.trigger("swipe").trigger(g.coords[0]>e.coords[0]?"swipeleft":"swiperight"),g=e=void 0})})}},a.event.special.swipeleft=a.event.special.swipeleft||{setup:function(){a(this).bind("swipe",a.noop)}},a.event.special.swiperight=a.event.special.swiperight||a.event.special.swipeleft}(jQuery);