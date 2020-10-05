jQuery(function() {

    //nav
    $("#nav ul a").on("click", function (event) {
        var link = $(this);
        event.preventDefault();
        var id  = link.attr('href'), top  = $(id).position().top;
        top = $(id).offset().top - 50;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    //gallery
    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });

    //about-carousel
    $('.about-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
    });


});
