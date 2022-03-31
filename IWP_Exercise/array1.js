const iwp1 = [20,23,24,21,22,18,15,16,19,18,17]
const iwp2 = [10,12,14,13,8,5,6,7]

//Using the concat method for concatenation

var iwp_cat1 = [];
iwp_cat1 = iwp1.concat(iwp2);

document.querySelector('.filter2').innerHTML = "Elements of array1 are : " + iwp1 + "<br>" + "Elements of array2 are : " + iwp2 + "<br>" + "Elements after concat are : " + iwp_cat1;
document.querySelector('.filter2').style.fontSize = "200%";

//Using the normal iterative method for concatenation of 2 arrays

var iwp_cat1_new = [];

for (var i = 0 ; i < iwp1.length ;i++)
{
    iwp_cat1_new.push(iwp1[i]);
}
for (var i = 0 ; i < iwp2.length ; i++)
{
    iwp_cat1_new.push(iwp2[i]);
}

document.querySelector('.filter3').innerHTML = "Elements of array1 are : " + iwp1 + "<br>" + "Elements of array2 are : " + iwp2 + "<br>" + "Elements after concat are : " + iwp_cat1_new;
document.querySelector('.filter3').style.fontSize = "200%";