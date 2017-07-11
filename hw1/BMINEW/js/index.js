{
    var h = $('#height').val()
    var f = $('#weight').val()
    h = Number(h) / 100
    w = Number(w)
    bmi = w / (h * h)
    $('#result').val(bmi)

    console.log('height:' + h);
    console.log('weight:' + w);
    console.log('BMI:' + bmi)
}