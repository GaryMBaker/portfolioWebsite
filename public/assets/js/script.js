// this method is used for controlling hiding the backToTop button when the browser is
// at the top of the page and to handle when the header element is sticky for a fixed positioning.
$(window).scroll(() => {
    if ($(window).scrollTop() >= 0){  
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }

    if ($(window).scrollTop() >= 1) { 
        $('#backToTop').addClass('show');
    } else {
        $('#backToTop').removeClass('show');
    }
});

// this method is used for when the page loads initially to run the 
// typed.js plugin for the typing title in the header
$(() => {
    $("header h3").typed({
        strings: ["Gary Baker"],
        typeSpeed: 0,
        loop: true
    });

    $('.my-slider').unslider({
        autoplay: true
    });

    $('header nav ul li').addClass('none');
});

// This function handles all the (button) onClick and scrolls them to the (element)
clickScroll = (button, element) => {
    $(button).on('click', (event) => {
        event.preventDefault();
        scrolling(element);
    });
}

// this function handles all the scrolling animations and scrolls the browser to the (div)
scrolling = (div) => {
    $('html, body').animate({
        scrollTop: $(div).offset().top - 64
    }, 2000);
}

// these are all the animated scrolling click button events.
clickScroll('#getStartedBtn', '#getStarted');
clickScroll('#getStartedBtn1', '#getStarted');
clickScroll('#getStartedBtn2', '#getStarted');
clickScroll('#bookBtn', '#book');

// these are all the animated scrolling click link events.
clickScroll('#getStartedLink', '#getStarted');
clickScroll('#bookLink', '#book');
clickScroll('#aboutLink', '#about');

// this method is for the scroll to top button.
$('#backToTop').on('click', (event) => {
    event.preventDefault();
    scrollToTop('#top', 125);
});

// this is the main scrollToTop function that makes sure the window scrolls to the top of the page.
scrollToTop = (div, margins) => {
    $('html, body').animate({
        scrollTop: $(div).offset().top - margins
    }, 2000);
}

// this method is used when the site is in mobile view to handle the fullscreen 
// navigation with hamburger icon.
$('header nav i').on('click', () => {
    $(this).toggleClass('fa-bars');
    $(this).toggleClass('fa-close');
    $('header nav h3').toggleClass('none');
    $('header nav img').toggleClass('none');
    $('header nav ul li').toggleClass('none');
    $('header nav ul').toggleClass('adjustHeader');
});

// this method handles hiding the mobile navigation when the getStartedLink is clicked.
$('header nav a#getStartedLink').on('click', (event) => {
    event.preventDefault();
    $('header nav i').toggleClass('fa-bars');
    $('header nav i').toggleClass('fa-close');
    $('header nav h3').toggleClass('none');
    $('header nav img').toggleClass('none');
    $('header nav ul li').addClass('none');
    $('header nav ul').removeClass('adjustHeader');
});

// this method handles hiding the mobile navigation when the aboutLink is clicked.
$('header nav a#aboutLink').on('click', (event) => {
    event.preventDefault();
    $('header nav i').toggleClass('fa-bars');
    $('header nav i').toggleClass('fa-close');
    $('header nav h3').toggleClass('none');
    $('header nav img').toggleClass('none');
    $('header nav ul li').addClass('none');
    $('header nav ul').removeClass('adjustHeader');
});

// this method handles hiding the mobile navigation when the bookLink is clicked.
$('header nav a#bookLink').on('click', (event) => {
    event.preventDefault();
    $('header nav i').toggleClass('fa-bars');
    $('header nav i').toggleClass('fa-close');    
    $('header nav h3').toggleClass('none');
    $('header nav img').toggleClass('none');
    $('header nav ul li').addClass('none');
    $('header nav ul').removeClass('adjustHeader');
});