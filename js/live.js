addLoadEvent(function(){
    var headers=document.getElementsByTagName('header');
    if(headers.length==0) return false;
    headers[0].style.background='#334 url(img/bassist.gif) no-repeat right bottom';
    //设置奇数行的颜色
    var table=document.getElementsByTagName('table')[0];
    var tr=table.getElementsByTagName('tr');
    var odd=false;
    for(var j=0;j<tr.length;j++){
        if(odd==true){
            addClass(tr[j],'odd');
            odd=false;
        }else{
            odd=true;
        }
        //td的高亮显示
        tr[j].oldClassName=tr[j].className;
        tr[j].onmouseover=function(){
            addClass(this,'highlight');
        };
        tr[j].onmouseout=function(){
            this.className=this.oldClassName;
        }
    }





    //显示abbr的title值
    var abbr=table.getElementsByTagName('abbr');
    var p=document.createElement('p');
    p.style.fontSize='16px';
    var txt=document.createTextNode('Abbreviations');
    p.appendChild(txt);
    var dl=document.createElement('dl');
    for(var i=0;i<abbr.length;i++){
        var Abbreviations=abbr[i].firstChild.nodeValue;
        var title=abbr[i].getAttribute('title');
        var dt=document.createElement('dt');
        var text1=document.createTextNode(Abbreviations);
        dt.appendChild(text1);
        dl.appendChild(dt);
        var dd=document.createElement('dd');
        var text2=document.createTextNode(title);
        dd.appendChild(text2);
        insertAfter(dd,dt);
    }
    insertAfter(p,table);
    insertAfter(dl,p);














});