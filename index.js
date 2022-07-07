

$(function () {
    // カレンダー
    $(function () {
        $('input[name="input_date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });
});

function sendForm() {
    console.log("送信完了");
        let item_name = $('input[name="item_name"]').val();
        let num;
        let date;
        let note = document.getElementById("note").value;
        
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
            date = "急ぐ";
        }
        else if($('input[name="date"]:checked').val()== 1){
            date = "急がない";
        }else{
            date = $('input[name="input_date"]').val();
        }
            
        let msg = `【注文内容】\n 商品名：${item_name}\n 個数：${num}\n 納期：${date}\n 備考：${note}`;
        sendText(msg);

        return false;
}
/*
$(function () {
    // 送信
    $("form").submit(function () {
        let item_name = $('input[name="item_name"]').val();
        let num;
        let date;
        let note = document.getElementById("note").value;
        
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
            date = "急ぐ";
        }
        else if($('input[name="date"]:checked').val()== 1){
            date = "急がない";
        }else{
            date = $('input[name="input_date"]').val();
        }
            
        let msg = `【注文内容】\n 商品名：${item_name}\n 個数：${num}\n 納期：${date}\n 備考：${note}`;
        sendText(msg);
        console.log("u-");

        return false;
    });
});
*/

var i = 1;

function addForm() {
    console.log(i);
    // 複製するHTML要素を取得
    var content_area = document.getElementById(`form_${i-1}`);

    // 複製
    var clone_element = {};
    clone_element[i] = content_area.cloneNode(true);
   
    // 複製した要素の属性を編集
    clone_element[i].id = `form_${i}`;

    // 複製したHTML要素をページに挿入
    content_area.after(clone_element[i]);

    i++;
};

/*
//「数値入力」以外のラジオボタンが選択されているときは数値入力をdisableに
function num_flg0(ischecked){
    if(ischecked == true){
        clone_element[i].querySelector("#input_num").disabled = true;
        //document.getElementById(`input_num`).disabled = true;
    }
}

function num_flg1(ischecked){
    if(ischecked == true){
        document.getElementById(`input_num`).disabled = true;
    }
}

function num_flg2(ischecked){
    if(ischecked == true){
        document.getElementById(`input_num`).disabled = false;
    } else {
        document.getElementById(`input_num`).disabled = true;
    }
}

//「日付入力」以外のラジオボタンが選択されているときは日付入力をdisableに
function date_flg0(ischecked){
    if(ischecked == true){
        document.getElementById("input_date").disabled = true;
    }
}

function date_flg1(ischecked){
    if(ischecked == true){
        document.getElementById("input_date").disabled = true;
    }
}

function date_flg2(ischecked){
    if(ischecked == true){
        document.getElementById("input_date").disabled = false;
    } else {
        document.getElementById("input_date").disabled = true;
    }
}
*/
