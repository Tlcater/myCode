var snake = document.getElementsByClassName("snake")[0];
var wrap = document.getElementsByClassName("wrap")[0];
var food;
var key;
var lastkey;
var countY = 0;
var countX = 0;
SnakebodyBoxStepX = [];
SnakebodyBoxStepY = [];
//建立蛇身
var SnakebodyBox = {
    length: 0,
    push: Array.prototype.push
}
var timer = setInterval(
    function(){
        move(key);
    },500)
//食物位置记录和生成
function fpfn(){
    if(food == undefined){
        var x = parseInt(Math.floor(Math.random()*20)*2*10);
        var y = parseInt(Math.floor(Math.random()*20)*2*10); 
        food = document.createElement("div");
        food.className = 'food';
        wrap.appendChild(food);
        food.style.top = x+"px";
        food.style.left = y+"px";
        foodEvalsnake();
    }else{
        var x = parseInt(Math.floor(Math.random()*20)*2*10);
        var y = parseInt(Math.floor(Math.random()*20)*2*10); 
        food.style.top = x+"px";
        food.style.left = y+"px";
        foodEvalsnake();
    }
    function foodEvalsnake(){
        if(snake.offsetTop==x&&snake.offsetLeft==y){
            fpfn()
        }else if(SnakebodyBox.length>1){
            for (var i = 0; i < SnakebodyBox.length; i++) {
                if (x == SnakebodyBox[i].offsetTop && y == SnakebodyBox[i].offsetLeft) {
                    fpfn();
                }
            }
        } 
    }
}
fpfn();
//计数器 运动 和方向控制
document.onkeydown = function(e){
    var e = e || window.event;
    if(lastkey == undefined){
        if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
            key = e.keyCode;
        }   
    }else{
        if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
            if (Math.abs(e.keyCode - lastkey)!= 2) {
                key = e.keyCode;
            }
        }
    }
    
}
function move(key){
    snakeStep = {
        x:snake.offsetLeft,
        y:snake.offsetTop
    }
    switch(key){
        case 37:
        lastkey = key;
        countX -=20;
        snake.style.left = countX + "px";
        eat();
        SnakebodyMove();
        snakeStep.x = snake.offsetLeft;
        break;
        case 39:
        lastkey = key;
        countX +=20;
        snake.style.left = countX + "px";
        eat();
        SnakebodyMove();
        snakeStep.x = snake.offsetLeft;
        break;
        case 38:
        lastkey = key;
        countY -=20;
        snake.style.top = countY + "px";
        eat();
        SnakebodyMove();
        snakeStep.y = snake.offsetTop;
        break;
        case 40:
        lastkey = key;
        countY +=20;
        snake.style.top = countY + "px";
        eat();
        SnakebodyMove();
        snakeStep.y = snake.offsetTop;
        break;
    }
    jugde();
}
//蛇吃食物
function eat(){  
    //snake的在XY上的定位减去食物相对于的定位的绝对值大于食物本身边长的一半进行判定
    var jg = (function (){
        var absL = Math.abs(snake.offsetLeft - food.offsetLeft);
        var absT = Math.abs(snake.offsetTop - food.offsetTop);
        if ((absL < (food.offsetWidth / 2)) && (absT < (food.offsetHeight / 2))){
            return 1;
            alert("ok")
        }
    }())
    if (jg) {
        Snakebodys = document.createElement("div");
        Snakebodys.className = 'snake';
        SnakebodyBox.push(Snakebodys);
        wrap.appendChild(Snakebodys);
        fpfn();
    }
}
//蛇身的移动
function SnakebodyMove(){
    //声明一个数组记录SnakebodyBox每个元素的位置 
    if(SnakebodyBox[0]){
        for(var i = 0;i<SnakebodyBox.length;i++){  //将Snakebodys上的数字存起来
            SnakebodyBoxStepX[i] = SnakebodyBox[i].offsetLeft;
            SnakebodyBoxStepY[i] = SnakebodyBox[i].offsetTop;
        }  
        SnakebodyBox[0].style.left = snakeStep.x+'px';
        SnakebodyBox[0].style.top = snakeStep.y+'px';
        for(var j = 1;j<SnakebodyBox.length;j++){
            SnakebodyBox[j].style.left = SnakebodyBoxStepX[j-1] + "px";
            SnakebodyBox[j].style.top = SnakebodyBoxStepY[j-1] + "px";
        }
    }
}
//判断结果
function jugde(){
    if ((snake.offsetTop > 380) || (snake.offsetLeft > 380) || (snake.offsetTop < 0) || (snake.offsetLeft < 0)) {
        clearInterval(timer);
        alert("GAME OVER");
    }
    if(SnakebodyBox.length>0){
        for(var i = 0;i<SnakebodyBox.length;i++){
            if((snake.offsetTop==SnakebodyBox[i].offsetTop)&&(snake.offsetLeft==SnakebodyBox[i].offsetLeft)){
                clearInterval(timer);
                alert("GAME OVER");
            }
        }
    }
}