/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.2 (modified for fullpage.js ) (v 1.1)
 *
 */
(function(f){jQuery.fn.extend({slimScroll:function(g){var a=f.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},g);this.each(function(){function m(d){if(u){d=d||
window.event;var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);f(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&n(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function n(d,f,g){k=!1;var e=d,h=b.outerHeight()-c.outerHeight();f&&(e=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),e=Math.min(Math.max(e,0),h),e=0<d?Math.ceil(e):Math.floor(e),c.css({top:e+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
e=l*(b[0].scrollHeight-b.outerHeight());g&&(e=d,d=e/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),h),c.css({top:d+"px"}));b.scrollTop(e);b.trigger("slimscrolling",~~e);w();q()}function D(){window.addEventListener?(this.addEventListener("DOMMouseScroll",m,!1),this.addEventListener("mousewheel",m,!1)):document.attachEvent("onmousewheel",m)}function E(){window.removeEventListener?(this.removeEventListener("DOMMouseScroll",m),this.removeEventListener("mousewheel",m)):document.detachEvent("onmousewheel",
m)}function x(){v=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:v+"px"});var a=v==b.outerHeight()?"none":"block";c.css({display:a})}function w(){x();clearTimeout(B);l==~~l?(k=a.allowPageScroll,C!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;C=l;v>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&h.stop(!0,!0).fadeIn("fast"))}function q(){a.alwaysVisible||(B=setTimeout(function(){a.disableFadeOut&&u||y||z||(c.fadeOut("slow"),h.fadeOut("slow"))},
1E3))}var u,y,z,B,A,v,l,C,k=!1,b=f(this);if(b.parent().hasClass(a.wrapperClass)){var p=b.scrollTop(),c=b.parent().find("."+a.barClass),h=b.parent().find("."+a.railClass);x();if(f.isPlainObject(g)){if("height"in g&&"auto"==g.height){b.parent().css("height","auto");b.css("height","auto");var r=b.parent().parent().height();b.parent().css("height",r);b.css("height",r)}if("scrollTo"in g)p=parseInt(a.scrollTo);else if("scrollBy"in g)p+=parseInt(a.scrollBy);else if("destroy"in g){E();c.remove();h.remove();
b.unwrap();return}n(p,!1,!0)}}else{a.height="auto"==g.height?b.parent().height():g.height;p=f("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var h=f("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,
zIndex:90}),c=f("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),r="right"==a.position?{right:a.distance}:{left:a.distance};h.css(r);c.css(r);b.wrap(p);b.parent().append(c);b.parent().append(h);a.railDraggable&&c.bind("mousedown",function(a){var b=f(document);
z=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);n(0,c.position().top,!1)});b.bind("mouseup.slimscroll",function(a){z=!1;q();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});h.hover(function(){w()},function(){q()});c.hover(function(){y=!0},function(){y=!1});b.hover(function(){u=!0;w();q()},function(){u=!1;q()});b.bind("touchstart",function(a,
b){a.originalEvent.touches.length&&(A=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(n((A-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),A=b.originalEvent.touches[0].pageY)});x();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),n(0,!0)):"top"!==a.start&&(n(f(a.start).position().top,null,!0),a.alwaysVisible||c.hide());D()}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);;
/*! lazysizes - v1.1.4 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports?module.exports=c:"function"==typeof define&&define.amd&&define(c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=a.addEventListener,f=a.setTimeout,g=a.requestAnimationFrame||f,h=a.setImmediate||f,i=/^picture$/i,j=["load","error","lazyincluded","_lazyloaded"],k=function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");return a.className.match(c)&&c},l=function(a,b){k(a,b)||(a.className+=" "+b)},m=function(a,b){var c;(c=k(a,b))&&(a.className=a.className.replace(c," "))},n=function(a,b,c){var d=c?"addEventListener":"removeEventListener";c&&n(a,b),j.forEach(function(c){a[d](c,b)})},o=function(a,c,d,e,f){var g=b.createEvent("CustomEvent");return g.initCustomEvent(c,!e,!f,d||{}),a.dispatchEvent(g),g},p=function(b,d){var e;a.HTMLPictureElement||((e=a.picturefill||a.respimage||c.pf)?e({reevaluate:!0,elements:[b]}):d&&d.src&&(b.src=d.src))},q=function(a,b){return(getComputedStyle(a,null)||{})[b]},r=function(a,b,d){for(d=d||a.offsetWidth;d<c.minSize&&b&&!a._lazysizesWidth;)d=b.offsetWidth,b=b.parentNode;return d},s=function(b){var d,e=0,i=a.Date,j=function(){d=!1,e=i.now(),b()},k=function(){h(j)},l=function(){g(k)};return function(){if(!d){var a=c.throttle-(i.now()-e);d=!0,6>a&&(a=6),f(l,a)}}},t=function(){var h,j,r,t,v,w,x,y,z,A,B,C,D,E=/^img$/i,F=/^iframe$/i,G="onscroll"in a&&!/glebot/.test(navigator.userAgent),H=0,I=0,J=0,K=0,L=function(a){J--,a&&a.target&&n(a.target,L),(!a||0>J||!a.target)&&(J=0)},M=function(a,b){var c,d=a,e="hidden"!=q(a,"visibility");for(y-=b,B+=b,z-=b,A+=b;e&&(d=d.offsetParent);)e=(q(d,"opacity")||1)>0,e&&"visible"!=q(d,"overflow")&&(c=d.getBoundingClientRect(),e=A>c.left&&z<c.right&&B>c.top-1&&y<c.bottom+1);return e},N=function(){var a,b,d,e,f,g,i,k,l;if((v=c.loadMode)&&8>J&&(a=h.length)){for(b=0,K++,D>I&&1>J&&K>3&&v>2?(I=D,K=0):I=I!=C&&v>1&&K>2&&6>J?C:H;a>b;b++)if(h[b]&&!h[b]._lazyRace)if(G)if((k=h[b].getAttribute("data-expand"))&&(g=1*k)||(g=I),l!==g&&(w=innerWidth+g,x=innerHeight+g,i=-1*g,l=g),d=h[b].getBoundingClientRect(),(B=d.bottom)>=i&&(y=d.top)<=x&&(A=d.right)>=i&&(z=d.left)<=w&&(B||A||z||y)&&(r&&3>J&&!k&&(3>v||4>K)||M(h[b],g))){if(S(h[b],d.width),f=!0,J>9)break}else!f&&r&&!e&&3>J&&4>K&&v>2&&(j[0]||c.preloadAfterLoad)&&(j[0]||!k&&(B||A||z||y||"auto"!=h[b].getAttribute(c.sizesAttr)))&&(e=j[0]||h[b]);else S(h[b]);e&&!f&&S(e)}},O=s(N),P=function(a){l(a.target,c.loadedClass),m(a.target,c.loadingClass),n(a.target,P)},Q=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.setAttribute("src",b)}},R=function(){var a,b=[],c=function(){for(;b.length;)b.shift()();a=!1};return function(d){b.push(d),a||(a=!0,g(c))}}(),S=function(a,b){var d,e,g,h,j,q,s,v,w,x,y,z=E.test(a.nodeName),A=z&&(a.getAttribute(c.sizesAttr)||a.getAttribute("sizes")),B="auto"==A;(!B&&r||!z||!a.src&&!a.srcset||a.complete||k(a,c.errorClass))&&(a._lazyRace=!0,J++,R(function(){if(a._lazyRace&&delete a._lazyRace,m(a,c.lazyClass),!(w=o(a,"lazybeforeunveil")).defaultPrevented){if(A&&(B?(u.updateElem(a,!0,b),l(a,c.autosizesClass)):a.setAttribute("sizes",A)),q=a.getAttribute(c.srcsetAttr),j=a.getAttribute(c.srcAttr),z&&(s=a.parentNode,v=s&&i.test(s.nodeName||"")),x=w.detail.firesLoad||"src"in a&&(q||j||v),w={target:a},x&&(n(a,L,!0),clearTimeout(t),t=f(L,2500),l(a,c.loadingClass),n(a,P,!0)),v)for(d=s.getElementsByTagName("source"),e=0,g=d.length;g>e;e++)(y=c.customMedia[d[e].getAttribute("data-media")||d[e].getAttribute("media")])&&d[e].setAttribute("media",y),h=d[e].getAttribute(c.srcsetAttr),h&&d[e].setAttribute("srcset",h);q?a.setAttribute("srcset",q):j&&(F.test(a.nodeName)?Q(a,j):a.setAttribute("src",j)),(q||v)&&p(a,{src:j})}(!x||a.complete)&&(x?L(w):J--,P(w))}))},T=function(){var a,b=function(){c.loadMode=3,O()};r=!0,K+=8,c.loadMode=3,e("scroll",function(){3==c.loadMode&&(c.loadMode=2),clearTimeout(a),a=f(b,99)},!0)};return{_:function(){h=b.getElementsByClassName(c.lazyClass),j=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),C=c.expand,D=Math.round(C*c.expFactor),e("scroll",O,!0),e("resize",O,!0),a.MutationObserver?new MutationObserver(O).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d.addEventListener("DOMNodeInserted",O,!0),d.addEventListener("DOMAttrModified",O,!0),setInterval(O,999)),e("hashchange",O,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b.addEventListener(a,O,!0)}),/d$|^c/.test(b.readyState)?T():(e("load",T),b.addEventListener("DOMContentLoaded",O)),O()},checkElems:O,unveil:S}}(),u=function(){var a,d=function(a,b,c){var d,e,f,g,h=a.parentNode;if(h&&(c=r(a,h,c),g=o(a,"lazybeforesizes",{width:c,dataAttr:!!b}),!g.defaultPrevented&&(c=g.detail.width,c&&c!==a._lazysizesWidth))){if(a._lazysizesWidth=c,c+="px",a.setAttribute("sizes",c),i.test(h.nodeName||""))for(d=h.getElementsByTagName("source"),e=0,f=d.length;f>e;e++)d[e].setAttribute("sizes",c);g.detail.dataAttr||p(a,g.detail)}},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)d(a[b])},g=s(f);return{_:function(){a=b.getElementsByClassName(c.autosizesClass),e("resize",g)},checkElems:g,updateElem:d}}(),v=function(){v.i||(v.i=!0,u._(),t._())};return function(){var b,d={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:2,expand:359,loadMode:2,throttle:125};c=a.lazySizesConfig||a.lazysizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,f(function(){c.init&&v()})}(),{cfg:c,autoSizer:u,loader:t,init:v,uP:p,aC:l,rC:m,hC:k,fire:o,gW:r}}});;
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