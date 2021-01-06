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
    document.getElementById("levelsText").innerHTML = "Level: " +levels;
   
    timeAnimation();

    // update the text of the time counter.
    //counter.innerHTML = "T: " + (seconds < 10 ? "0" : "") + String(seconds.toFixed(0));
    textHandle=setTimeout(updateText, 100);
}

// index.js
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("sw.js")
        .then(() => console.log("registered service worker!"));
}

const prompt = document.querySelector('.prompt');
const installButton = prompt.querySelector('.prompt__install');
const closeButton = prompt.querySelector('.prompt__close');
let installEvent;

function getVisited() {
  return localStorage.getItem('install-prompt');
}

function setVisited() {
  localStorage.setItem('install-prompt', true);
}

// this event will only fire if the user does not have the pwa installed
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();

  // if no localStorage is set, first time visitor
  if (!getVisited()) {
    // show the prompt banner
    prompt.style.display = 'block';

    // store the event for later use
    installEvent = event;
  }
});

installButton.addEventListener('click', () => {
  // hide the prompt banner
  prompt.style.display = 'none';

  // trigger the prompt to show to the user
  installEvent.prompt();

  // check what choice the user made
  installEvent.userChoice.then((choice) => {
    // if the user declined, we don't want to show the button again
    // set localStorage to true
    if (choice.outcome !== 'accepted') {
      setVisited();
    }

    installEvent = null;
  });
});

closeButton.addEventListener('click', () => {
  // set localStorage to true
  setVisited();

  // hide the prompt banner
  prompt.style.display = 'none';  

  installEvent = null;
});

