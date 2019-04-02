var FlyWeight={
    moveX:function(x){
        this.x=x;
    },
    moveY:function (y) {
        this.y=y;
    }
}

var Player=function (x,y,c) {
    this.x=x;
    this.y=y;
    this.c=c;
}
Player.prototype=Flyweight;
Player.prototype.changeC=function(c){
    this.c=c;
}

var Spirit=function (x,y,r) {
    this.x=x;
    this.y=y;
    this.r=r;
}
Spirit.prototype=Flyweight;
Spirit.prototype.changeR=function(r){
    this.r=r;
}

var player1=new Player(5,6,'red');

player1.moveX(5);
player1.moveY(7);
player1.changeC('white')