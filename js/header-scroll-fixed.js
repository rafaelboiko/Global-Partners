$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 642) {
        $(".fix-row").addClass("fixed");
    } else {
        $(".fix-row").removeClass("fixed");
    }
});