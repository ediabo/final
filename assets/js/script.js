$(function() {

    $('[data-toggle="tooltip"]').tooltip()

    $('.carousel').carousel({
        interval: 2000
    });

    $("a").click(function(event) {
        debugger
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $(hash).css('padding-top', '74px')
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                window.location.hash = hash;
            });
        }
    });
});