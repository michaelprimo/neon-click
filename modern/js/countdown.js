// The real "points" of the game.
let levels = 0;
// The real "points" of the game.
let playerLevel = 1;
if(localStorage.getItem("playerLevel") == undefined)
{
    localStorage.setItem("playerLevel", 1);
}
else
{
    playerLevel = localStorage.getItem("playerLevel");
}
// The Experience you currently have.
let curExp = 0;
if(localStorage.getItem("curExp") == undefined)
{
    localStorage.setItem("curExp", 0);
}
else
{
    curExp = localStorage.getItem("curExp");
}
// The Experience you got in the level.
let gameExp = 0;
// Experience required to get the next level.
let maxExp = 1010;
if(localStorage.getItem("maxExp") == undefined)
{
    localStorage.setItem("maxExp", 1010);
}
else
{
    maxExp = localStorage.getItem("maxExp");
}
//This will set up the maximum time of the game.
const maxSeconds = 30;
// The time of the game in seconds.
var seconds = maxSeconds;
//manage the timeout handle.
var timeoutHandle;
//helps to change the main button's color.
let changeColor = 0;

var start;
var time = 0;  

// start or stop the countdown
function countdown() 
{
    seconds -= 0.1;
    //if the player have time
    if( seconds > 0) 
    {
        //if the player solved the trial level
        if(levels > 0)
        {
            time += 100;
            var diff = (new Date().getTime() - start) - time;  
            window.setTimeout(countdown, (100 - diff));
            console.log(Math.round(seconds).toFixed(3)); 
        }
    } 
    //if the player don't have time
    else 
    {
        //game over
        gameOverState();
    }  
}
