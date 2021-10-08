let x_turn = true;
let x_value = 'x';
let o_value = 'o';
let empty_value = '';
let win = false;

function changeAlternated(btn){
    let style = getComputedStyle(btn);

    /* if(style['background-color'] == 'rgb(255, 255, 255)'){
        return;
    } */
    if(x_turn){
        changeToCross(btn);
        x_turn = false;
    }
    else{
        changeToCircle(btn);
        x_turn = true;
    }
    btn.onclick=null;
    detectWin();
}

function changeToCross(btn){
    //btn.style.color = 'red'
    btn.value = 'x';
}

function changeToCircle(btn){
    //btn.style.color = 'blue'
    btn.value = 'o';
}

function detectWin(){

    let btn1 = document.getElementById("b1").value;
    let btn2 = document.getElementById("b2").value;
    let btn3 = document.getElementById("b3").value;
    let btn4 = document.getElementById("b4").value;
    let btn5 = document.getElementById("b5").value;
    let btn6 = document.getElementById("b6").value;
    let btn7 = document.getElementById("b7").value;
    let btn8 = document.getElementById("b8").value;
    let btn9 = document.getElementById("b9").value;

    let board = [
        [btn1, btn2, btn3],
        [btn4, btn5, btn6],
        [btn7, btn8, btn9]
    ]

    checkRows(board);
    checkColumns(board);
    checkDiagonals(board);
    detectDraw(board);
}

function checkRows(board){
   
    for(let i = 0; i < 3; i++){
        let rowSum = 0;
        for(let j = 0; j < 3; j++){
            if (board[i][j] == x_value){
                rowSum += 1;
            }
            else if (board[i][j] == o_value){
                rowSum -= 1;
            }
            else {
                continue;
            }
        }
        if (rowSum == 3){
            crossWinMessage();
        }
        else if (rowSum == -3){
            circleWinMessage();
        }
    } 
}

function checkColumns(board){

    for(let i = 0; i < 3; i++){
        let colSum = 0;
        for(let j = 0; j < 3; j++){
            if (board[j][i] == x_value){
                colSum += 1;
            }
            else if (board[j][i] == o_value){
                colSum -= 1;
            }
            else {
                continue;
            }
        }
        if (colSum == 3){
            crossWinMessage();
        }
        else if (colSum == -3){
            circleWinMessage();
        }
    } 
}

function checkDiagonals(board){

    if (board[0][0] == x_value && board[1][1] == x_value && board[2][2] == x_value){
        crossWinMessage();
    }
    else if (board[0][0] == o_value && board[1][1] == o_value && board[2][2] == o_value){
        circleWinMessage();
    }
    
    if (board[0][2] == x_value && board[1][1] == x_value && board[2][0] == x_value){
        crossWinMessage();
    }
    else if (board[0][2] == o_value && board[1][1] == o_value && board[2][0] == o_value){
        circleWinMessage();
    }
}

function detectDraw(board){
    if (!win) {
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                if (board[i][j] == empty_value){
                    return;
                }
            }
        }
        drawMessage();
    }
    
}

function crossWinMessage(){
    win = true;
    setTimeout(function(){
        let message = confirm("Cross Win!!");   
        if (message) { 
            window.location.reload();
        }
    },50);
}


function circleWinMessage(){
    win = true;
    setTimeout(function(){
        let message = confirm("Circle Win!!");   
        if (message) { 
            window.location.reload();
        }
    },50);
}

function drawMessage(){
    setTimeout(function(){
        let message = confirm("It's a draw.");   
        if (message) { 
            window.location.reload();
        }
    },50);
}