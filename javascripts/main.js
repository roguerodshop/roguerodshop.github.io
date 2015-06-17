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
                    windowRatio = windowWidth / windowHeight,
                    marginTop = Math.round((windowHeight - $modalImage.height()) / 3);

                if (marginTop <= 0) {
                    marginTop = 0;
                }

                if (windowRatio >= imgRatio) {
                    $modalImage.addClass('over-square')
                    $modalImage.css('height', windowHeight - 45)
                    $('.pm-body').addClass('over-square')
                    $('.pm-body').css('margin-top', 2)
                } else {
                    $modalImage.removeClass('over-square')
                    $modalImage.css('height', 'auto')
                    $('.pm-body').removeClass('over-square')
                    $('.pm-body').css('margin-top', marginTop)
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
