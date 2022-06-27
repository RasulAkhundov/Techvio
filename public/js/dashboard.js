$(document).ready(function(){
    //nav bar fixed
    $(window).scroll(function() {
        //Scroll Results
        let scrollLength = window.scrollY;
        let screenWidth = window.screenX;
        if(scrollLength > 84) {
            $("body").css('padding-top', '84px');
            $("#header-nav-bar").addClass('nav-bar-fixed');
            $("#header-nav-bar ul li a, #header-nav-bar ul li i").css('color', '#505050');
            $("#nav-bar-img").attr('src', './public/sources/logo-black.png');
        } else {
            $("body").css('padding-top', '0');
            $("#header-nav-bar").removeClass('nav-bar-fixed');
            $("#header-nav-bar ul li a, #header-nav-bar ul li i").css('color', 'white');
            $("#nav-bar-img").attr('src', './public/sources/logo.png');
        }
        if(screenWidth < 991 && scrollLength > 84) {
            $("header .burger-button .line-1, header .burger-button .line-2, header .burger-button .line-3").css('background', 'black');
        } else {
            $("header .burger-button .line-1, header .burger-button .line-2, header .burger-button .line-3").css('background', 'white');
        }

        //About skill Progress
        if(scrollLength > 1465) {
            $("#it-progres").css("width", '90%');
        }
        if(scrollLength > 1525) {
            $("#workstation-progres").css("width", '75%');
        }
        if(scrollLength > 1585) {
            $("#managed-progres").css("width", '80%');
        }
    });

    //Testimonials
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        responsive:{
            0:{
                items:1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        },
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        smartSpeed:1000

    })
    
})