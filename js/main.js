$(document).ready(function(){
    AOS.init({
        duration:500,
        easing:'linear',
        once:true
    });
    $(".menu").click(function(){
        $(this).parent().toggleClass("close");
     });
     $(".icons a").click(function(e) {
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        $(".menu").parent().toggleClass("close");
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
    $('.c_menu-btn--icon').click(()=>{
        $('.c_menu-btn--icon').toggleClass('open');
        $('.c_menu-area').toggleClass('expand');
        $('.c_menu-area').click(()=>{
            $('.c_menu-btn--icon').toggleClass('open');
            $('.c_menu-area').toggleClass('expand');
        })
    });
});