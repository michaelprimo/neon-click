//screen.lockOrientation('portrait');

const ASSETS = [
    "/js/animations.js",
    "/js/buttons.js",
    "/js/check.js",
    "/js/countdown.js",
    "/js/generate.js",
    "/js/index.js",
    "/js/reset.js",
    "/js/state.js",
    "/AUTOMANI.ttf",
    "/colorAnimation.css",
    "/index.css",
    "/index.html",
    "/SIMPLIFICA.ttf",
    "/images/icons-192.png",
    "/images/icons-512.png"
];

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
   
    timeAnimation();
    textHandle=setTimeout(updateText, 100);
}


// index.js
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("sw.js")
        .then(() => console.log("registered service worker!"));
}
// the rest of your page's code...