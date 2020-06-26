$(window).on('load resize orientationchange', function() {

    $('.mbl-menu-list').each(function(){
        var $carousel = $(this);

        /* Initializes only on mobile screens */
        if ($(window).width() > 767) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    dots: false,
                    arrows: false,
                    infinite: false,
                    variableWidth: true,
                    swipeToSlide: true,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    responsive: [
                      {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 5,
                            swipeToSlide: true,
                            slidesToScroll: 1,
                        }
                      },

                      {
                        breakpoint: 415,
                        settings: {
                            slidesToShow: 4,
                            swipeToSlide: true,
                            slidesToScroll: 1,
                        }
                      }
                    ]
                });
            }
        }
    });
});



// below code calculate inner Hight of display
window.onload = calculateHeight();

window.addEventListener('resize', () => {
    calculateHeight();
});
window.addEventListener('change', () => {
    calculateHeight();
});


function calculateHeight() {
  var hgt = window.innerHeight;
  var token_scroller = document.getElementsByClassName('token-list');
  var profile_con = document.getElementsByClassName('profile-con');
  var token_list_tbl_scroller = document.getElementsByClassName('token-list-tbl');
  var notification_list_scroller = document.getElementsByClassName('notification-list');
  var chat_msg_scroller = document.getElementById('cht-msg-scr');
  var chat_msg_tbl_scroller = document.getElementById('cht-msg-scr-tbl');
  var chat_msg_list_scroller = document.getElementById('cht-msg-list');
  var cht_atch = document.getElementById('cht-atch');
  var scroll_dm = document.getElementById('dashMenu');

    if (token_scroller.length > 0) {
        token_scroller[0].style.height = (hgt - 171)+'px';
    }
    if (profile_con.length > 0) {
        profile_con[0].style.height = (hgt - 83)+'px';
    }

    if (token_list_tbl_scroller.length > 0) {
        token_list_tbl_scroller[0].style.height = (hgt - 148)+'px';
    }

    if (notification_list_scroller.length > 0) {
        notification_list_scroller[0].style.height = (hgt - 92)+'px';
    }

    if (chat_msg_scroller !== null) {
        chat_msg_scroller.style.height = (hgt - 114)+'px';
    }
    if (chat_msg_tbl_scroller !== null) {
        chat_msg_tbl_scroller.style.height = (hgt - 92)+'px';
    }

    if (chat_msg_list_scroller !== null && cht_atch == null) {
        chat_msg_list_scroller.style.height = (hgt - 225)+'px';
    }


    if (scroll_dm !== null) {
        document.getElementById("dashMenu").style.height = (hgt - 139)+'px';
        document.getElementById("dashMenu").style.minHeight = (hgt - 145)+'px';

        var child = document.getElementById("dashMenu").childNodes;

        if (child[1]) {
            child[1].style.height = (hgt - 139)+'px';
            child[1].style.minHeight = (hgt - 145)+'px';
        }
        else if (child[0]){
            child[0].style.height = (hgt - 139)+'px';
            child[0].style.minHeight = (hgt - 145)+'px';
        }
    }
}


// ///////////////////////////////////


    /* mobile side menu open script*/
    function openNav(){
        var hgt = window.innerHeight;
        removeStyle();
        document.getElementById("menuSidebar").style.width = "100%";
        document.getElementById("menuSidebar").style.opacity = "1";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";

        document.getElementById("dashMenu").style.overflow = "hidden";
        document.getElementById("dashMenu").style.height = (hgt - 139)+'px';
        document.getElementById("dashMenu").style.minHeight = (hgt - 145)+'px';
        
        var child = document.getElementById("dashMenu").childNodes;
        if (child[1] && child[1].style) {
            child[1].style.height = (hgt - 139)+'px';
            child[1].style.minHeight = (hgt - 145)+'px';
        }
        else if (child[0] && child[0].style) {
            child[0].style.height = (hgt - 139)+'px';
            child[0].style.minHeight = (hgt - 145)+'px';
        }
    }

    /* mobile side menu close script*/
    function closeNav() {
        document.getElementById("menuSidebar").style.width = "0";
        document.getElementById("menuSidebar").style.opacity = "0";
        document.getElementsByTagName("body")[0].removeAttribute("style");
        removeStyle();
    }

    function removeStyle() {
        var child = document.getElementById("dashMenu").childNodes;
        if (child[1] && child[1].style) {
            child[1].removeAttribute("style");
        }
        else if (child[0] && child[0].style) {
            child[0].removeAttribute("style");
        }
        document.getElementById("dashMenu").removeAttribute("style");
    }

