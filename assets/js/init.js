jQuery(document).ready(function($){
    "use strict"; 

        var winHeight = $(window).height();
        var winWidth = $(window).width();

        $('.homeoverlay').css('height', winHeight);
        $('.homeoverlay .home-part .item').css('height', winHeight);

        if(winHeight > 360){$('.homeoverlay .item .slider-part').css('height', winHeight/100*80);}

        else {$('.homeoverlay .item .slider-part').css('height', winHeight);}

        $(window).resize(function() {
            winHeight = $(window).height();
            winWidth = $(window).width();
            $('.homeoverlay').css('height', winHeight);
            $('.homeoverlay .home-part .item').css('height', winHeight);

            if(winHeight > 360){$('.homeoverlay .item .slider-part').css('height', winHeight/100*80);}

            else {$('.homeoverlay .item .slider-part').css('height', winHeight);}
        });

        $('#mobilenav .nav').height(winHeight-70);
        
        if (winWidth <= 1024) {
            $('.uikit').remove();
        }
        

// MENU FIXED START

var offset = winHeight;
var duration = 500;
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
        jQuery('.fixed-nav').addClass('fixed');
    } else {
        jQuery('.fixed-nav').removeClass('fixed');
    }
});

// MENU FIXED END


// MENU FOR MOBILE AND SMALL DEVICES START
    $('#mobile-nav-trigger').click (function(){
        $('#mobilenav').toggleClass('fixed-m-nav');
        $('#body-wrapper').toggleClass('body-wrapper-trigger');
    })

    $('#body-wrapper').click(function(){
        $('#mobilenav').removeClass('fixed-m-nav');
        $('#body-wrapper').removeClass('body-wrapper-trigger');
    })
// MENU FOR MOBILE AND SMALL DEVICES END

// TESTIMONIAL SLIDER START

$("#testimonial-carosel").owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    startDragging : pauseOnDragging,
    slideSpeed  :  1000,
    paginationSpeed : 500,
    goToFirstSpeed : 2000,
    singleItem : true,
    responsive : true,
    // touchDrag : false,
    // mouseDrag : false,
    addClassActive : true,
    transitionStyle: 'fadeUp',
});

//PAUSE WHILE DRAGGING 
  function pauseOnDragging(){
      isPause = true;
  }

$('#testimonial .owl-page span').eq(0).html('<img src="assets/img/testimonial/davidchambers.jpg">');
$('#testimonial .owl-page span').eq(1).html('<img src="assets/img/testimonial/ramkirankomaravolu.jpg">');
$('#testimonial .owl-page span').eq(2).html('<img src="assets/img/testimonial/rejomathew.jpg">');

// TESTIMONIAL SLIDER END



// LAZYLOAD TRIGGER START
    $("img.lazy").lazyload({threshold : 200, effect : "fadeIn"});
// LAZYLOAD TRIGGER END


// MAGNEFICO POPUP START
        
        /* Popup Animation html attribute
            data-effect="mfp-zoom-in"
            data-effect="mfp-newspaper"
            data-effect="mfp-move-horizontal"
            data-effect="mfp-move-from-top"
            data-effect="mfp-3d-unfold"
            data-effect="mfp-zoom-out"
         */
        
    $('.magnifico-gallery').magnificPopup({
       delegate: 'a',
       type: 'image',
       fixedContentPos: false,
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it
                duration: 400, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function 
            }
        });


        $('.pop').magnificPopup({
            type:'image',
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
             beforeOpen: function() {
             // just a hack that adds mfp-anim class to markup 
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
              }
            },
        }); //FOR IMAGE


        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false,
        });

// MAGNEFICO POPUP END

    
    // SMOTHSCROLL START

    var scrollOffset = function(){
        if($(window).width() > 992) { //offset value
            return 65;
        } else {
            return 0;
        }
    }

    $('.scroll').on('click',function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            'scrollTop': $($(this).attr('href')).offset().top - scrollOffset()
        }, 1500, 'easeInOutCirc', function () {});

        $('#mobilenav').removeClass('fixed-m-nav');
        $('#body-wrapper').removeClass('body-wrapper-trigger');
        $('section').removeClass('blur');
    });


    // jswing
    // def
    // easeInQuad
    // easeOutQuad
    // easeInOutQuad
    // easeInCubic
    // easeOutCubic
    // easeInOutCubic
    // easeInQuart
    // easeOutQuart
    // easeInOutQuart
    // easeInQuint
    // easeOutQuint
    // easeInOutQuint
    // easeInSine
    // easeOutSine
    // easeInOutSine
    // easeInExpo
    // easeOutExpo
    // easeInOutExpo
    // easeInCirc
    // easeOutCirc
    // easeInOutCirc
    // easeInElastic
    // easeOutElastic
    // easeInOutElastic
    // easeInBack
    // easeOutBack
    // easeInOutBack
    // easeInBounce
    // easeOutBounce
    // easeInOutBounce

