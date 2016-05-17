/*-- Javascript Part --*/

/* Navigation script */

/* variables for navigation */
var menuElem = document.getElementsByClassName('top-nav')[0];
var toggleButton = document.getElementsByClassName('nav-toggle')[0];
var menuSourceBottom = menuElem.getBoundingClientRect().bottom + window.pageYOffset;

/* event scroll effects menu and toggle menu button*/
window.onscroll = function(e) {

    fixedTopMenu();
    fixedTopToggleButton();

    function fixedTopMenu(){
        if (menuElem.classList.contains('fixed') && window.pageYOffset < menuSourceBottom && document.documentElement.clientWidth < 992) {
            menuElem.classList.remove('fixed');
        } else if (window.pageYOffset > menuSourceBottom && document.documentElement.clientWidth > 992) {
            menuElem.classList.add('fixed');
        } else {
            menuElem.classList.remove('fixed');
        }
    };

    function fixedTopToggleButton(){
        if (window.pageYOffset > 25) {
            toggleButton.classList.add('nav-toggle-fixed');
        } else{
            toggleButton.classList.remove('nav-toggle-fixed');
        }
    };


};
/* END event scroll effects menu and toggle menu button*/
/* END Navigation script */


/* click toggle-menu display */
if (document.addEventListener){
    toggleButton.addEventListener('click', toggleClick);
} else if (document.attachEvent){
    toggleButton.attachEvent('onclick', toggleClick);
} else {
    toggleButton.onclick = toggleClick;
};

function toggleClick(e){

    if(menuElem.style.display == 'block'){
        menuElem.style.display = 'none';
    } else {
        menuElem.style.display = 'block';
    }

    if(typeof e.stopPropagation === 'function'){
        e.stopPropagation();
    }
    if(typeof  e.cancelBubble !== 'undefined'){
        e.cancelBubble = true;
    }

    if(typeof e.preventDefault === 'function'){
        e.preventDefault();
    }
    if(typeof  e.returnValue !== 'undefined') {
        e.returnValue = false;
    }

};
/* END click toggle-menu display */

/* close toggle-menu button */
var closeNav = document.getElementsByClassName('close-nav')[0];

if (document.addEventListener){
    closeNav.addEventListener('click', closeNavigation);
} else if (document.attachEvent){
    closeNav.attachEvent('onclick', closeNavigation);
} else {
    closeNav.onclick = closeNavigation;
};

function closeNavigation(e){

    if(menuElem.style.display == 'block'){
        menuElem.style.display = 'none';
    } else {
        menuElem.style.display = 'block';
    }

    if(typeof e.stopPropagation === 'function'){
        e.stopPropagation();
    }
    if(typeof  e.cancelBubble !== 'undefined'){
        e.cancelBubble = true;
    }

    if(typeof e.preventDefault === 'function'){
        e.preventDefault();
    }
    if(typeof  e.returnValue !== 'undefined') {
        e.returnValue = false;
    }

};
/* END close toggle-menu button */




/*-- JQuery Part --*/
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







