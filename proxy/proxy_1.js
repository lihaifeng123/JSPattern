//  统计代理
var Count=(function () {
    //  缓存照片
    var img=new Image();
    return function (params) {
        //  统计请求字符串
        var str='http://www.***.com/a.gif';
        for(var i in params){
            str+=i+'='+params[i];
        }
        //  发送统计请求
        _img.src=str;
    }
})();
Count({num:10});

