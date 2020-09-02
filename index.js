//screen.lockOrientation('portrait');
// Seek all the buttons with the .numberText class and store in this variable.  
var buttonClick = document.querySelectorAll(".numberText");
// make the touch events for the buttons great again! 
// Points scored by pressing buttons.
let curPoints = 0;
// Points to reach before passing the next level.
let maxPoints = 1;
// The real "points" of the game.
let levels = 0;

let maxLevel = localStorage.getItem("maxLevels");
// This array store all the variables/numbers of the buttons.
var values = [];
// This array store the information about if one particular button is pressed or not.
var toggle = [];
// The time of the game in seconds.
var seconds = 60;
// This array remember the number generated by the function "generatePermutatedNumber()" and then help create a permutated number 
// and a more flexible generator of combinations.
let randGenerator = [];
// This variable store all the numbers the generator of combinations need to create the maximum score to achieve.
const maxNumberCombination = 2;
// If the game is over, the time stops and the player can't press anymore the buttons until they resets the game.
let gameOver = false;
// Store the previous maximum score and helps avoid repeating the same number in two or more levels.
let storeOldNumber;
// Used this for bug fixes. 
var i = 0;
//manage the timeout handle.
var timeoutHandle;
//manage the updateText handle.
var textHandle;
//gets the timer text for editing it later.
var counter = document.getElementById("timer");


//start the main functions
init();

 // Set the main buttons.
 for(var x = 0; x < buttonClick.length; x++)
 {
     //set the event listener to the buttons and make them clickable.
     setButtons(x);
 }

//Set the reset button by calling the function.
setResetButton();

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

// Reset some variable about the game
function resetLevelsTimer()
{
    levels = 0;
    seconds = 60;
    gameOver = false;
    curPoints = 0;
    //for solving the bug of the counter text
    seconds += 0.02;
    document.getElementById("gameOverText").innerHTML = "Reach the exact amount of points for win!";
    save();
    if(levels > maxLevel)
    {
        localStorage.setItem("maxLevels", levels);
    }
}

//Every number of the buttons will be 1 and not pressed.
function resetValues()
{
    for(var i = 0; i < buttonClick.length; i++)
    {
        values[i] = 1;
        toggle[i] = false;
    }
}

//give a functionality to the reset button.
function setResetButton()
{
    //mouse version of clicking the reset button
    document.getElementById("buttonReset").addEventListener('mousedown', function() {
        //call this function if user click reset button.
        init();
        pressAnimation();
    }, false);
    //touch version of clicking the reset button
    document.getElementById("buttonReset").addEventListener('touchstart', function() {
        //call this function if user click reset button.
        init();
        pressAnimation();
    }, false);
    //Change the text of the button.
    document.getElementById("buttonReset").innerHTML = "Reset";
}

function pressAnimation()
{
    let press;
    
    document.getElementById("buttonReset").classList.add("pressedButton");
    press = setTimeout(pressClass, 300);

    function pressClass()
    {
        document.getElementById("buttonReset").classList.remove("pressedButton");
    }
}

// Update all the text in the game
function updateText()
{
    // This for loop gets all the buttons and then update the text at the number of values[] to the respective button.
    for(var i = 0; i < buttonClick.length; i++)
    {
        document.getElementById("button" + i).innerHTML = values[i];
        // call the function for every button.
        setClassButtons(i);
    }

    // update the text to the actual maxPoints value.
    document.getElementById("maxPointsText").innerHTML = maxPoints;
    // update the text to the actual curPoints value.
    document.getElementById("curPointsText").innerHTML = curPoints;
    // update the text to the actual level value.
    document.getElementById("levelsText").innerHTML = levels;
    // update the text of the time counter.
    counter.innerHTML = "Time: " + (seconds < 10 ? "0" : "") + String(seconds.toFixed(0));
    //recall the function every 10 milliseconds.
    document.getElementById("levelsMaxText").innerHTML = "Max: " + localStorage.getItem("maxLevels");
    textHandle=setTimeout(updateText, 10);
}


// generate the points to get for go to the next level
function setMaxPoints()
{
    //Find a combination of the numbers of the buttons for generate the score to achieve. More numbers to combine, more difficult the game.
    for(var i = 0; i < maxNumberCombination; i++)
    {
        //store the results in an array for using later that results for the permutated combination.
        randGenerator[i] = generatePermutatedNumber(i);
    }
    //reset the variable
    maxPoints = 0;
    // sum the results and generate the combination.
    for(var i = 0; i < randGenerator.length; i++)
    {
        maxPoints += values[randGenerator[i]];
        
    }
    //This loop doesn't allow one number combinations.
    for(var i = 0; i < values.length; i++)
    {
        //if maxPoints is equal to a value of one number...
        if(maxPoints == values[i])
        {
            //...restart the loop and generate another number
            setMaxPoints();
        }
    }
    // Store the actual maxPoints value, so it will stored and it will not be repeated between levels.
    storeOldNumber = maxPoints;
}

