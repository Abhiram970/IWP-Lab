const nums = [3,6,7,1,2,10,9]

function array_sort(x)
{
    for (let i = 0 ;  i < x.length ; i++)
    {
        for (let j = i + 1 ; j < x.length ; j++)
        {
            if (x[i] > x[j])
            {
                let temp = x[i];
                x[i] = x[j];
                x[j] = temp;
            }
        }
    }
    return x;
}

 
document.querySelector('.filter1').innerHTML = "Array before sort : " + nums + "<br>" + "Array after sort : " + array_sort(nums); 
document.querySelector('.filter1').style.fontSize = "200%";