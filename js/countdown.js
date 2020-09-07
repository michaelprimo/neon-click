// The real "points" of the game.
let levels = 0;
//This will set up the maximum time of the game.
const maxSeconds = 60;
// The time of the game in seconds.
var seconds = maxSeconds;
//manage the timeout handle.
let timeoutHandle;
//helps to change the main button's color.
let changeColor = 0;

// start or stop the countdown
function countdown() {
    
    seconds -= 0.1;
    console.log(seconds);

    //if the player have time
    if( seconds > 0) 
    {
        //if the player solved the trial level
        if(levels > 0)
        {
            timeoutHandle=setTimeout(countdown, 100);
        }
    } 
    //if the player don't have time
    else 
    {
        //game over
        gameOverState();
    }
}