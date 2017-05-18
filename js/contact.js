addLoadEvent(function(){
    var headers=document.getElementsByTagName('header');
    if(headers.length==0) return false;
    headers[0].style.background='#334 url(img/drummer.gif) no-repeat right bottom';

    //label标签的for属性失效的情况下，相应的表单字段获取焦点
    var labels=document.getElementsByTagName('label');
    if(labels.length==0) return false;
    for(var i=0;i<labels.length;i++){
        labels[i].onclick=function(){
            var id=this.getAttribute('for');
            document.getElementById(id).focus();
        }
    }

    var forms=document.getElementsByTagName('form');
    for(var j=0;j<forms.length;j++){
        for(var k=0;k<forms[j].elements.length;k++){
            var element=forms[j].elements[k];
            if(element.type=='submit') continue;
            var check=element.placeholder||element.getAttribute('placeholder');
            if(!check) continue;
            element.onfocus=function(){
                var text=this.placeholder||this.getAttribute('placeholder');
                if(this.value==text){
                    this.value='';
                    this.className=''
                }
            };
            element.onblur=function(){
                var text=this.placeholder||this.getAttribute('placeholder');
                if(this.value==''){
                    this.value=text;
                    this.className='placeholder';
                }
            };
            element.onblur();
            //增强required属性
            

        }
    }
















});





















