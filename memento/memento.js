//  Page备忘录
var Page=function(){
    //  信息缓存
    var cache={};
    return function(page,fn){
        //  判断缓存中是否有该数据
        if(cache[page]){
            //  显示该页数据
            showPage(page,cache[page]);
            fn&&fn();
        }else{
            //  请求数据
            $.post('../data/getNewData',{
                page:page,
            },function(res){
                if(res.errNo==0){
                    //  显示该页数据
                    showPage(page,res.data);
                    //  把该页数据缓存到缓冲里面
                    cache[page]=res.data;
                    //  执行成功回调函数
                    fn&&fn();
                }else{
                    //  处理异常
                }
            })
        }
    }
}();

$('#next_page').click(function(){
    //  获取新闻内容
    var $news=$('#news_content');
        page=$news.data('page');
    //  获取并显示新闻
    Page(page,function(){
        $news.data('page',page+1);
    });
});