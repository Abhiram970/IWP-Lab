const teacher_mark = ["Abhiram","aronritesh","meghna","indra","rohan","akshay"]

function uppercasing(x)
{
    return x.toUpperCase();
}

 
document.querySelector('.filter1').innerHTML = "Names before uppercasing are : " + teacher_mark + "<br>" + "Names after uppercasing are : " + teacher_mark.map(function func1(x) {
    return x.toLowerCase();
}); 
document.querySelector('.filter1').style.fontSize = "200%";