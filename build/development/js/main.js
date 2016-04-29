/* Javascript Part */

/* Navigation script */

/* variables for navigation */
var menuElem = document.getElementsByClassName('top-nav')[0];
var menuSourceBottom = menuElem.getBoundingClientRect().bottom + window.pageYOffset;

window.onscroll = function() {
    if (menuElem.classList.contains('fixed') && window.pageYOffset < menuSourceBottom) {
        menuElem.classList.remove('fixed');
    } else if (window.pageYOffset > menuSourceBottom) {
        menuElem.classList.add('fixed');
    }
};
/* END Navigation script */

/* toggle-menu display */
var toogleButtom = document.getElementsByClassName('nav-toggle')[0];

toogleButtom.onclick = function(event){
    menuElem.classList.add('nav-toggle-down');
    if(menuElem.style.display == 'block'){
        menuElem.style.display = 'none';
    } else {
        menuElem.style.display = 'block';
    }



};






/* JQuery Part */
$(document).ready(function(e) {

    /* variables for slider */
    var hwSlideSpeed = 700;
    var hwTimeOut = 3000;
    var hwNeedLinks = true;



    /* Slider script */
    $('.slide').css(
        {"position" : "absolute",
            "top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#slider .slide").size();
    var animSlide = function(arrow){
        clearTimeout(slideTime);
        $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
        if(arrow == "next"){
            if(slideNum == (slideCount-1)){slideNum=0;}
            else{slideNum++}
        }
        else if(arrow == "prew")
        {
            if(slideNum == 0){slideNum=slideCount-1;}
            else{slideNum-=1}
        }
        else{
            slideNum = arrow;
        }
        $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
        $(".control-slide.active").removeClass("active");
        $('.control-slide').eq(slideNum).addClass('active');
    }
    if(hwNeedLinks){
        var $linkArrow = $('<a id="prewbutton" href="#"></a><a id="nextbutton" href="#"></a>')
            .prependTo('#slider');
        $('#nextbutton').click(function(){
            animSlide("next");

        })
        $('#prewbutton').click(function(){
            animSlide("prew");
        })
    }
    var $adderSpan = '';
    $('.slide').each(function(index) {
        $adderSpan += '<span class = "control-slide">' + index + '</span>';
    });
    $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slider-wrap');
    $(".control-slide:first").addClass("active");

    $('.control-slide').click(function(){
        var goToNum = parseFloat($(this).text());
        animSlide(goToNum);
    });
    var pause = false;
    var rotator = function(){
        if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
    }
    $('#slider-wrap').hover(
        function(){clearTimeout(slideTime); pause = true;},
        function(){pause = false; rotator();
        });
    rotator();
    /* END Slider script */


    /* script for return button return-up */
    $(function (){

        $(".return-up").hide();

        $(window).scroll(function (){
            if ($(this).scrollTop() > 600){
                $(".return-up").css('bottom', '0px').fadeIn();
            } else{
                $(".return-up").fadeOut();
            }
        });

        $(".return-up").click(function (){
            $("body, html").animate({
                scrollTop:0
            }, 800);
            return false;
        });
    });
    /* END script for return button return-up */

});







