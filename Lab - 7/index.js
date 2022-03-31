const empID = new Array(2,4,5,8,13);

function prime_fil(x)
{
    for (var i = 2 ; i < x ; i++)
    {
        if (x % i == 0)
        {
            return false;
        }
    }
    return true;
}


document.querySelector('.filter1').innerHTML = "Employees ID list : " + empID +"<br>" +"Employees selected for bonus are : " + empID.filter(prime_fil); 
document.querySelector('.filter1').style.fontSize = "200%";
document.querySelector('.filter1').style.color = "red";