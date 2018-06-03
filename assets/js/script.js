jQuery(document).ready(function($) {
    $('.my-slider').unslider({
        autoplay: true
    });

    $('header nav ul li').addClass('none');
});

$(window).scroll(function() {
    if ($(window).scrollTop() >= 0){  

        $('header').addClass("sticky");

        $('#backToTop').addClass('show')
        var eqn = ($(window).scrollTop());
    } else {
        $('header').removeClass("sticky");
        $('#backToTop').removeClass('show')
    }
});

$(function(){
    $("header h3").typed({
        strings: ["Gary Baker"],
        typeSpeed: 0,
        loop: true
    });
});

$('#getStartedBtn').on('click', function(event) {
    event.preventDefault();

    scrolling('#getStarted', 0);
});

$('#getStartedLink').on('click', function(event) {
    event.preventDefault();

    scrolling('#getStarted');
});

$('#bookLink').on('click', function(event) {
    event.preventDefault();

    scrolling('#book');
});


$('#bookBtn').on('click', function(event) {
    event.preventDefault();

    scrolling('#book');
});

$('#aboutLink').on('click', function(event) {
    event.preventDefault();

    scrolling('#about');
});

$('#backToTop').on('click', function(event) {
    event.preventDefault();
    scrolling('#top');
});

function scrolling(div) {

    $('html, body').animate({
        scrollTop: $(div).offset().top - 64
    }, 2000);
}

$('header nav i').on('click', function() {
    
    $(this).toggleClass('fa-bars');
    $(this).toggleClass('fa-close');


    $('header nav h3').toggleClass('none');
    $('header nav img').toggleClass('none');
    $('header nav ul li').toggleClass('none');

    $('header nav ul').toggleClass('adjustHeader');


});

$('header nav a').on('click', function(event) {
    event.preventDefault();

    $('header nav i').toggleClass('fa-bars');
    $('header nav i').toggleClass('fa-close');

    $('header nav h3').addClass('view');
    $('header nav img').addClass('view');
    $('header nav ul li').addClass('none');

    $('header nav ul').removeClass('adjustHeader');
});














