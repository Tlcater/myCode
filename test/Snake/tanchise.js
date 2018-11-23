var board = document.getElementsByClassName("board")[0];
var snake = document.getElementsByClassName("snake")[0];
var start = document.getElementsByClassName("start")[0];
//创建一个数组,记录基于arrSnake长度的所有位置
var arrStepx = [];
var arrStepy = [];
var i = arrStepx.length;
//创建snake,用数组记录snake的所有数据;
var arrSnake = [];
arrSnake.push(snake);
 //获得下一个食物元素
 var nextfood = board.lastElementChild;
 //获取蛇和食物的坐标
 var arrSP = {
     x:0,
     y:0
 }
 var arrFP = {
     x:0,
     y:0
 }
//  console.log(nextfood)
 //判读蛇和食物相碰

//给snake写一个计时器,并且绑定键盘方向
var key = 39;
window.onkeydown = function (e) {  
    var e = e || window.event;   
    key = e.keyCode;   
}
//计时器
var timer1 = setInterval(fn, 500)
function fn() {
    switch (key) {
        case 38: //top
            for (var j = 0; j < arrSnake.length-1; j++) {
                arrStepx[j] = arrSnake[j].offsetLeft;  //同下
                arrStepy[j] = arrSnake[j].offsetTop;   //将还没有变化位置存好   
            }
            snake.style.top = arrSP.y - 50 + "px"

           

            // console.log("top" + snake.style.top)
            arrSP.x = snake.offsetLeft;     //实时获取蛇的位置
            arrSP.y = snake.offsetTop;      //实时获取蛇的位置   
            Step();       
            break;
        case 39: //right
            for (var j = 0; j < arrSnake.length-1; j++) {
                arrStepx[j] = arrSnake[j].offsetLeft;  //同下
                arrStepy[j] = arrSnake[j].offsetTop;   //将还没有变化位置存好   
            }
            snake.style.left = arrSP.x + 50 + "px"
               
            // console.log("right" + snake.style.left)
            arrSP.x = snake.offsetLeft;     //实时获取蛇的位置
            arrSP.y = snake.offsetTop;      //实时获取蛇的位置
            Step();
            // arrStep.x = snake.offsetLeft;
            // arrStep.y = snake.offsetTop;
            break;
        case 40: //down
            for (var j = 0; j < arrSnake.length-1; j++) {
                arrStepx[j] = arrSnake[j].offsetLeft;  //同下
                arrStepy[j] = arrSnake[j].offsetTop;   //将还没有变化位置存好  
                
            }
            snake.style.top = arrSP.y + 50 + "px"

            

            // console.log("down" + snake.style.top)
            arrSP.x = snake.offsetLeft; //实时获取蛇的位置
            arrSP.y = snake.offsetTop; //实时获取蛇的位置
            Step();
            break;
        case 37: //left
            for (var j = 0; j < arrSnake.length-1; j++) {
                arrStepx[j] = arrSnake[j].offsetLeft;  //同下
                arrStepy[j] = arrSnake[j].offsetTop;   //将还没有变化位置存好 
            }
            snake.style.left = arrSP.x - 50 + "px"
               
            // console.log("left" + snake.style.left)
            Step();
            arrSP.x = snake.offsetLeft;     //实时获取蛇的位置
            arrSP.y = snake.offsetTop;      //实时获取蛇的位置
            break;
    }
    eat();
    // for (i = 0; i < arrSnake.length; i++) {
    //     arrSnake[i+1].offsetTop = arrSnake[i].offsetTop;
    //     arrSnake[i+1].offsetLeft = arrSnake[i].offsetLeft;
    // }
    gameOver();
}
//创建food
function addFood(){

    var x,y;  
    food = document.createElement("div");

    //如果是生成在蛇上面,从新生成位置
    function position() {
        x = parseInt(Math.random() * 10) * 50;
        y = parseInt(Math.random() * 10) * 50;
        for (let i = 0; i < arrSnake.length; i++) {
            if ((x == arrSnake[i].offsetLeft) && (y == arrSnake[i].offsetTop)) {
                position();
            }
        }
    }
    position();
    
    
    food.className = "food";
    board.appendChild(food);
    food.style.left = x+"px";
    food.style.top = y+"px";
    arrFP = {
        x:x,
        y:y
    }
    // console.log(arrFP);
    return arrFP;
}
addFood();

//封装一个函数记录蛇吃东西的情况
function eat(){
   if ((arrSP.x==arrFP.x) && (arrSP.y==arrFP.y)) {
        arrSnake.push(food);
        victocy();
        addFood();   
   }
}

//封装一个函数把记录arrSnake所有蛇的对象和所有蛇的步数通过index链接起来
function Step(){
    // 存储步数
    if(arrSnake.length>1){
        for (let i = 0; i < arrSnake.length-1; i++) {
            arrSnake[i + 1].style.top = arrStepy[i] +"px"; //储存的步数不能赋值回去
            arrSnake[i + 1].style.left = arrStepx[i] +"px";
        }
    }   
}

//判断GameOver条件
function gameOver(){
    // arrSP.x  arrSP.y 蛇的当前位置  判断位置是否超出边界或者和蛇的数组位置重合
    // 1.撞墙
    var judge =false;
    if ((parseInt(arrSP.x) < 0 || parseInt(arrSP.x) == 500) || (parseInt(arrSP.y) < 0 || parseInt(arrSP.y) == 500)) {
        judge = true;
    }
    // 2.撞自己
    for (let i = 0; i < arrSnake.length-3; i++) {
        if ((arrSP.x == arrSnake[i + 2].offsetLeft) && (arrSP.y == arrSnake[i + 2].offsetTop)) {
            alert("Game Over")
        }    
    }
    if (judge) {
        alert("Game Over")
    }   
}
//判断胜利条件 蛇的长度等于棋盘的面积总格数 victory 放eat函数下蛇将food加入自己的长度的时候
function victocy() {
    if(arrSnake.length == 100){
        alert("VICTORY")
    }
}