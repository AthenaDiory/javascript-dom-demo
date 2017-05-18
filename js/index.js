addLoadEvent(function(){
    //图片展示功能
    var header=document.getElementsByTagName('header')[0];
    header.style.background='#334 url(img/guitarist.gif) no-repeat right bottom';
    var intro=document.getElementById('intro');
    var slideshow=document.createElement('div');
    slideshow.setAttribute('id','slideshow');
    var frame=document.createElement('img');
    frame.setAttribute('id','frame');
    frame.setAttribute('src','img/slideshow.gif');
    slideshow.appendChild(frame);
    insertAfter(slideshow,intro);
    var links_a=document.getElementsByTagName('a');
    for(var j=0;j<links_a.length;j++){
        links_a[j].onmouseover=function(){
            var curr_index=this.getAttribute('index');
            if(curr_index){
                var curr_pos=-curr_index*150;
                moveElem('frame',curr_pos,0,5);
            }
        }
    }




















});