$(document).ready(function(){
	$('#fullpage').fullpage({
				anchors: ['firstPage'],
				sectionsColor: ['#4A6FB1', '#939FAA', '#323539'],
				fitToSection:false,
				autoScrolling: false,
				slidesNavigation:true
				//scrollOverflow: true

			});
	$( '#mobileNavIconCon' ).click(function(){
		$('.responsive-menu').slideToggle();
	})
	 

});
 