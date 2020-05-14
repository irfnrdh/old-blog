/*global $*/

$(function () {
    
    "use strict";
    
    /*--------------------------------
        Jika kamu sudah sampai sini, 
        itu berarti kamu sama seperti saya.
        kita melihat dari dalam. 
        Dari sudut yang berbeda.
        bukan hanya sekededar tampilan luar.
        
        inilah source + code

        saya sungguh banyak belajar dari c.o.d.e
        dia unik, cantik, menarik dan misteri

        buat penasaran..

        mata tak berkedipppp sedikit pun

        jika dia telanjang..
        
        sampai-sampaiii...........
        
        otak langsung tegang..

        kadang pusing ketika dia ngambek
        terus bilang "ERROR"

        itulah kata-kata yang buat saya
        semakin sayang dan perduli

        bahwa kita harus memperbaiki
        cara kita memandang 
        bukan merubah ketetapan

        tapi membuat ketetapan menjadi
        lebih bermakna.

        bukan hanya sekedar c.o.d.e
        tapi lebih dari itu
        lebih dari apa yang kamu pikirkan.

        --- irfnrdh, 10 feb 2019 - 22:40 WIB
        Part-time Artist, Full-time Creator
        
    ----------------------------------*/

    var $grid = $('.grid'),
        i;

    /*----------------------------------------------
        window height
    -----------------------------------------------*/
        $(".full_height").height($(window).height());

    /*--------------------------------
        Window Resize
    ----------------------------------*/
    $(window).on("resize", function () {

        $(".full_height").height($(window).height());

    });

    /*--------------------------------
        FitText Plugin
    ----------------------------------*/ 
    var home__h1 = ".home h1";

    if ($(".home .type h1").length){

        $(home__h1).fitText(1, { maxFontSize: 75 });

    } else {

        $(home__h1).fitText(1, { maxFontSize: 90 });

    }

    /*--------------------------------
        typed Plugin
    ----------------------------------*/ 
    if ($("#typed").length){

        var typed = new Typed("#typed", {
            stringsElement: '#typed-strings',
            typeSpeed: 40,
            backSpeed: 0,
            backDelay: 1500,
            startDelay: 0,
            fadeOut: false,
            loop: true
        });

    }

    /*--------------------------------
        Jquery.mb.YTPlayer Plugin
    ----------------------------------*/ 
    if ($("#bgndVideo").length){

        jQuery("#bgndVideo").YTPlayer({
            autoPlay:true,
            startAt:0,
            showControls: false,
            opacity: 1
        });

    }

    /*--------------------------------
        Preloader
    ----------------------------------*/
    $(window).on('load', function () {

        $('.startLoad').fadeOut('slow');
        
    });


});
