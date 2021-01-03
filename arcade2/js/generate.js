// GENERATE.JS = every function about generating something (like the score to achieve) will be here.

function generateCombination()
{
    //Find a combination of the numbers of the buttons for generate the score to achieve. More numbers to combine, more difficult the game.
    for(var i = 0; i < maxNumberCombination; i++)
    {
        //store the results in an array for using later that results for the permutated combination.
        randGenerator[i] = generatePermutatedNumber(i);
    }
}

//Generate permutated numbers, so we can have always good combinations.
function generatePermutatedNumber(i)
{
    // Gets the number of buttons existent and choose randomly one of them.
    randNum = Math.floor(Math.random() * buttonClick.length);
    //verify if the number is good or not.
    for(var j = 0; j < i; j++)
    {
        //console.log("i = " + i + " j = " + j + " Generated Value = " + (values[i] + values[j]));
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
