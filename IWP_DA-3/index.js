function function1()
{
    var x = document.getElementsByName("positions");
    for (var i = 0 ; i < x.length ; i++)
    {
        if (x[i].checked)
        {
            document.querySelector(".answer").style.setProperty("position",x[i].value);
            document.querySelector(".js-change").innerHTML = "position : " + x[i].value + ";";
        }
    }
}