// SMOTHSCROLL END

    //MIXITUP TRIGGER START

    jQuery('#Grid').on('.filter', 'click', function(){
        var self = jQuery(this);
        var oldData = self.data('filter');
        alert(oldData)
        if(oldData != 'all') {
            self.data('temp', oldData);
            self.data('filter', 'all');
        } else {
            self.data('filter', self.data('temp'));
            self.removeData('temp');
        }
    }).mixitup();

    jQuery('#Grid img').removeAttr('height');
    jQuery('#Grid img').removeAttr('width');

    //MIXITUP TRIGGER END


    // CONTACT FORM START
    $('#contact').submit(function(){
        var fromData = $('#contact').serialize();
        $(document.body).on('click', '#closebtn', function(){
            $('#contact-confirm').remove();
        });

        $.ajax({
            type: "POST",
            url: "contact.php",
            data: fromData,
            success : function( data ) {
                alert('Your Message Sent successfully');
            },
            error   : function( xhr, err ) {
                alert(fromData);     
            }
        });

        return false;
    });
    // CONTACT FORM END
    

    // FEATURED CLIENTS SECTION START

    if(jQuery(window).width() <= 992){
            $('.more.first').hide();
            $('.more.second').show();
        } else {
            $('.more.second').hide();
            $('.more.first').show();
    }

    $('.more').on('click', function(){
        $('#clients .right').addClass('expand');
        // $('.more').hide();
        $('#less').show();
        $('#clients .left').css('margin-left','-300%');

        $('.container > .show-hide').delay('600').slideDown();

        var x = 800;
        $('#short').nextAll('.c-logo').each(function(){
            $(this).delay(x).fadeIn(600);
            x = x+20;
        });

        if(jQuery(window).width() <= 992){
            $('.more.first').hide();
            $('.more.second').hide();
        }
    });

    $('#less').click(function(){
        $('#clients .right').removeClass('expand');
        $('.more').show();
        $('#less').hide();
        $('#clients .left').css('margin-left','0');
        $('#short').nextAll('.c-logo').fadeOut(200);

        $('.container > .show-hide').slideUp('slow');

        $('.left > h3').css('display','block');
        $('.left > h4').css('display','block');

        if(jQuery(window).width() <= 992){
            $('.more.second').show();
            $('.more.first').hide();
        } else {
            $('.more.second').hide();
            $('.more.first').show();
        }
    });


    $('#short').nextAll('.c-logo').hide();
    

    // HAPPYNESS SECTION NUMBER ANIMATE START
    
    $('#happyness').waypoint(function() {
        $({countNum: $('#online').text()}).animate({countNum: $('#online').attr('data-target')}, {
            duration: 5000,
            easing:'linear',
            step: function() {
                $('#online').text(Math.floor(this.countNum));
            },
            complete: function() {
                $('#online').text(this.countNum);
            }
        });

        $({countNum: $('#clients-no').text()}).animate({countNum: $('#clients-no').attr('data-target')}, {
            duration: 5000,
            easing:'linear',
            step: function() {
                $('#clients-no').text(Math.floor(this.countNum));
            },
            complete: function() {
                $('#clients-no').text(this.countNum);
            }
        });

        $({countNum: $('#projects-no').text()}).animate({countNum: $('#projects-no').attr('data-target')}, {
            duration: 5000,
            easing:'linear',
            step: function() {
                $('#projects-no').text(Math.floor(this.countNum));
            },
            complete: function() {
                $('#projects-no').text(this.countNum);
            }
        });

        $({countNum: $('#traveled').text()}).animate({countNum: $('#traveled').attr('data-target')}, {
            duration: 5000,
            easing:'linear',
            step: function() {
                $('#traveled').text(Math.floor(this.countNum));
            },
            complete: function() {
                $('#traveled').text(this.countNum);
            }
        });
    }, { offset: winHeight});
    
    // HAPPYNESS SECTION NUMBER ANIMATE END


}) // DOCUMENT.READY END


