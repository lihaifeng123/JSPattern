var LoopImages=function (imgArr,container) {
    this.imgArray=imgArr;   //  轮播图片数组
    this.container=container;   //  轮播图片容器
    this.createImage=function () { };   //  创建轮播图片
    this.changeImage=function () { };   //  切换下一张图片
}

//  上下滑动切换类
var SlideLoopImg=function (imgArr,container) {
    //  继承图片轮播类
    LoopImages.call(this,imgArr,container);
    //  重写继承的切换下一张图片方法
    this.changeImage=function () {
        console.log("SlideLoopImage changeImage function");
    }
}
//  渐隐切换类
var FadeLoopImg=function (imgArr,container,arrow) {
    //  继承图片轮播类
    LoopImages.call(this,imgArr,container);
    this.arrow=arrow;

    //  重写继承的切换下一张图片方法
    this.changeImage=function () {
        console.log("FadeLoopImg changeImage function");
    }
}

var fadeImg=new FadeLoopImg([
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg'
],'slide',[
    'left.jpg',
    'right.jpg'
]);
fadeImg.changeImage();