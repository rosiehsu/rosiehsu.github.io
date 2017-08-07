$('#insert').on('click', function() {
    var data = {
        name: $('#InputProductName').val(),
        price: +$('#InputProductPrice').val(),
        count: +$('#InputProductCount').val(),
        image: $('#InputProductImage').val()
    }
    $.post("https://js2017-hw2.kchen.club/insert", data, function(response) {
        if (response) {
            if (response.result) {
                $('#message').text('新增成功');
            } else {
                $('#message').text('新增失敗 (' + response.data + ')');
            }
        } else {
            $('#message').text('新增失敗');
        }
        $('#dialog').modal('show');
        console.log(response);
    }, "json");
})

$('#query').on('click', function() {
    $.get("https://js2017-hw2.kchen.club/query", function(response) {
        if (response) {
            if (response.result) {
                $("#product-list").empty(); //先清空
                $("#b").empty();
                $li = $("<li>").addClass("page-item");
                $a = $("<a>").addClass("page-link").attr("aria-label", "Previous")
                $a.attr("href", "#")
                $span1 = $("<span>").attr("aria-hidden", "true").html("&laquo;");
                $span2 = $("<span>").addClass("sr-only").text("Previous");
                $a.append($span1);
                $a.append($span2);
                $li.append($a);
                $("#b").append($li);
                //li裡面包a <數字>

                for (var i = 0; i < Math.ceil(response.data.length / 10); i++) {

                    $li = $("<li>").addClass("page-item");
                    $a = $("<a>").addClass("page-link")
                    $a.text(i + 1);
                    $a.on("click", function() {
                        $("#product-list").empty();
                        var page = Number($(this).text());
                        for (var i = (page - 1) * 10; i < page * 10; i++) {
                            //從第一頁開始 1到9頁在第一頁
                            $title = $("<h3>").addClass("title");
                            $title.text(response.data[i].name);
                            $count = $("<a>").addClass("count");
                            $count.text("數量" + response.data[i].count)
                            $thumb = $("<img>").addClass("thumb")
                            $thumb.attr("src", response.data[i].image)
                            $price = $("<p>").addClass("price")
                            $price.text("價格" + response.data[i].price)
                            $col = $("<div>").addClass("col-*")

                            $item = $("<div>").addClass("item")
                            $item.append($thumb);

                            $item.append($title);
                            $item.append($price);
                            $item.append($count);
                            $col.append($item);
                            $("#product-list").append($col);
                        }
                        //col 之下包 item 用 append item 之下再包 img h3 p a(account)








                    });
                    $li.append($a)
                    $("#b").append($li);
                }

                $li = $("<li>").addClass("page-item");
                $a = $("<a>").addClass("page-link").attr("aria-label", "Previous")
                $span1 = $("<span>").attr("aria-hidden", "true").html("&raquo;");
                $span2 = $("<span>").addClass("sr-only").text("Next");
                $a.append($span1);
                $a.append($span2);
                $li.append($a);
                $("#b").append($li);


                for (var i = 0; i < 10; i++) {
                    $title = $("<h3>").addClass("title");
                    $title.text(response.data[i].name);
                    $count = $("<a>").addClass("count");
                    $count.text("數量" + response.data[i].count)
                    $thumb = $("<img>").addClass("thumb")
                    $thumb.attr("src", response.data[i].image)
                    $price = $("<p>").addClass("price")
                    $price.text("價格" + response.data[i].price)
                    $col = $("<div>").addClass("col-*")

                    $item = $("<div>").addClass("item")
                    $item.append($thumb);

                    $item.append($title);
                    $item.append($price);
                    $item.append($count);
                    $col.append($item);
                    $("#product-list").append($col);
                }
            } else {
                $('#message').text('查詢失敗 (' + response.data + ')');
                $('#dialog').modal('show');
            }
        } else {
            $('#message').text('查詢失敗');
            $('#dialog').modal('show');
        }
        console.log(response);
    }, "json");
})