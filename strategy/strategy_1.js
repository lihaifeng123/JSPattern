//  价格策略对象
var PriceStrategy=function(){
    //  内部算法对象
    var strategy={
        //  100返回30
        return30:function(price){
            return +price+parseInt(price/100)*30;
        },
        return50:function(price){
            return +price+parseInt(price/100)*50;
        },
        percent90:function(price){
            return +price+parseInt(100/90)/10000;
        },
        percent80:function (price) {
            return price*100*80/10000;
        },
        percent50:function(price){
            return price*100*50/10000;
        }
    }
    //  策略算法调用
    return function(algorithm,price){
        return strategy[algorithm]&&strategy[algorithm](price);
    }
}

var price=PriceStrategy('return50','314.67');