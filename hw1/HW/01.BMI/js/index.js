$('button').on('click', function() {

    var w = $('#weight').val()

    var h = $('#height').val()

    w = Number(w)

    h = Number(h)

    hh = h - w

    BIAS = hh / w

    $('#result').val(BIAS)
})