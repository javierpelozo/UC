jQuery(function($) {
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

    $('#slides').superslides({
        animation: 'fade',
        animation_easing: 'linear',
        pagination: 'true'
    });

    $('[href="#nuevasNoticias"]').on('shown.bs.tab', function(e) {
        $('.single_notice_pane').resize();
    });

    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();

    $('.navCarreras').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 3,
        slide: 'li',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    window.addEventListener('DOMContentLoaded', function() {
        new QueryLoader2(document.querySelector("body"), {
            barColor: "#efefef",
            backgroundColor: "#223359",
            percentage: true,
            barHeight: 4,
            minimumTime: 200,
            fadeOutTime: 1000
        });
    });

    $('.eventosDeslizador').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $('#fotosSlider a').tosrus({
        buttons: 'inline',
        pagination: {
            add: true,
            type: 'thumbnails'
        },
        caption: {
            add: true
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.volverArriba').fadeIn();
        } else {
            $('.volverArriba').fadeOut();
        }
    });

    $('.volverArriba').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});