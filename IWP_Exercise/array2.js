const a = ["Abhi","Meghna","Indra"];
const b = ["Aron","Adhi","Rohit"];

// Using the process of concatenation

var arr3 = [];
arr3 = a.concat(b)

document.querySelector('.filter3').innerHTML = "Elements of array A are : " + a + "<br>" + "Elements of array B are : " + b + "<br>" + "Elements after concat are : " + arr3;
document.querySelector('.filter3').style.fontSize = "200%";

//Without using the process of concatenation

var arr4 = [];

for (var i = 0 ; i < a.length ;i++)
{
    arr4.push(a[i]);
}
for (var i = 0 ; i < b.length ; i++)
{
    arr4.push(b[i]);
}

document.querySelector('.filter4').innerHTML = "Elements of array A are : " + a + "<br>" + "Elements of array B are : " + b + "<br>" + "Elements after concat are : " + arr4;
document.querySelector('.filter4').style.fontSize = "200%";