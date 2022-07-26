$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navigation-bar').addClass("sticky");
        } else {
            $('.navigation-bar').removeClass("sticky")
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 })
    });
    $('.hum-burger').click(function() {
        $('header .navigation-bar .menu').toggleClass("active")
        $('.hum-burger .item-1').toggleClass("active")
        $('.hum-burger .item-2').toggleClass("active")
        $('.hum-burger .item-3').toggleClass("active")
        $('.hum-burger .item-4').toggleClass("active")
    });
    // typing animation script
    var typed = new Typed(".typing-1", {
        strings: ['Youtuber.', 'Developer.', 'Blogger.', 'Designer.', 'Freelancer.'],
        typeSpeed: 50,
        backSpeed: 60,
        loop: true,
    });
    var typed = new Typed(".typing-2", {
        strings: ['Youtuber.', 'Developer.', 'Blogger.', 'Designer.', 'Freelancer.'],
        typeSpeed: 50,
        backSpeed: 60,
        loop: true,
    });
    // owl carousel script 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});