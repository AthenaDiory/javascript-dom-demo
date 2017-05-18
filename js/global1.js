//添加多个预加载函数
function addLoadEvent(fn){
    var oldLoad=window.onload;
    if(typeof oldLoad!='function'){
        window.onload=fn;
    }else{
        window.onload=function(){
            oldLoad();
            fn();
        }
    }
}

//获取计算后的样式
function getStyle(id,attr){
    if(typeof window.getComputedStyle!='undefiend'){ //w3c
        return window.getComputedStyle(id,null)[attr];
    }else if(typeof id.currentStyle!='undefined'){ //IE
        return id.style.currentStyle[attr];
    }
}

//动画移动效果
function moveElem(elementID,final_x,final_y,interval){
    var elem=document.getElementById(elementID);
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    if(!elem.style.left){
        elem.style.left='0px';
    }
    if(!elem.style.top){
        elem.style.top='0px';
    }
    var xpos=parseInt(getStyle(elem,'left'));
    var ypos=parseInt(getStyle(elem,'top'));
    var dist=0;
    var repeat='moveElem("'+elementID+'",'+final_x+','+final_y+','+interval+')';
    elem.movement=setTimeout(repeat,interval);
    if(xpos==final_x&&ypos==final_y){
        clearTimeout(elem.movement);
    }
    if(xpos<final_x){
        dist=Math.ceil((final_x-xpos)/10);
        xpos+=dist;
    }
    if(xpos>final_x){
        dist=Math.ceil((xpos-final_x)/10);
        xpos-=dist;
    }
    if(ypos<final_y){
        dist=Math.ceil((ypos-final_y)/10);
        ypos+=dist;
    }
    if(ypos>final_y){
        dist=Math.ceil((final_y-ypos)/10);
        ypos-=dist;
    }
    elem.style.left=xpos+'px';
    elem.style.top=ypos+'px';
}


//inserAfter函数
function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastChild==newElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

//添加类
function addClass(element,attr){
    if(!element.className){
        element.className=attr;
    }else{
        if(element.className==attr){
            return true;
        }else{
            element.className+=' '+attr;
        }

    }
}































































