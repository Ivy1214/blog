//显示留言板输入框
function showInput(){
    $('.write').css('display','block');
}

//验证浏览器是否支持sessionStorage
if(window.sessionStorage){
    var store = window.sessionStorage;
}else{
    alert('您的浏览器不支持sessionStorage');
}

//初始化，sessionStorage中的数据显示

var init = function(){
    var i;
    for(i in store){
        var key = store.getItem(i);
        //console.log(key);
        $("#msg").append('<hr class="msgHr"/>'+'<span>'+'❤️'+'</span>'+'<span class="msgText">'+key+'<span onclick="delMsg()" class="delSpan">'+'删除'+'</span>'+'</span>');
    }
}
//向sessionStorage中添加数据
function addMsg(){
    var i = store.length;
    var ii = i+1;
    var textArea = $('#textArea').val();
    if(textArea.length !== 0){
        store.setItem(ii,textArea);
        self.location='message.html';
    }else{
        alert('留言不能为空！');
    }
}

//删除该条留言
function delMsg(key){
    console.log(key);
    //store.removeItem(obj);
}

//隐藏留言板输入框
function cancleInput(){
    $('.write').css('display','none');
}



