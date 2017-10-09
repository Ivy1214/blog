//验证浏览器是否支持localStorage
if(window.localStorage){
    var store = window.localStorage;
}else{
    alert('您的浏览器不支持localStorage');
}

//初始化，localStorage中的数据显示
function init(){
    var i;
    for(i in store){
        var key = store.getItem(i);
        //console.log(tkey);
        $("#msg").append('<li class="textList">'+'<a href="#" onclick="liclick(this)">'+key+'</a>'+'</li>');
    }
}

//查看日志时,显示日志标题
function liclick(obj) {
    // alert(obj);
    $('a').parent().hide();
    $('#list-group-titleName').append('<span class="daily_title">'+obj.innerText+'</span>'+'<br>'+'<textarea class="form-control text-content" id="textArea" rows="28" style="background-color: #3c3c3c"; readonly>'+'</textarea>'
        +'<br>'+'<a>'+'编辑'+'</a>'+'<a>'+'删除'+'</a>'+'<a class="backClass" href="dailyList.html">'+'返回'+'</a>');
}

//向localStorage中添加数据(dailyList日志标题)
function dailySubBtn(){
    var i = store.length;
    var ii = i+1;
    var textName = $('#textTitle').val();
    var textArea = $('#textArea').val();
    if(textName.length !== 0 && textArea.length !== 0){
        store.setItem(ii,textName);
        //  store.setItem(textName,textArea);
        self.location='dailyList.html';
    }else{
        alert('请输入文章标题和文章内容');
    }
}

function dailydelBtn(){
    //删除
    $('#dailySubBtn').on('click',function(){
        var val1 = $('#textTitle').text();
        var val2 = $('#textArea').text();
        //删除指定的内容
        store.removeItem(val1);
        store.removeItem(val2);
        //删除全部内容
        //store.clear();
        //$(this).parents('tr').remove();
    })


}