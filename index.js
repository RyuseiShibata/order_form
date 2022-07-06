

$(function () {
    // カレンダー
    $(function () {
        $('input[name="input_date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });
});

$(function valueChange(event){
    let checkValue = $('input[name="num"]:checked').val();
    let input = $('input[name="input_num"]').val();
    if(checkValue == 0 || checkValue == 1){
        input.disabled = true;
    };
});


$(function () {
    // 送信
    $('form').submit(function () {
        let item_name = $('input[name="item_name"]').val();
        let num;
        let date;
        let note = document.getElementById("note").value;;
        
        //個数について
        if($('input[name="num"]:checked').val()== 0){
            num = "いつもの個数";
        }
        else if($('input[name="num"]:checked').val()== 1){
            num = "最小ロット";
        }else{
            num = $('input[name="input_num"]').val();
        }

        //納期について
        if($('input[name="date"]:checked').val()== 0){
            num = "急ぐ";
        }
        else if($('input[name="date"]:checked').val()== 1){
            num = "急がない";
        }else{
            num = $('input[name="input_date"]').val();
        }
            
        let msg = `【注文内容】\n 商品名：${item_name}\n 個数：${num}\n 納期： ${date}\n 備考： ${note}`;
        sendText(msg);

        return false;
    });
});