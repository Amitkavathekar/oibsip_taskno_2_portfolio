// Ensure correct casing and method usage
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop(); // Use lowercase 'window'
    if (scrollTop >= 10) {
        $('body').addClass('fixed-header'); // Use 'addClass' instead of 'addclass'
    } else {
        $('body').removeClass('fixed-header'); // Use 'removeClass' instead of 'removeclass'
    }
});

$(document).ready(function() {
    // TYPING FUNCTION 
    new Typed('#type-it', {
        strings: ['FrontendDevloper', 'Freelancer'],
        typeSpeed: 100,
        loop: true
    });
});

