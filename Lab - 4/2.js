function function1()
{
    const x = parseInt(document.f1.t1.value);
    const y = parseInt(document.f1.t2.value);
    const z = parseInt(document.f1.t3.value);
    if (x == 69)
    {
        document.getElementById("one").innerHTML = "Answer for first question is correct";
        document.getElementById("one").style.fontFamily = "Verdana,bold,arial";
        document.getElementById("one").style.fontWeight = "900";
    }
    else
    {
        document.getElementById("one").innerHTML = "Answer for first question is wrong";
        document.getElementById("one").style.fontFamily = "Verdana,bold,arial";
        document.getElementById("one").style.fontWeight = "900";
    }
    if (y == 161)
    {
        document.getElementById("two").style.fontFamily = "Verdana,bold,arial";
        document.getElementById("two").style.fontWeight = "900";
        document.getElementById("two").innerHTML = "Answer for second question is correct";
    }
    else
    {
        document.getElementById("two").style.fontFamily = "Verdana,bold,arial";
        document.getElementById("two").style.fontWeight = "900";
        document.getElementById("two").innerHTML = "Answer for second question is wrong";
    }
    if (z == 105)
    {
        document.getElementById("three").style.fontFamily = "Verdana,bold,arial";
        document.getElementById("three").style.fontWeight = "900";
        document.getElementById("three").innerHTML = "Answer for third question is correct";
    }
    else
    {
        document.getElementById("three").innerHTML = "Answer for third question is wrong";
        document.getElementById("three").style.fontFamily = "Verdana,bold,arial";
        document.getElementById("three").style.fontWeight = "900";
    }

}

function function2()
{
    const x = parseInt(document.f2.t4.value);
    const y = parseInt(document.f2.t5.value);
    const z = parseInt(document.f2.t6.value);
    const o = x + y;
    if (x + y == z)
    {
        document.getElementById("four").innerHTML = "Answer for question is correct";
        document.getElementById("four").style.fontFamily = "Verdana,bold,arial";
        document.getElementById("four").style.fontWeight = "900";
    }
    else
    {
        document.getElementById("four").innerHTML = "Answer for third question is wrong , " + "The correct answer is " +  o ;
        document.getElementById("four").style.fontFamily = "Verdana,bold,arial";
        document.getElementById("four").style.fontWeight = "900";
    }
}