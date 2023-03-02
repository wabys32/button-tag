var button = document.getElementById("button")
var button_speed = 10;
var x, y, bx, by;
var resultX = 1;
var resultY = 1;
var rect;
button.style.left = window.innerWidth/2-button.offsetWidth/2+"px";
button.style.top = window.innerHeight/2-button.offsetHeight/2+"px";

document.addEventListener('mousemove', moveCursor)
function moveCursor(e) {
    rect = button.getBoundingClientRect()
    //button.style.left = (e.clientX-button.offsetWidth/2)+"px";
    //button.style.top = (e.clientY-button.offsetHeight/2)+"px";
    x = e.clientX;
    y = e.clientY;
    bx = (rect.x+button.offsetWidth/2);
    by = (rect.y+button.offsetHeight/2);

    
    var xVector = Math.abs(x - bx);
    var yVector = Math.abs(y - by);

    
    if(xVector > yVector){
        resultX = 1;
        resultY = yVector/xVector;
    }else{
        resultY = 1;
        resultX = xVector/yVector;
    }

  	if(bx<x && (rect.x-(button_speed*resultX)) > 0){
        button.style.left = (rect.x - (button_speed*resultX)) + "px";
  	}
  	if(bx>x && (rect.x+(button_speed*resultX)+button.offsetWidth) < window.innerWidth){
        button.style.left = (rect.x + (button_speed*resultX)) + "px";
  	}
  	if(by<y && (rect.y-(button_speed*resultY)) > 0){
        button.style.top = (rect.y - (button_speed*resultY)) + "px";
    }
    if(by>y && (rect.y+(button_speed*resultY)+button.offsetHeight) < window.innerHeight){
        button.style.top = (rect.y + (button_speed*resultY)) + "px";
    }
}


var list = ["Loser!", "You'll never catch me", "Fail", "Not today", "No, no, no", "your grandmother would have caught me"]
function win(){
    var x1 = random(0, window.innerWidth-button.offsetWidth)
    var y1 = random(0, window.innerHeight-button.offsetHeight)
    button.style.left = x1+"px"
    button.style.top = y1+"px"
    button.innerHTML = list[random(0, list.length-1)]
}

function random(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}