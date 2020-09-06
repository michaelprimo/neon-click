// Seek all the buttons with the .numberText class and store in this variable.  
var buttonClick = document.querySelectorAll(".numberText");

 // Set the main buttons.
 for(var x = 0; x < buttonClick.length; x++)
 {
     //set the event listener to the buttons and make them clickable.
     setButtons(x);
 }

//Set the reset button by calling the function.
setResetButton();

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

function editButtonsText()
{
    // This for loop gets all the buttons and then update the text at the number of values[] to the respective button.
    for(var i = 0; i < buttonClick.length; i++)
    {
        document.getElementById("button" + i).innerHTML = values[i];
        // call the function for every button.
        setClassButtons(i);
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