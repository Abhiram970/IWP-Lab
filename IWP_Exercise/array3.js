var arr1 = [2,3,4,5,6,20,7,8,9,10]
document.querySelector('.arr').innerHTML = "Original Number array is : " + arr1;
function function1()
{   
    var arr4 = [];
    const input = parseInt(document.f1.t1.value);
    const input2 = parseInt(document.f1.t2.value);

    for (var i = 0 ; i < input2 - 1 ; i++)
    {
        arr4.push(arr1[i]);
    }
    arr4.push(input)
    for (var i = input2 - 1 ; i < arr1.length ; i++)
    {
        arr4.push(arr1[i]);
    }

    document.querySelector('.c1').innerHTML = "After insertion at given value the array is : " + arr4;
}

function function2() 
{
    const input = parseInt(document.f2.t3.value);
    for( var i = 0; i < arr1.length; i++){ 
    
        if ( i === input - 1) { 
    
            arr1.splice(i, 1); 
        }
    
    }
    document.querySelector('.c2').innerHTML = "After deletion at given value the array is : " + arr1;
}

document.querySelector('.c3').innerHTML = "Sorting the elements in ascending order : " + arr1.sort(function(a, b) {
    return a - b;
  });
document.querySelector('.c4').innerHTML = "Sorting the elements in descending order : " + arr1.sort(function(a, b) {
  return b - a;
});

var string1 = ["Abhi","Aron","Rohit","Arjun","Smith","Jacob"];
document.querySelector('.arr2').innerHTML = "Original string array is : " + string1;

function function3() 
{
    var arr6 = [];
    const input = document.f3.t4.value;
    const input2 = parseInt(document.f3.t5.value);
    for (var i = 0 ; i < input2 - 1 ; i++)
    {
        arr6.push(string1[i]);
    }
    arr6.push(input)
    for (var i = input2 - 1 ; i < string1.length ; i++)
    {
        arr6.push(string1[i]);
    }

    document.querySelector('.c5').innerHTML = "After insertion at given value the array is : " + arr6;

}
var string2 = [];

for (var i of string1) {
    string2.push(i);
}

function function4() 
{
    const input = parseInt(document.f4.t6.value);
    for( var i = 0; i < string1.length; i++){ 
    
        if ( i === input - 1) { 
    
            string1.splice(i, 1); 
        }
    
    }
    document.querySelector('.c6').innerHTML = "After deletion at given value the array is : " + string1;
}

document.querySelector('.c7').innerHTML = "Sorting the elements in ascending order : " + string2.sort();
document.querySelector('.c8').innerHTML = "Sorting the elements in descending order : " + string2.reverse();