addLoadEvent(function(){
    var headers=document.getElementsByTagName('header');
    if(headers.length==0) return false;
    headers[0].style.background='#334 url(img/basshead.gif) no-repeat right bottom';
    var p=document.createElement('p');
    var txt=document.createTextNode('Choose an image');
    p.appendChild(txt);
    var img=document.createElement('img');
    img.setAttribute('src','img/placeholder.gif');
    img.style.border='solid 1px #999';
    var photo_ul=document.getElementById('photo_ul');
    var links=photo_ul.getElementsByTagName('a');
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            var title=this.getAttribute('title');
            var href=this.getAttribute('href');
            p.firstChild.nodeValue=title;
            img.setAttribute('src',href);
            return false;
        }
    }
    insertAfter(p,photo_ul);
    insertAfter(img,p);












});





















