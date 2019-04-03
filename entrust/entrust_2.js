$.get("./deal.php?q=banner",function(res){
    // Action Banner;
});
$.get("./deal.php?q=side",function(res){
    // Action Side;
});
$.get("./deal.php?q=article",function(res){
    // Action Article;
});
$.get("./deal.php?q=member",function(res){
    // Action Member;
});
$.get("./deal.php?q=message",function(res){
    // Action Message;
});
///////////////////////////////////////////////////////////////////////////////
var Deal={
    banner:function(res){
        // Action Banner;
    },
    side:function(res){
        // Action Side;
    },
    article:function(res){
        // Action Article;
    },
    member:function(res){
        // Action Member;
    },
    message:function(res){
        // Action Message;
    }
}
$.get('./deal.php?',function(res){
    //  数据拆分
    for(var i in res){
        Deal[i]&&Deal[i](res[i]);
    }
});