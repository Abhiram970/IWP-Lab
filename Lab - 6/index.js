function function1(i)
{
    if (document.querySelector("#course" + i).checked === true)
    {
        document.querySelector(".ans" + i).style.visibility = "visible";
    }
    else
    {
        document.querySelector(".ans" + i).style.visibility = "hidden";
    }
}
