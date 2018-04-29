//跨浏览器注册事件
function addEvent (obj,type,fn) {
    if (typeof obj.addEventListener!='undefined'){
        obj.addEventListener(type,fn,false);
    }
    else if (typeof obj.attachEvent!='undefined'){
        obj.attachEvent('on'+type,fn);
    }
}
//跨浏览器获取元素

function get (str) {
    if (str.charAt(0)=='#') {
       var str1=str.slice(1);
        return (document.getElementById(str1));
    }
    if (str.charAt(0)=='.') {
        var str2=str.slice(1);
        return (document.getElementsByClassName(str2));
    }
    return (document.getElementsByTagName(str));
}

//顶部移动函数
function move () {
var i=get ('#tu1');
 var j=get ('#tu2');
 var timer1=null;
 var timer2=null;
var header=get ('#header');
var l=Math.round(header.clientWidth/2);

timer1=setInterval(function () {
    i.style.left=i.offsetLeft+2+'px';
     if (i.offsetLeft>=l-374){
               clearInterval(timer1);
}
   },20);
    timer2=setInterval(function () {
          j.style.left=j.offsetLeft-2+'px';
          if (j.offsetLeft<=l+75) {
            clearInterval(timer2);
 };
   },20);}



    //li移动变换事件
    function li_mouse () {
var arry=
[
    'url("image/tua.png")',
    'url("image/tub.png")',
    'url("image/tuc.png")',
    'url("image/tud.png")',
    'url("image/tue.png")',
    'url("image/tuf.png")',
    'url("image/tug.png")',
    'url("image/tuh.png")',
    'url("image/tui.png")',
]
var li=get('li');
var tu=get('#tu');
var wenzi=get('span');
wenzi[0].style.display='inline';
//定时变换
var ul=get("#ul");
var j=0;
var fn=function(){
for (var i=0,l=wenzi.length;i<l;i++)
{
    wenzi[i].style.display='none'; 
    li[i].style.opacity='0.5';
li[i].style.fliter='alpha(opacity=50)';
}
wenzi[j].style.display='inline';
tu.style.backgroundImage=arry[j];
li[j].style.opacity='1';
li[j].style.fliter='alpha(opacity=100)';
j++;
if(j==8){j=0;};
};
var timer=setInterval(fn,2000);

ul.onmouseover=function() {
    clearInterval(timer);

};
ul.onmouseout=function() {
  timer=setInterval(fn,3000);
}

//鼠标变换
  li[0].onmouseover =function () {
    clearInterval(timer);
for (var i=0,l=wenzi.length;i<l;i++)
{
    wenzi[i].style.display='none'; 
     li[i].style.opacity='0.5';
li[i].style.fliter='alpha(opacity=50)';
}
wenzi[0].style.display='inline';
tu.style.backgroundImage=arry[0];
li[0].style.opacity='1';
li[0].style.fliter='alpha(opacity=100)';
};

li[1].onmouseover =function () {
    clearInterval(timer);
for (var i=0,l=wenzi.length;i<l;i++)
{
    wenzi[i].style.display='none'; 
     li[i].style.opacity='0.5';
li[i].style.fliter='alpha(opacity=50)';
}
wenzi[1].style.display='inline';
tu.style.backgroundImage=arry[1];
li[1].style.opacity='1';
li[1].style.fliter='alpha(opacity=100)';
};

li[2].onmouseover =function () {
    clearInterval(timer);
for (var i=0,l=wenzi.length;i<l;i++)
{
    wenzi[i].style.display='none';
     li[i].style.opacity='0.5';
li[i].style.fliter='alpha(opacity=50)';
    }
wenzi[2].style.display='inline';
tu.style.backgroundImage=arry[2];
li[2].style.opacity='1';
li[2].style.fliter='alpha(opacity=100)';
};
li[3].onmouseover =function () {
    clearInterval(timer);
for (var i=0,l=wenzi.length;i<l;i++)
{
    wenzi[i].style.display='none'; 
     li[i].style.opacity='0.5';
li[i].style.fliter='alpha(opacity=50)';
}
wenzi[3].style.display='inline';
tu.style.backgroundImage=arry[3];
li[3].style.opacity='1';
li[3].style.fliter='alpha(opacity=100)';
};
li[4].onmouseover =function () {
    clearInterval(timer);
for (var i=0,l=wenzi.length;i<l;i++)
{
    wenzi[i].style.display='none'; 
     li[i].style.opacity='0.5';
li[i].style.fliter='alpha(opacity=50)';
}
wenzi[4].style.display='inline';
tu.style.backgroundImage=arry[4];
li[4].style.opacity='1';
li[4].style.fliter='alpha(opacity=100)';
};

li[5].onmouseover =function () {
    clearInterval(timer);
for (var i=0,l=wenzi.length;i<l;i++)
{
    wenzi[i].style.display='none'; 
     li[i].style.opacity='0.5';
li[i].style.fliter='alpha(opacity=50)';
}
wenzi[5].style.display='inline';
tu.style.backgroundImage=arry[5];
li[5].style.opacity='1';
li[5].style.fliter='alpha(opacity=100)';
};

li[6].onmouseover =function () {
    clearInterval(timer);
for (var i=0,l=wenzi.length;i<l;i++)
{
    wenzi[i].style.display='none'; 
     li[i].style.opacity='0.5';
li[i].style.fliter='alpha(opacity=50)';
}
wenzi[6].style.display='inline';
tu.style.backgroundImage=arry[6];
li[6].style.opacity='1';
li[6].style.fliter='alpha(opacity=100)';
};

li[7].onmouseover =function () {
    clearInterval(timer);
for (var i=0,l=wenzi.length;i<l;i++)
{
    wenzi[i].style.display='none'; 
     li[i].style.opacity='0.5';
li[i].style.fliter='alpha(opacity=50)';
}
wenzi[7].style.display='inline';
tu.style.backgroundImage=arry[7];
li[7].style.opacity='1';
li[7].style.fliter='alpha(opacity=100)';
};
} 

