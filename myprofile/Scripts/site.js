$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $('nav').addClass('fixed-header');
    }
    else {
        $('nav').removeClass('fixed-header');
    }
});

$(function() {
    $('.nav-item a').click(function () {

        localStorage.setItem('thisLink', $(this).parent().attr("id"));

        $('.nav-item a').siblings().removeClass('active_nav');
     
    });
});



   



