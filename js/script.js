jQuery(document).ready(function ($) {
    $('#lightSlider').lightSlider({
        item: 1,
    });

    $('#prevSl').click(function () {
        slider.goToPrevSlide();
    });
    $('#nextSl').click(function () {
        slider.goToNextSlide();
    });


});
