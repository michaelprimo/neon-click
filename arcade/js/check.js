
//verify if the combination is correct or not.
function checkPoints(numberValue)
{
    
    let anim;

    // this combination is correct
    if(curPoints === maxPoints)
    {
        //seconds++;
        //the player gets another level
        levelUp();
        // make every button not pressed
        anim=setTimeout(resetButtonsScore, 100);
        //add one second for the player
        //seconds++;
        if(levels == 1)
        {
            start = new Date().getTime()
            //activate the countdown if the player solve the first level.
            countdown();
        }
        
    }
    //this happens if the player make a wrong combination.
    if(curPoints + numberValue > maxPoints)
    {
        seconds--;
        anim=setTimeout(resetButtonsScore, 100);
        anim=setTimeout(errorAnimation, 300);
        
    }
}


function checkMaxPoints()
{
    
    if(levels > localStorage.getItem("maxLevels"))
    {
        localStorage.setItem('maxLevels', levels);
    }
}