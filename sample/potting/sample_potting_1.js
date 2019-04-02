var Book=function(id,name,price){
    //  私有属性
    var num=1;
    //  私有方法
    function checkId() {
        
    };
    //  特权方法
    this.getName=function (params) {
    }
    this.getPrice=function (params) {
    }
    //  公有属性
    this.id='';
    //  公有方法
    this.copy=function (params) {
    }
    //  构造器
    this.setName(name);
    this.setPrice(price)
}

//  类的静态公有属性
Book.isChinese=true;
//  类的静态公有方法
Book.resetTime=function (params) {
    console.log(params);
}
Book.prototype={
    //  公有属性
    isJBook:false,
    //  公有方法
    display:function (params) {
    }
}
/**
 * 新对象的prototype和类的prototype指向同一个对象
 */
var book=new Book('123','lhf','123');
book.getName();