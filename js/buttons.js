let colorNames = ["red", "orange", "yellow", "green", "teal", "cyan", "blue", "magenta", "pink", "purple"];
let boolPressed = false;
// Seek all the buttons with the .numberText class and store in this variable.  
var buttonClick = document.querySelectorAll(".numberText");
//set pause
let pauseEnabled = false;


 // Set the main buttons.
 for(var x = 0; x < buttonClick.length; x++)
 {
     //set the event listener to the buttons and make them clickable.
     setButtons(x);
 }

//Set the reset button by calling the function.
setResetButton();

//Set the pause button by calling the function.
setPauseButton();

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
}

//give a functionality to the pause button.
function setPauseButton()
{
    //mouse version of clicking the reset button
    document.getElementById("buttonPause").addEventListener('mousedown', function() {
        //call this function if user click reset button.
        pauseEnabled = !pauseEnabled;
        if(pauseEnabled == false)
        {
            document.getElementById("mainGame").classList.remove("fadeOut");
            document.getElementById("mainGame").classList.add("fadeIn");
            document.getElementById('mainGame').classList.remove("hide");
            document.getElementById('mainGame').classList.add("show");
            document.getElementById("boxSize").classList.add("fadeOut");
            document.getElementById("boxSize").classList.remove("fadeIn");
            document.getElementById('boxSize').classList.remove("show");
            document.getElementById('boxSize').classList.add("hide");
            //reset the "start" variable.
            start = new Date().getTime();
            //this helps avoiding artificial lags when unpausing the game. 
            time = 0;
            //activate the countdown if the player unpause the game.
            countdown();
        }
        else
        {
            document.getElementById("mainGame").classList.add("fadeOut");
            document.getElementById("mainGame").classList.remove("fadeIn");
            document.getElementById('mainGame').classList.add("hide");
            document.getElementById('mainGame').classList.remove("show");
            document.getElementById("boxSize").classList.remove("fadeOut");
            document.getElementById("boxSize").classList.add("fadeIn");
            document.getElementById('boxSize').classList.add("show");
            document.getElementById('boxSize').classList.remove("hide");
            document.getElementById("gameOverText").innerHTML = "Paused";
        }
        pressAnimation();
    }, false);
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


function editButtonsText()
{
    // This for loop gets all the buttons and then update the text at the number of values[] to the respective button.
    for(var i = 0; i < buttonClick.length; i++)
    {
        document.getElementById("button" + i).innerHTML = values[i];

        // Verify if to put or remove certain classes on certain conditions of the buttons.

        // remove the class because the button is not pressed. 
        if(toggle[i] === false)
        {
            boolPressed = false;
        }
        //put the class because the button is pressed. 
        else
        {
            boolPressed = true;   
        }

        for(var j = 0; j < colorNames.length; j++)
        {
            if(values[i] % colorNames.length == j)
            {
                
                for(var k = 0; k < colorNames.length; k++)
                {
                    document.getElementById("button" + i).classList.remove(colorNames[k]);
                    document.getElementById("button" + i).classList.remove("white");
                }
                if(boolPressed == true)
                {
                    document.getElementById("button" + i).classList.add("white");
                }
                else
                {
                    document.getElementById("button" + i).classList.add(colorNames[j]);
                }
                
            }
        }
    }
}