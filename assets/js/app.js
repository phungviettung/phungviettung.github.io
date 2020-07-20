const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.header__navbar-list')
    const navLinks = document.querySelectorAll('.header__navbar-list li')

    //Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('header__navbar-list-active')

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 2}s`
            }
        })

        //bugger animation
        burger.classList.toggle('toggle')
    })
}
// navSlide()



$(document).ready(() => {

    // nav-bar
    $(window).on('scroll', () => {
        if ($(window).scrollTop()) {
            $('.nav').addClass('back')
        } else {
            $('.nav').removeClass('back')
        }
    })

    //menu
    $('.over__opacity-black').hide()
    $('.burger').click(() => {
        $('.header__navbar-list').toggleClass('header__navbar-list-active')
        $('.over__opacity-black').show()
        if ($('.header__navbar-list').hasClass('header__navbar-list-active')) {
            $(document).mouseup((e) => {
                if ($(e.target).closest(".header__navbar-list").length ===
                    0) {
                    $(".header__navbar-list").removeClass('header__navbar-list-active')
                    $('.over__opacity-black').hide()
                }
            });
        }
    })

    //slick js slogan
    $('.slogan__main').slick({
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                }

            }
        ],
        slidesToShow: 3,
        // slidesToScroll: 1,
        autoplay: false,
        // autoplaySpeed: 2000,
        infinite: true,
        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
    });

    //quick view 
    $('.view__product').hide()
    $('.quick__view').click(() => {
        $('.over__opacity-black').show()
        $('.view__product').show()
        $(document).mouseup((e) => {
            if ($(e.target).closest(".view__product").length ===
                0) {
                $('.view__product').hide()
                $('.over__opacity-black').hide()
            }
        });
    })

    //caroseal
    // Enable Carousel Controls
    const carouse = $("#carouselExampleControls")
    $(".carousel-control-prev").click(function () {
        $(this).parent('#carouselExampleControls').carousel("prev");
    });
    $(".carousel-control-next").click(function () {
        $(this).parent('#carouselExampleControls').carousel("next");
    });

    //brand 
    $('.brand').slick({
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }

            }
        ],
        slidesToShow: 6,
        // slidesToScroll: 1,
        autoplay: false,
        // autoplaySpeed: 2000,
        infinite: true,
        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
    });

})