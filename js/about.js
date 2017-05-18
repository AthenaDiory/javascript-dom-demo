addLoadEvent(function(){
    var header=document.getElementsByTagName('header')[0];
    header.style.background='#334 url(img/lineup.gif) no-repeat right bottom';
    var jay=document.getElementById('jay');
    var domsters=document.getElementById('domsters');
    //展示section
    var articles=document.getElementsByTagName('article');
    if(articles.length==0) return false;
    var navs=articles[0].getElementsByTagName('nav');
    if(navs.length==0) return false;
    var links=navs[0].getElementsByTagName('a');
    if(links.length==0) return false;
    for(var i=0;i<links.length;i++){
        var sectionId=links[i].getAttribute('href').split('#')[1];
        links[i].destination=sectionId;
        document.getElementById(sectionId).style.display='none';
        links[i].onclick=function(){
            showSection(this.destination);
            return false;
        }
    }


    function showSection(id){
        var sections=document.getElementsByTagName('section');
        for(var i=0;i<sections.length;i++){
            if(sections[i].getAttribute('id')!=id){
                sections[i].style.display='none';
            }else{
                sections[i].style.display='block';
            }
        }
    }








});


























