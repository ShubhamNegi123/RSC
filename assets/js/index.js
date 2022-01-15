$(function(){
    $('.home-section-contenct').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        margin:0,
        stagePadding:0,
        smartSpeed: 2500,
        loop:true,
        nav:false,
        autoplay:2500,
        autoplayTimeout:3000,
        autoplaySpeed:2500,
        slideTransition:'linear',
        // autoplayHoverPause:true, 
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }

    })
})