function getresult(num) 
{
    var inresult = document.getElementById("result");
    inresult.value += num;
}

function clearbtn() 
{
    var inresult = document.getElementById("result");
    inresult.value = "";
}

function calresult() 
{
    var inresult = document.getElementById("result");
    inresult.value = eval(inresult.value);
}