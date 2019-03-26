$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 565) {
        $(".fix-row").addClass("fixed");
    } else {
        $(".fix-row").removeClass("fixed");
    }
});