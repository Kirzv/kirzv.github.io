$('.center').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    arrows:true,
    prevArrow: '<img class="prev1" src="img/arrow-left.png">',
    nextArrow: '<img class="next1" src="img/arrow-right.png">',
    dots: true,
    customPaging : function(slider, i) {
        return '<img src="img/slider-icon.png" /><img src="img/slider-icon-active.png" />';
    },
    variableWidth: false
});
$('.center').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log('beforeChange', currentSlide, nextSlide);
});
$('.center').on('afterChange', function (event, slick, currentSlide) {
    console.log('afterChange', currentSlide);
});
