console.log('Loaded!');
var element=document.getElementById("main-text"
);
element.innerHTML="Changed TEXT";
var img=document.getElementById("madi"
);
var marginleft=0;
function moveright() { 
    marginleft=marginleft + 5;
    img.style.marginlLeft=marginleft="px";
}
img.onclick=function(){
    var interval=setinterval (movRight, 50);
    img.style.marginLeft='100px';
}; 