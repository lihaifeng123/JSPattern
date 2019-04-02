var LazySingle=(function () {
    var _instance=null;
    function Single() {
        return{
            publicMethod:function () { },
            publicProperty:'1.0'
        }
    }
    //获取单例对象接口
    return function () {
        if(!_instance){
            _instance=Single();
        }
        return _instance;
    }
})();

console.log(LazySingle().publicProperty);