$(document).ready(function() {
    $('.pgwSlideshow').pgwSlideshow();

    var $modalImage

    $('.ps-current ul li img').on('click', function() {
        var $image = $(this)
        var src = $image.attr('src').replace(/\/images\/.*\//, '').replace(/\..*/, '');
        var id = '#' + src + '-modal'
        $.pgwModal({
            target: id,
            titleBar: false,
            maxWidth: 2000
        });

        $modalImage = $('.pm-container .pm-body .pm-content img')

        function adjustImageSize() {
            var windowHeight = $(window).height(),
                windowWidth = $(window).width(),
                windowRatio = windowWidth / windowHeight,
                imgHeight = $image.height(),
                imgWidth = $image.width(),
                imgRatio = imgWidth / imgHeight
            if (windowRatio >= imgRatio) {
                var imageContainerWidth = (windowHeight * 0.95 * imgRatio) + 20
                $('.pm-body').css('width', imageContainerWidth)
                $modalImage.addClass('over-square')
            } else {
                $('.pm-body').css('width', '95%')
                $modalImage.removeClass('over-square')
            }
        }

        adjustImageSize()

        $(window).resize(function() {
            adjustImageSize()
        });

    });





});
