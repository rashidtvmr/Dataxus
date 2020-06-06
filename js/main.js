$(document).ready(function(){
    AOS.init({
        duration:500,
        easing:'linear',
        once:true
    });
    $(".menu").click(function(){
        $(this).parent().toggleClass("close");
     });
    $('.testimonials__slides').slick({
        arrows: true,
        dots: true,
        autoplay:true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnFocus: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});