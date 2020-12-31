//contains the palette of colors for the buttons: red, orange, yellow, green, teal, cyan, blue, magenta, pink, purple
let palette = 
[
    "#fc0e34",
    "#ffcf09",
    "#dfff11",
    "#21fc0d",
    "#01f9c6",
    "#0ff0fc",
    "#6600ff",
    "#ff08e8",
    "#ff11ff",
    "#bc13fe"
]

function timeAnimation()
{
    
    document.getElementById("buttonOctopus").style.backgroundImage = "linear-gradient(0deg, rgba(110, 110, 0, 1)"
    + (seconds/maxSeconds) * 100 + "%, rgba(0,0,0,1) " + (seconds/maxSeconds) * 100 + "%)";
    
   //document.getElementById("buttonOctopus").style.backgroundColor = "rgba(0,0,0," + 1 + ")";
   //document.getElementById("buttonOctopus").style.backgroundImage = "linear-gradient(0deg, rgba(0, 0, 0," + (seconds/maxSeconds) * 100 + ") 100%, rgba(0,0,0,0) " + (seconds/maxSeconds) * 100 + "%)";
}

function errorAnimation()
{
    let error;
    for(var i = 0; i < buttonClick.length; i++)
    {
        document.getElementById("button" + i).classList.add("errorButton");
        error = setTimeout(resetErrorClass, 500);
    }
    function resetErrorClass()
    {
        for(var i = 0; i < buttonClick.length; i++)
        {
            document.getElementById("button" + i).classList.remove("errorButton");
        }
    }
}

