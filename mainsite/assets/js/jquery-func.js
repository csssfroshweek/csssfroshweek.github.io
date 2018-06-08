! function ($) {
    //=================================== scroll  ===================================//

    $body.scrollspy({
        target: '#navbar-main',
        offset: navHeight
    })

    $window.on('load', function () {
        $.ready.then(function(){
            $body.scrollspy('refresh')
        })
    })

    $('#navbar-main [href=#]').click(function (e) {
        e.preventDefault()
    })
};