// chart for skill section start (working)

if ($('#skills').length) {

    var inView = false;

    function isScrolledIntoView(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    }

    var javasript   =   [{value : 100, color : "#aed57c",}, {value : 0, color : "#eff7e5"},];
    var jquery   =   [{value : 100, color : "#aed57c"}, {value : 0, color : "#eff7e5"}];
    var html5    =   [{value : 100, color : "#aed57c"}, {value : 0, color : "#eff7e5"}];
    var css3   =   [{value : 100, color : "#aed57c"}, {value : 0, color : "#eff7e5"}];
    var nodejs  =   [{value : 80, color : "#aed57c"}, {value : 20, color : "#eff7e5"}];
    var angularjs     =   [{value : 70, color : "#aed57c"}, {value : 30, color : "#eff7e5"}];
    var backbonejs     =   [{value : 60, color : "#aed57c"}, {value : 40, color : "#eff7e5"}];
    var sql     =   [{value : 100, color : "#aed57c"}, {value : 0, color : "#eff7e5"}];
    var python     =   [{value : 70, color : "#aed57c"}, {value : 30, color : "#eff7e5"}];
    var ajax   =   [{value : 100, color : "#aed57c"}, {value : 0, color : "#eff7e5"}];
    var d3    =   [{value : 50, color : "#aed57c"}, {value : 50, color : "#eff7e5"}];
    var csharp  =   [{value : 60, color : "#aed57c"}, {value : 40, color : "#eff7e5"}];
    var sapui5   =   [{value : 100, color : "#aed57c"}, {value : 0, color : "#eff7e5"}];
    var sapbasis   =   [{value : 70, color : "#aed57c"}, {value : 30, color : "#eff7e5"}];
    var sapabap  =   [{value : 60, color : "#aed57c"}, {value : 40, color : "#eff7e5"}];
    var javalang =   [{value : 70, color : "#aed57c"}, {value : 30, color : "#eff7e5"}];

    var count = 0;

    $(window).scroll(function() {
        if (isScrolledIntoView('#skills') && count==0) {
            if (inView) { return; }
            count=1;
            inView = true;
            new Chart(document.getElementById("js").getContext("2d")).Doughnut(javasript);
            new Chart(document.getElementById("jQuery").getContext("2d")).Doughnut(jquery);
            new Chart(document.getElementById("html5").getContext("2d")).Doughnut(html5);
            new Chart(document.getElementById("css3").getContext("2d")).Doughnut(css3);
            new Chart(document.getElementById("NodeJS").getContext("2d")).Doughnut(nodejs);
            new Chart(document.getElementById("AngularJS").getContext("2d")).Doughnut(angularjs);
            new Chart(document.getElementById("BackboneJS").getContext("2d")).Doughnut(backbonejs);
            new Chart(document.getElementById("SQL").getContext("2d")).Doughnut(sql);
            new Chart(document.getElementById("python").getContext("2d")).Doughnut(python);
            new Chart(document.getElementById("AJAX").getContext("2d")).Doughnut(ajax);
            new Chart(document.getElementById("d3").getContext("2d")).Doughnut(d3);
            new Chart(document.getElementById("c#").getContext("2d")).Doughnut(csharp);
            new Chart(document.getElementById("SAPUI5").getContext("2d")).Doughnut(sapui5);
            new Chart(document.getElementById("basis").getContext("2d")).Doughnut(sapbasis);
            new Chart(document.getElementById("abap").getContext("2d")).Doughnut(sapabap);
            new Chart(document.getElementById("java").getContext("2d")).Doughnut(javalang);
        } else {
            if ($(window).width() >=1024) {;
                inView = false;  
            }
        }
    });
}

// chart for skill section end


// CSS3 AMINATION TRIGGER FOR SLIDER START

$('#home-slider').bind('slide.bs.carousel', function (e) {
  $('#home-slider .slideInLeftTrigger').removeClass('slideInLeft');
  $('#home-slider .fadeInRightBigTrigger').removeClass('fadeInRightBig');
})

$('#home-slider').bind('slid.bs.carousel', function (e) {
  $('#home-slider .slideInLeftTrigger').addClass('slideInLeft');
  $('#home-slider .fadeInRightBigTrigger').addClass('fadeInRightBig');

})

// CSS3 AMINATION TRIGGER FOR SLIDER END