$('button').on('click', function() {

    var w = $('#weight').val()

    var h = $('#height').val()

    w = Number(w)

    h = Number(h)

    hh = h - w

    BIAS = hh / w

    $('#result').val(BIAS)
})

$("a[href='#我是id']").click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});