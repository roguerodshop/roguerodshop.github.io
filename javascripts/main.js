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

            var imgHeight = $image.height(),
                imgWidth = $image.width(),
                imgRatio = imgWidth / imgHeight,
                modalImgMinHeight = (280 / imgRatio) - 20

            $modalImage.css('min-height', modalImgMinHeight)

            function responsiveAdjustImageSize() {

                var windowHeight = $(window).height(),
                    windowWidth = $(window).width(),
                    windowRatio = windowWidth / windowHeight

                if (windowRatio >= imgRatio) {
                    $modalImage.addClass('over-square')
                    $('.pm-body').addClass('over-square')
                } else {
                    $modalImage.removeClass('over-square')
                    $('.pm-body').removeClass('over-square')
                }
            }

            $(window).resize(function() {
                responsiveAdjustImageSize()
            });

            responsiveAdjustImageSize()

        }

        adjustImageSize()


    });





});
