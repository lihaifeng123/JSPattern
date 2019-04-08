var throttle=function(){
    //  获取第一个参数
    var isclear=arguments[0],fn;
    //  如果第一个参数是boolean类型的就表示是否清楚定时器
    if(typeof isclear==='boolean'){
        //  第二个参数为函数
        fn=arguments[1];
        //  函数的定时器句柄存在，去除该定时器
        fn._throttleID&&clearTimeout(fn._throttleID);
        //  通过定时器延迟执行
    }else{
        //  第一次参数为函数
        fn=isclear;
        //  第二个参数为函数执行时的参数
        param=arguments[1];
        //  对执行时的参数适配默认值，这里我们用到以前的extend方法
        var p=extend({
            context:null,   //执行函数执行时的作用域
            args:[],//  执行函数执行时的相关参数(IE下要为数组)
            time:300//  执行函数延迟的时间
        },param);
        //  去除函数执行计时器句柄
        arguments.callee(true,fn);
        //  为函数绑定计时器句柄，延迟执行
        fn._throttleID=setTimeout(function(){
            //  执行函数
            fn.apply(p.context,p.args);
        },p.time);
    }
}
//////////////////////////////////////////////
function movescroll(){
    var top=$(document).scrollTop();
    $('#back').aimate({top:top+300},400,'ease-outcubic');
}
$(window).on('scroll',function(){
    //  节流执行返回顶部
    throttle(movescroll);
})