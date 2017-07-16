var turn;
window.onload = function start()
{
    turn = 0;
    var temp = document.getElementsByClassName("box");
    for(var i=0; i<9; i++)
        temp[i].value = null;
}
function display(key)
{
    var val;
    if(turn%2==0 && turn<9)
        val = 'X';
    else if(turn%2!==0 && turn<9)
    {
        val = 'O';
    }
    else
        val = '';
    turn++;
    var x = document.getElementsByClassName("box");
    if(val=='X')
        x[key].innerHTML = val;
    else
    {
        var t = Math.floor(Math.random()*9);
        console.log(t);
        x[t].innerHTML = val;
    }
    
    if(val == 'X')
        x[key].value = 1;
    else if(val == 'O')
        x[key].value = 0;
    
    for(var i=0; i<=6; i+=3)
        if(x[i].value===x[i+1].value && x[i].value===x[i+2].value && x[i].value!==null)
        {
            if(x[i].value===1) alert("Player 1 Wins!!!");
            else alert("Player 2 Wins!!!");
        }
    for(var i=0; i<3; i++)
        if(x[i].value===x[i+3].value && x[i].value===x[i+6].value && x[i].value!==null)
        {
            if(x[i].value===1) alert("Player 1 Wins!!!");
            else alert("Player 2 Wins!!!");
        }
    if(x[0].value===x[4].value && x[0].value===x[8].value && x[0].value!==null)
        {
            if(x[0].value===1) alert("Player 1 Wins!!!");
            else alert("Player 2 Wins!!!");
        } 
    else if(x[2].value===x[4].value && x[2].value===x[6].value && x[2].value!==null)
        {
            if(x[2].value===1) alert("Player 1 Wins!!!");
            else alert("Player 2 Wins!!!");
        }
    if(turn==9) alert("Game Over");
}
function reset()
{
     turn = 0;
     var y = document.getElementsByClassName("box");
     for(var i=0; i<9; i++)
     {
         y[i].innerHTML = "";
         y[i].value = null;
     }
}