//////////////////////////////////////////



$('.notifi-drp').click(function(e) {
    e.stopPropagation();
});

/////////////////////////////////////////


/* add smooth scroll to goto Link*/
$(document).ready(function(){

    $(".drop-menu").on("mouseenter mouseleave", function() {
        if ($(window).width() > 1199){
            $('.drop-menu .drop-menu-elem').toggleClass('dpm-effect');
        }
    });
 

    $("#gotoregister,#mbl-gotoregister").on('click', function(event) {

        if (this.hash !== "") {
            // Store hash
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 1000, function(){

            });
        }

    });



    // get goto from url;
    var urlPath = window.location.href;
    var res = urlPath.split("#");

    if (res.length > 1) {

        $(window).on('load resize', function() {

            var hash = '#'+res[1];

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            }, 1000);

        });

    }



    // get goto from anchor tag url;
    $("a").click(function (e) {

        if (e.target.attributes['href'] !== undefined) {
            var hr = e.target.attributes['href'].nodeValue;
            var rs = hr.split("#");

            if (rs.length > 1 && rs[0] !== "") {

                // Store hash
                var hash = '#'+rs[1];

                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 100
                }, 1000, function(){

                });
            }
        }        

    });




    // hide nav item onclick which have goto link
    $("#mbl-gotoservicearea, #mbl-gotopricing").on('click', function(event) {
        $('.navbar-collapse').toggleClass('show');
    });





    // for mobile
    $('div[data-target="#collapseOne"]').click(function() {
        $('div[data-target="#collapseOne"] .ft-toggler svg').toggleClass("flip-up");
    });
    $('div[data-target="#collapseTwo"]').click(function() {
        $('div[data-target="#collapseTwo"] .ft-toggler svg').toggleClass("flip-up");
    });
    $('div[data-target="#collapseThree"]').click(function() {
        $('div[data-target="#collapseThree"] .ft-toggler svg').toggleClass("flip-up");
    });
    $('div[data-target="#collapseFour"]').click(function() {
        $('div[data-target="#collapseFour"] .ft-toggler svg').toggleClass("flip-up");
    });
    $('div[data-target="#collapseFive"]').click(function() {
        $('div[data-target="#collapseFive"] .ft-toggler svg').toggleClass("flip-up");
    }); 
    $('div[data-target="#collapseSix"]').click(function() {
        $('div[data-target="#collapseSix"] .ft-toggler svg').toggleClass("flip-up");
    });  


    // for desktop and tablet
    $('div[data-target="#collapseOne"]').click(function() {
        $('div[data-target="#collapseOne"] .tgl-icon svg').toggleClass("flip-up");
    });
    $('div[data-target="#collapseTwo"]').click(function() {
        $('div[data-target="#collapseTwo"] .tgl-icon svg').toggleClass("flip-up");
    });
    $('div[data-target="#collapseThree"]').click(function() {
        $('div[data-target="#collapseThree"] .tgl-icon svg').toggleClass("flip-up");
    });
    $('div[data-target="#collapseFour"]').click(function() {
        $('div[data-target="#collapseFour"] .tgl-icon svg').toggleClass("flip-up");
    });  
    $('div[data-target="#collapseFive"]').click(function() {
        $('div[data-target="#collapseFive"] .tgl-icon svg').toggleClass("flip-up");
    });
    $('div[data-target="#collapseSix"]').click(function() {
        $('div[data-target="#collapseSix"] .tgl-icon svg').toggleClass("flip-up");
    });


    // mobile footer
    $('div[data-target="#collapseServices"]').click(function() {
        $('div[data-target="#collapseServices"] span svg').toggleClass("flip-vertical");
    });
    $('div[data-target="#collapseEarn"]').click(function() {
        $('div[data-target="#collapseEarn"] span svg').toggleClass("flip-vertical");
    });
    $('div[data-target="#collapseCompany"]').click(function() {
        $('div[data-target="#collapseCompany"] span svg').toggleClass("flip-vertical");
    });




    // login input focus after effect
    $( ".arroba" ).focusin(function() {
        $( this ).parent( ".login-panel .form-group" ).addClass("effect");
    });
    $( ".arroba" ).focusout(function() {
        $( this ).parent( ".login-panel .form-group" ).removeClass("effect");
    });
    $( ".mbl-arroba" ).focusin(function() {
        $( this ).parent( ".login-panel .form-group" ).addClass("effect");
    });
    $( ".mbl-arroba" ).focusout(function() {
        $( this ).parent( ".login-panel .form-group" ).removeClass("effect");
    });
    $( ".padlock" ).focusin(function() {
        $( this ).parent( ".login-panel .form-group" ).addClass("effect");
    });
    $( ".padlock" ).focusout(function() {
        $( this ).parent( ".login-panel .form-group" ).removeClass("effect");
    });
    $( ".mbl-padlock" ).focusin(function() {
        $( this ).parent( ".login-panel .form-group" ).addClass("effect");
    });
    $( ".mbl-padlock" ).focusout(function() {
        $( this ).parent( ".login-panel .form-group" ).removeClass("effect");
    });



    $( ".register-panel .form-control" ).focusin(function() {
        $( this ).parent( ".register-panel .form-group" ).addClass("effect");
    });
    $( ".register-panel .form-control" ).focusout(function() {
        $( this ).parent( ".register-panel .form-group" ).removeClass("effect");
    });
    $( ".mbl-register-panel .form-control" ).focusin(function() {
        $( this ).parent( ".mbl-register-panel .form-group" ).addClass("effect");
    });
    $( ".mbl-register-panel .form-control" ).focusout(function() {
        $( this ).parent( ".mbl-register-panel .form-group" ).removeClass("effect");
    });





    // display top menu search suggestion
    window.onclick = function(e) {

        var classList = e.target.classList;
        var ck = jQuery.inArray( "top-search-box", classList );
        if (ck > -1) {
            $(".sch-ds-sug").addClass('d-block');
        } else {
            $(".sch-ds-sug").removeClass('d-block');
        }
        
    }


    // bootstrap custom file input for displaying selected file name
    $('.custom-file input').change(function (e) {
        var files = [];
        for (var i = 0; i < $(this)[0].files.length; i++) {
            files.push($(this)[0].files[i].name);
        }
        $(this).next('.custom-file-label').html(files.join(', '));
    });



    //  custom drop down
    $("#reportType a").click(function(e) {
        e.preventDefault();

        const root = $(this).parents(".reportType");
        root.find(".drop-toggle").text($(this).data("value"));

        if ($(this).data("value") == "Custom") {
            root.find(".mRpDate").removeClass("d-none");
            root.find(".mRpDate").addClass("d-block");
        }
        else {
            root.find(".mRpDate").removeClass("d-block");
            root.find(".mRpDate").addClass("d-none");
        }
    });



    $("#mblReportType a").click(function(e) {
        e.preventDefault();

        const root = $(this).parents(".mblReportType");
        root.find(".drop-toggle").text($(this).data("value"));

        if ($(this).data("value") == "Custom") {
            root.find(".mblRpDate").removeClass("d-none");
            root.find(".mblRpDate").addClass("d-block");
        }
        else {
            root.find(".mblRpDate").removeClass("d-block");
            root.find(".mblRpDate").addClass("d-none");
        }
    });



    // mobile top search option
    $("#dp-src").click(function (e) {
       e.preventDefault();

       $(".mbl-floating-src").toggleClass("show");
       $("body").toggleClass("overflow-hidden");

    });
    // mobile top search close option
    $(".mbl-floating-src .opt-layer").click(function (e) {

        $(".mbl-floating-src").removeClass("show");
        $("body").removeClass("overflow-hidden");

    });



    // regular pickup options modal close on chose pickup
    $('#pickupModal').on('show.bs.modal', function (e) {
      $('#rgPickupModal').modal('hide')
    })




});