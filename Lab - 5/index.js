function function1()
{
    var x = document.getElementsByName("elective");
    for (var i = 0 ; i < x.length ; i++)
    {
        if (x[i].checked)
        {
            var ans = (x[i].value).toUpperCase();
        }

    }

    var o = document.getElementsByName("color");

    for (var i = 0 ; i < o.length ; i++)
    {
        if (o[i].checked)
        {
            var ans2 = o[i].value;
            document.querySelector("#rs").style.color = ans2;
        }
    }

    document.querySelector("#rs").innerHTML = ans + " is chosen with the color " + ans2;
    document.querySelector("#rs").style.fontSize = "2rem"
}

function function2()
{
    location.reload();
}