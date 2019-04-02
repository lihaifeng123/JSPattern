//  获取兄弟元素名称
function getSublingName(node){
    //  如果存在兄弟元素
    if(node.previousSibling){
        var name='',
            count=1,
            nodeName=node.nodeName,
            sibling=node.previousSibling;
        //  如果存在前一个兄弟元素
        while(sibling){
            //  如果节点为元素
            if(sibling.nodeType==1&&sibling.nodeType==node.nodeType&&
                sibling.nodeName){
                    //  如果节点名称和前一个兄弟元素名称相同
                    if(nodeName==sibling.nodeName){
                        //  节点名称后面添加计数
                        name+=++count;
                    }else{
                        //  重置相同邻节点名称节点个数
                        count=1;
                        name+='|'+slibling.nodeName.toUpperCase();
                    }
                }
                //  向前获取前一个兄弟元素
                sibling=sibling.previousSibling;

        }
        return name;
    }else{
        //  否则不存在兄弟节点返回''
        return '';
    }
}

//  XPath解释器
var Interpreter=(function(){
    //  获取兄弟元素名称
    function getSublingName(node){
        //  如果存在兄弟元素
        if(node.previousSibling){
            var name='',
                count=1,
                nodeName=node.nodeName,
                sibling=node.previousSibling;
            //  如果存在前一个兄弟元素
            while(sibling){
                //  如果节点为元素
                if(sibling.nodeType==1&&sibling.nodeType==node.nodeType&&
                    sibling.nodeName){
                        //  如果节点名称和前一个兄弟元素名称相同
                        if(nodeName==sibling.nodeName){
                            //  节点名称后面添加计数
                            name+=++count;
                        }else{
                            //  重置相同邻节点名称节点个数
                            count=1;
                            name+='|'+slibling.nodeName.toUpperCase();
                        }
                    }
                    //  向前获取前一个兄弟元素
                    sibling=sibling.previousSibling;

            }
            return name;
        }else{
            //  否则不存在兄弟节点返回''
            return '';
        }
    }
    //  node:目标节点
    //  wrap:容器节点
    return function(node,wrap){
        //  路径组数
        var path=[],
            // 如果不存在容器节点，默认为document
            wrap=wrap||document;
        //  如果 当前（目标节点等于容器节点）
        if(node===wrap){
            //  容器节点为元素
            if(wrap.nodeType==1){
                //  路径数组中输入容器节点名称
                path.push(wrap.nodeName.toUpperCase());
            }
            //  返回最后路径数组结果
            return path;
        }
        //  如果当前节点的父节点不等于容器节点
        if(node.parentNode!=wrap){
            //  对当前节点的父元素节点执行遍历
            path=arguments.callee(node.parentNode,wrap);
        }
        //  如果当前节点的父节点与容器节点相同
        else{
            //  容器节点为元素
            if(wrap.nodeType==1){
                path.push(wrap.nodeName.toUpperCase());
            }
        }
        //  获取元素的兄弟元素名称统计
        var sublingsNames=getSublingName(node);
        //  如果节点为元素
        if(node.nodeType== 1){
            //  输入当前节点元素名称和其前面兄弟元素名称统计
            path.push(node.nodeName.toUpperCase()+sublingsNames);
        }
        return path;
    }
})();

//EG:
var path=Interpreter(document.getElementById('span7'));
console.log(path.join('>'));