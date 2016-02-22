
$(document).ready(function () {
    $('.image-popup-no-margins').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // Class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // Duration variable also in CSS
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    $('.simple-ajax-popup-align-top').magnificPopup({
        type: 'ajax',
        alignTop: true,
        overflowY: 'scroll' // allow vert scroll
    });

    $('.simple-ajax-popup').magnificPopup({
        type: 'ajax'
    });
    

    $("#on").click(function () {
        $("*").css("background-color", "rgba(255,0,0,.2)");
        $("* *").css("background-color", "rgba(0,255,0,.2)");
        $("* * *").css("background-color", "rgba(0,0,255,.2)");
        $("* * * *").css("background-color", "rgba(255,0,255,.2)");
        $("* * * * *").css("background-color", "rgba(0,255,255,.2)");
        $("* * * * * *").css("background-color", "rgba(255,255,0,.2)");

        return false;
        e.preventDefault();
    });

    $("#off").click(function () {
        $("*").css("background-color", "");
        $("* *").css("background-color", "");
        $("* * *").css("background-color", "");
        $("* * * *").css("background-color", "");
        $("* * * * *").css("background-color", "");
        $("* * * * * *").css("background-color", "");

        return false;
        e.preventDefault();

    });

    $(document).on('click', function () {
        $('div.voucher-text').css({ display: "" });
    });





});