//Generate permutated numbers, so we can have always good combinations.
function generatePermutatedNumber(i)
{
    // Gets the number of buttons existent and choose randomly one of them.
    randNum = Math.floor(Math.random() * buttonClick.length);
    //verify if the number is good or not.
    for(var j = 0; j < i; j++)
    {
        //if the number is already there, call again the function because it's not a permutated combination. 
        if(randGenerator[j] == randNum)
        {
            generatePermutatedNumber();
        }
        //This helps avoiding combinations of numbers repeating through near levels.
        if(levels > 0 && storeOldNumber == randNum)
        {
            generatePermutatedNumber();
        }
        
    }
    //return the result
    return randNum;
}

//verify if the combination is correct or not.
function checkPoints(numberValue)
{
    let anim;

    // this combination is correct
    if(curPoints === maxPoints)
    {
        //the player gets another level
        levelUp();
        // make every button not pressed
        anim=setTimeout(resetButtonsScore, 100);
        //add one second for the player
        //seconds++;
        if(levels == 1)
        {
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

// function to call when a player make a good combination.
function levelUp()
{

    //get one more level
    levels++;

    if(levels > maxLevel)
    {
        localStorage.setItem("maxLevels", levels);
    }

     //every button pressed for a combination receive an extra point of value. 
     for(var i = 0; i < values.length; i++)
     {
         //get a point of value for every button pressed.
         if(toggle[i] == true)
         {
             values[i]++;
         }
     }
}

//when a combination is good or bad, this function is called for setting the state of the buttons to "not pressed".
function resetButtonsScore()
{
    //reset the state of the buttons.
    for(var i = 0; i < toggle.length; i++)
    {
        toggle[i] = false;
    }
    //reset the score
    curPoints = 0;
    //generate a max score
    setMaxPoints();
   
}



// start or stop the countdown
function countdown() {
    
    seconds -= 0.1;
    
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

function gameOverState()
{
    document.getElementById("gameOverText").innerHTML = "Game Over! You reached level " + levels + "!";
    gameOver = true;
    seconds = 0.01;
    if(levels > maxLevel)
    {
        localStorage.setItem('maxLevels', levels);
    }
    for(var i = 0; i < buttonClick.length; i++)
    {
        values[i] = 0;
        toggle[i] = false;
    }
}

//make the buttons clickable
function setButtons(i) 
{

    document.getElementById("button" + i).addEventListener('mousedown', touchButton, false);
    document.getElementById("button" + i).addEventListener('touchstart', touchButton, false);

    //function to call if the player clicked a button
    function touchButton(event)
    {
    //if the player click the button
    if(gameOver == false && toggle[i] === false)
    {
        //this happens if the player make a bad combination
        if(curPoints + values[i] > maxPoints)
        {
            checkPoints(values[i]);
        }
        //this happens if the player is making a combination
        else
        {
            curPoints += values[i];
            toggle[i] = true;
            
            checkPoints();
            
        }
    }
    //if the button is clicked again run this code
    else
    {
        curPoints -= values[i];
        toggle[i] = false;
        
        checkPoints();
    }
    //this line change the state of the button to "pressed" or "not pressed" and the opposite.
    toggle[i] != toggle[i];
    event.preventDefault();
    return false;
    }

    
}

// Verify if to put or remove certain classes on certain conditions of the buttons.
function setClassButtons(i)
{
    //remove the class because the button is not pressed. 
    if(toggle[i] === false)
    {
        document.getElementById("button" + i).classList.remove("pressedButton");
    }
    //put the class because the button is pressed. 
    else
    {
        document.getElementById("button" + i).classList.add("pressedButton");
    }
    
    
}

function errorAnimation()
{
    let error;
    for(var i = 0; i < buttonClick.length; i++)
    {
        document.getElementById("button" + i).classList.add("errorButton");
        error = setTimeout(resetErrorClass, 300);
    }
    function resetErrorClass()
    {
        for(var i = 0; i < buttonClick.length; i++)
        {
            document.getElementById("button" + i).classList.remove("errorButton");
        }
    }
}

function save()
{
    if (typeof(Storage) !== "undefined") {
        if (localStorage.maxLevels) {
          localStorage.getItem("maxLevels");
        } else {
          localStorage.setItem("maxLevels", 0);
        }
        
      }
}