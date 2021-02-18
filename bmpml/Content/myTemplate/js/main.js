$(document).ready(function () {
    //Preloader
    function preloader(){
        var preloader = $('.preloader');
        preloader.remove();
    }
    setTimeout(preloader, 3000);
    // parallax
    $('#js_quote_area').parallax({ imageSrc: 'img/parallax-bg.png' });

    $('.lightSlider').lightSlider({
        item:4,
        loop:true,
        auto: true,
        controls: false,
        adaptiveHeight:true,
        pauseOnHover: true,
        slideMove:2,
        pager: false,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:900,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                }
            }
        ]
    });

    // gallery slider
    $('.gallery_slider').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        slideMargin: 20,
        thumbItem: 4,
        controls: false,
        thumbMargin: 0,
        galleryMargin: 0,
    });



    $(window).load(function(){
        $(".lSSlideOuter .lSPager.lSGallery li").append("<div class=overlay></divoverlay>");
        if($(window).width() >= 991){
            var activity_tab_size = $('.activity_tab_area.mdl-card').height();
            var stat_outer_height = $('.statistics_outer').height();
            var useful_links_height = $('.useful_links_area.mdl-card').height();

            var diff = activity_tab_size - stat_outer_height;
            $(".useful_links_area.mdl-card").css({"min-height" : useful_links_height+diff});

            //gallery_slider
            var slider = $('.slider').height();
            var filter_outer = $('.filter_outer').height();
            var filter_form = $('.mdl-card .filter_form').height();
            $(".mdl-card .filter_form").height((slider-filter_outer)+filter_form);

            //gallery_slider
            var contact_form = $('.contact_area .mdl-card').height();
            var location_map = $('.location_map iframe').height();
            var diff = contact_form - location_map;
            $(".location_map iframe").height( location_map + diff);

        }
    });



    //Countdown
    $('.badge_area').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            //$("#achievements .row > div").addClass("animated fadeInUp")
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });





    if($(window).width() <= 991){
        $(".main_nav").hide();
        $(".btn_group").hide();

        $(".main_nav > li.drpdown").hover(function(){
            $(this).children('ul.drpdown_menu').slideToggle('100');
        });

        $(".main_nav > li.drpdown > ul > li.drpdown").hover(function(){
            $(this).children('ul.drpdown_menu').slideToggle('100');
        });
    }


    $(".responsive_button > button").click(function(e){
        e.preventDefault();
        $(".main_nav").slideToggle('100');
        $(".btn_group").toggle();
    });

    if($(window).width() > 991){
        // scroll to top
        $(window).scroll(function () {
            //scrolll
            if ($(this).scrollTop() > 400) {
                $('.scrollup').fadeIn();
                $('.top_menu_area').slideUp();
            } else {
                $('.scrollup').fadeOut();
                $('.top_menu_area').slideDown();
            }
        });
    }

    // scroll to top
    $(window).scroll(function () {
        //scrolll
        if ($(this).scrollTop() > 400) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
   
       
    });

