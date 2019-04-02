//  图片轮播类
var LoopImages=function (imgArr,container) {
    this.imageArray=imgArr;  //  轮播图片数组
    this.container=container; //  轮播图片容器
}
LoopImages.prototype={
    createImage:function () {
        console.log("LoopImages createImage function");
    },
    changeImage:function () {
        console.log("LoopImages changeImage function");
    }
}
//  上下滑动切换类
var SlideLoopImg=function (imgArr,container) {
    LoopImages.call(this,imgArr,container);
}
SlideLoopImg.prototype=new LoopImages();
SlideLoopImg.prototype.changeImage=function () {
    console.log("SlideLoopImg changeImage function")
}

//  渐隐切换类
var FadeLoopImg=function (imgArr,container,arrow) {
    LoopImages.call(this,imgArr,container);
    this.arrow=arrow; 
}
FadeLoopImg.prototype=new LoopImages();
FadeLoopImg.prototype.changeImage=function () {
    console.log("FadeLoopImg changeImage function");
}

//测试用案例
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