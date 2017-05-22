addLoadEvent(function(){
    //导航栏的高亮显示
    var nav=document.getElementById('navigation');
    var links=nav.getElementsByTagName('a');
    for(var i=0;i<links.length;i++){
        var linkurl=links[i].getAttribute('href');
        if(window.location.href.indexOf(linkurl)!=-1){
            addClass(links[i],'here');
        }
    }























});





























