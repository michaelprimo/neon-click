let freezeEnabled = false;
let shutdownEnabled = false;
let frenzyEnabled = false;

function choosePower()
{
    let randPower = 0;
}

function torch()
{
    for(var i = 0; i < buttonClick.length; i++)
    {
        document.getElementById("button" + i).classList.remove("torchEnabled");
    }
    for(var i = 0; i < randGenerator.length; i++)
    {
        document.getElementById("button" + randGenerator[i]).classList.add("torchEnabled");
    }
    console.log(frenzyEnabled);
}

function freeze()
{
    freezeEnabled = true;
}

function shutdown()
{
    shutdownEnabled = true;
}

function frenzy()
{
    frenzyEnabled = true;
    generateCombination();
    console.log("frenzy pressed");
}

function extraLevel()
{
    levels++;
}

function extraSecond()
{
    seconds++;
}

function numberBreaker()
{
    for(var i = 0; i < buttonClick.length; i++)
    {
        if(values[i] > 1)
        {
            values[i]--;
        }
    }
}

function singleNumberBreaker()
{
    for(var i = 0; i < buttonClick.length; i++)
    {
        if(values[i] > 1)
        {
            values[i]--;
        }
    }
}

function numberCake()
{
    for(var i = 0; i < buttonClick.length; i++)
    {
        if(values[i] > 1)
        {
            values[i]++;
        }
    }
}

function singleNumberCake()
{
    for(var i = 0; i < buttonClick.length; i++)
    {
        if(values[i] > 1)
        {
            values[i]++;
        }
    }
}

function randomizeBoardNumber()
{
    for(var i = 0; i < buttonClick.length; i++)
    {
        if(values[i] > 1)
        {
            values[i]++;
        }
    }
}

function settingBoardNumber()
{
    for(var i = 0; i < buttonClick.length; i++)
    {
        values[i] = i+1;
    }
}

