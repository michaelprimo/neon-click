//screen.lockOrientation('portrait');
 

//start the main functions
init();


//calls the main functions
function init()
{
    // call the function which reset the values of the buttons.
    resetValues();
    // create a function which create the number to gain.
    setMaxPoints();
    //reset levels,seconds and the gameOver state to the original settings.
    resetLevelsTimer();
    // update text.
    updateText();
    //unlock the grid and the game
    gameOver = false;
}




// Update all the text in the game
function updateText()
{
    //gets all the clickable buttons with numbers and then change the textual value. 
    editButtonsText();
    // update the text to the actual maxPoints value.
    document.getElementById("maxPointsText").innerHTML = maxPoints;
    // update the text to the actual curPoints value.
    document.getElementById("curPointsText").innerHTML = curPoints;
    // update the text to the actual level value.
    document.getElementById("levelsText").innerHTML = levels;

    //recall the function every 10 milliseconds.
    if(localStorage.getItem("maxLevels") !== null)
    {
        document.getElementById("levelsMaxText").innerHTML = "Max: " + localStorage.getItem("maxLevels");
    }
    else
    {
        localStorage.setItem('maxLevels', 0);
    }
   
    timeAnimation();
    textHandle=setTimeout(updateText, 1);
}