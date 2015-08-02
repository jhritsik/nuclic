$(document).ready(function(){
	/*$('#fullpage').fullpage({
				fitToSection:false,
				autoScrolling: false,
				slidesNavigation:true
				//scrollOverflow: true

			});*/
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	//var topSmallNavHeight = $('#topSmallNav').height();
	var topSmallNavHeight = $('#smallNavigation').height();
	var topLargeNavHeight = $('#largeNavigation .navigation').height();
	var mainNavHeight = $('.mainNavHeight').height();
	if ($('#smallNavigation').is(':visible')){
		$('#app').css('margin-top', topSmallNavHeight)
	} else {
		$('#app').css('margin-top', topLargeNavHeight)
	}
	var adjustedWindowHeight = windowHeight - topSmallNavHeight;
	var smallNav = $('#smallNavigation .navigation');
	$('#smallNavigation .navigation').css('height',adjustedWindowHeight);
	$('.hamburger').click(function(){
		if ($(smallNav).is(':hidden')){
			$('#smallNavigation .navigation').slideDown( 'slow', function() {
			    $('#app').hide();
			});
		} else {
			$('#app').show();
			$('#smallNavigation .navigation').slideUp('slow');
		}
		
		
		
	});
});

/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20141007 */
!function(a){"use strict";a.event.special.swipe=a.event.special.swipe||{scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var b=a(this);b.bind("touchstart",function(c){function d(b){if(g){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;e={time:(new Date).getTime(),coords:[c.pageX,c.pageY]},Math.abs(g.coords[0]-e.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault()}}var e,f=c.originalEvent.touches?c.originalEvent.touches[0]:c,g={time:(new Date).getTime(),coords:[f.pageX,f.pageY],origin:a(c.target)};b.bind("touchmove",d).one("touchend",function(){b.unbind("touchmove",d),g&&e&&e.time-g.time<a.event.special.swipe.durationThreshold&&Math.abs(g.coords[0]-e.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(g.coords[1]-e.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&g.origin.trigger("swipe").trigger(g.coords[0]>e.coords[0]?"swipeleft":"swiperight"),g=e=void 0})})}},a.event.special.swipeleft=a.event.special.swipeleft||{setup:function(){a(this).bind("swipe",a.noop)}},a.event.special.swiperight=a.event.special.swiperight||a.event.special.swipeleft}(jQuery);