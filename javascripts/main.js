$(document).ready(function() {
    $('.pgwSlideshow').pgwSlideshow();

    $('.ps-current ul li img').on('click', function() {
        var src = $(this).attr('src').replace(/\/images\/.*\//, '').replace(/\..*/, '');
        console.log(src)
        $.pgwModal({
            target: '#' + src + '-modal',
            titleBar: false,
            maxWidth: 2000
        });
    });

});
