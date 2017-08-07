// var r = Math.floor(Math.random() * 64);
// for (var i = 0; i < 6; i++) {
//     if (r / Math.pow(2, i) == 1)
//         $("#coin" + i).attr("src", "./正面.jpg")
//     else $("#coin" + i).attr("./css/塔羅牌背面.jpg")
// }





$('#deal').on('click', function() {
    // $('#data').empty();
    card = [];

    // on 桌上有六張牌   empty就是要先清空那些牌 令card=[]一個空間   for 把手上牌發出
    var website = ["01", "44", "13", "33", "10", "06", "25", "12", "09", "57", "37", "53", "61", "59", "42", "20", "14", "50", "30", "56", "38", "64", "21", "35", "26", "18", "22", "52", "41", "4", "27", "23", "43", "28", "49", "31", "58", "47", "17", "45", "5", "48", "63", "39", "60", "29", "3", "8", "34", "32", "55", "62", "54", "40", "51", "16", "11", "46", "36", "15", "19", "7", "24", "2"]
    var r = Math.floor(Math.random() * 64); //1-64random一個數

    // $("#test").attr("href", "http://www.ai5429.com/17/8x/000" + website[r] + ".htm");
    $('#test').on('click', function() {

        $("iframe").remove()
        $f = $("<iframe>").attr("src", "http://www.ai5429.com/17/8x/000" + website[r] + ".htm")
        $f.attr("width", "1600px");
        $f.attr("height", "1000px");
        $("#我是id").append($f)

    });
    //result的那個鈕可以連網址 連到random的數
    console.log(r); //把數字印出來
    $("#result").val(""); //清空 因為是用input class

    for (var i = 1; i < 7; i++) {
        //for 迴圈就是從做6次
        console.log(r / Math.pow(2, 6 - i)); //2的6次方
        if (r / Math.pow(2, 6 - i) >= 1) { //如果random出來的r 
            //先判斷要如何比2的5次方還大還小 
            //如果還大的話就可以除
            $("#coin" + i).attr("src", "./js/正面.jpg");
            $("#result").val($("#result").val() + "正");
            //val 是只有input這樣  其他用append
            r = r - Math.pow(2, 6 - i); //長除法 如63除5=(63-5*10)=13 13再除5的感覺
        } else { //判斷若比2次方還小   就印反
            $("#coin" + i).attr("src", "./css/塔羅牌背面.jpg");
            $("#result").val($("#result").val() + "反")
        }
        $("#coin" + i).attr("width", "171px");
        $("#coin" + i).attr("height", "294px");

        $("#coin" + i).rotate({
            bind: {
                click: function() {
                    $(this).rotate({
                        angle: 0,
                        animateTo: 180
                    })
                }
            }
        })
    }

});



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






/*$('.col>img').rotate({
    duration: 6000,
    angle: 0,
    animateTo: 3600
})*/