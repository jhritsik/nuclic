/* ------ ISP NAMESPACE ------ */
var ISP = {};

/* ------ BEGIN CODE FOR AD ------ */
ISP.adPlacement = function() {
    if (window.matchMedia("(min-width: 730px)").matches) {
        $('.bannerAdContainer').css('display', 'block');
        $('.banner-ad').addClass('adunit');
        $('#mobileOnlyBoxAd').removeClass('adunit');
        $('.addDivider').removeClass('storyDivider');
    } else {
        $('.bannerAdContainer').css('display', 'none');
        $('.banner-ad').removeClass('adunit');
        $('#mobileOnlyBoxAd').addClass('adunit');
        $('.addDivider').addClass('storyDivider');
    }
    $(window).resize(function() {
        if (window.matchMedia("(min-width: 730px)").matches) {
            $('.bannerAd').css('display', 'block');
        } else if (window.matchMedia("(max-width: 729px)").matches) {
            $('.bannerAd').css('display', 'none');
        }
    });
}

/* ------ BEGIN CODE FOR STICKY NAV ------ */
ISP.stickyNav = function() {
    var move = function() {
        var scrollTop = $(window).scrollTop();
        var navOffset = $("#navOffset")
        var offsetTop = navOffset.offset().top;
        var socialBar = $("#scroller");
        var socialHeight = socialBar.outerHeight();

        if (scrollTop > offsetTop) {
            navOffset.css({
                height: socialHeight
            })
            socialBar.css({
                position: "fixed",
                top: "0px"
            });
        } else {
            if (scrollTop <= offsetTop) {
                navOffset.css({
                    height: "auto"
                })

                socialBar.css({
                    position: "relative",
                    top: ""
                });
            }
        }
    };
    $(window).scroll(move);
    move();
}

/* ------ BEGIN CODE FOR COMMENT ICON  ------ */
ISP.setNavCommentIconClick = function() {
    $("#commentIcon").click(function() {
        $('html, body').animate({
            scrollTop: $("#JS_livefyre").offset().top
        }, 800);
    });
}

/* ------ BEGIN CODE FOR SCROLL ICON  ------ */
ISP.setNavScrollArrowClick = function() {
    $("#scrollArrow").click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
    });
}


$(document).ready(function(){
	ISP.adPlacement();
	ISP.stickyNav();
	ISP.setNavCommentIconClick();
	ISP.setNavScrollArrowClick();
});






