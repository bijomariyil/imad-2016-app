console.log('Loaded!');
var element=document.getElementById("main-text"
);
element.innerHTML="Changed TEXT";
var img=document.getElementById("madi"
);
var marginleft=0;
function moveRight() { 
    marginleft=marginleft + 5;
    img.style.marginlleft=marginleft="px";
}
madi.onclick=function(){
    var interval=setinterval (moveRight, 50);
};