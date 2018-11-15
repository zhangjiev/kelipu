var leftBn=document.querySelector(".leftBn");
var rightBn=document.querySelector(".rightBn");
var lis=document.getElementsByClassName("banner_li");
var imgs=document.querySelectorAll(".imgCon>img");
var position=0;
addEvent();
animation();
function addEvent() {
    leftBn.addEventListener("click",clickHandler);
    rightBn.addEventListener("click",clickHandler);
    for(var i=0;i<lis.length;i++){
        lis[i].i=i;
        lis[i].addEventListener("click",liClickHandler);
    }
}
function clickHandler(e) {
    e=e || window.event;
    if(this===leftBn){
        position--;
        if(position<0) position=4;
    }else if(this===rightBn){
        position++;
        if(position>4) position=0;
    }
    rollImg();
}
function liClickHandler(e) {
    e=e || window.event;
    position=this.i;
    rollImg();
}
function rollImg() {
    for(var i=0;i<imgs.length;i++){
        imgs[i].style.opacity=0;
    }
    imgs[position].style.opacity=1;
    for(var j=0;j<lis.length;j++){
        lis[j].style.backgroundColor="rgba(255,255,255,0)";
    }
    lis[position].style.backgroundColor="rgba(255,255,255,1)";
}


var autoBool=false;
var speed=10;
var delayTime=120;
var rollImgs=document.getElementById("rollImg");
// console.log(rollImgs);
rollImgs.addEventListener("mouseenter",mouseHandler);
rollImgs.addEventListener("mouseleave",mouseHandler);

function mouseHandler(e) {
    if(e.type==="mouseenter"){
        leftBn.style.display="block";
        rightBn.style.display="block";
        autoBool=false;
        delayTime=120;
    }else if(e.type==="mouseleave"){
        leftBn.style.display="none";
        rightBn.style.display="none";
        autoBool=true;
    }
}
function animation(){
    requestAnimationFrame(animation);
    if(autoBool){
        delayTime--;
        if(delayTime===0){
            delayTime=240;
            rightBn.dispatchEvent(new MouseEvent("click"));
        }
    }
}