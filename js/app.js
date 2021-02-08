$('.banner-area .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1

            
        }
    }
})
$('.technology-area .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})
$('.student-review .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: false,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
