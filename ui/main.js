console.log('Loaded!');
var element=document.getElementById("main-text"
);
element.innerHTML = "Changed TEXT";

var img=document.getElementById ("madi");
var marginleft = 0;
function moveRight() { 
    marginleft = marginleft + 15;
    img.style.marginleft = marginleft = "px";
}
img.onclick = function() {
    var interval = setInterval(moveRight, 150);
};