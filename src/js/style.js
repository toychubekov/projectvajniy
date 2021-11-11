
$('.mobile-btn').on('click',  function() {
    $('.mobile-btn').toggleClass( 'show-mobile-btn');
    $('.header-menu').toggleClass('show-menu');
    $('.header-link').toggleClass('show-header-link')
});

$('.header-menu a').on('click',  function() {
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.header-menu').removeClass('show-menu');
    $('.header-link').removeClass('show-header-link')
});