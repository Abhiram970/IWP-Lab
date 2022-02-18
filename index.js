function function1()
{
    var n = document.getElementById("num").value;
    var sum = 0;
    var prompt1;
    for (var i = 0 ;i < n ; i++)
    {
        prompt1 = prompt("Please enter the " + (i+1) + "th input");
        sum += parseInt(prompt1)
    }
    document.querySelector('.ho').innerHTML = "The sum of given " + n + " inputs is " + sum; 
    document.querySelector(".ho").style.fontFamily = "Verdana,bold,arial";
    document.querySelector(".ho").style.fontWeight = "900";
}