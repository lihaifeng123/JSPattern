var Book=(function () {
    //  静态私有属性
    var bookNum=0;
    //  静态私有方法
    function checkBook(params) {
        
    };
    return function (newId,newName,newPrice) {
        //  私有属性
        var name,price;
        //  私有方法
        function checkID(id) {
        };
        //  特权方法
        this.getName=function () {
        };
        this.getPrice=function () {
        };
        this.setName=function (params) {
        };
        this.setPrice=function (params) {
        };
        //  公有属性
        this.id=newId;
        //  公有方法
        this.copy=function (params) {
        };
        bookNum++;
        if(bookNum>100)
            throw new Error("我们仅仅出版100本书");
        //  构造器
        this.setName(newName);
        this.setPrice(newPrice);
    }
})();
Book.prototype={
    //  静态公有属性
    isJBook:false,
    //  静态公有方法
    display:function (params) {
    }
}