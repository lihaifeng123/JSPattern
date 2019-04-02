//  抽象工厂方法
var VehicleFactory=function (subType,supType) {
    //  判断该工厂中是否存在该抽象类
    if(typeof VehicleFactory[supType]==='function'){
        //  缓存类
        function F() {
        };
        //  继承父属性和方法
        F.prototype=new VehicleFactory[supType]();
        //  把子类constructor指向子类
        subType.constructor=sunType;
        //  子类原型继承父类
        subType.prototype=new F();
    }else{
        throw new Error('未创建该类型');
    }
}
VehicleFactory.Car=function () {
    this.type='car';
}
VehicleFactory.Car.prototype={
    getPrice:function () {
        return new Error('Cant to use');
    },
    getSpeed:function () {
        return new Error('Cant to use');
    }
}

VehicleFactory.Bus=function () {
    this.type='bus';
}
VehicleFactory.Bus.prototype={
    getPrice:function () {
        return new Error('Cant to use');
    },
    getSpeed:function () {
        return new Error('Cant to use');
    }
}

VehicleFactory.Truck=function () {
    this.type='truck';
}
VehicleFactory.Truck.prototype={
    getPrice:function () {
        return new Error('Cant to use');
    },
    getSpeed:function () {
        return new Error('Cant to use');
    }
}


var BMW=function (price,speed) {
    this.price=price;
    this.speed=speed;
}
VehicleFactory(BMW,'Car');
BMW.prototype.getPrice=function () {
    return this.price;
}
BMW.prototype.getSpeed=function () {
    return this.speed;
}

var Lamborghini=function (price,speed) {
    this.price=price;
    this.speed=speed;
}
VehicleFactory(Lamborghini,'Car');
Lamborghini.prototype.getPrice=function () {
    return this.price;
}
Lamborghini.prototype.getSpeed=function () {
    return this.speed;
}

var bmw=new BMW(120,200);
console.log(bmw.type);
console.log(bmw.getPrice());