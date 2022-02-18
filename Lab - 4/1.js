function function1()
{
    const v = parseInt(document.f1.t1.value);
    if (v % 2 == 0)
    {
        alert("Even number");
        document.f1.t1.value = null;
    }
    else
    {
        alert("Odd number");
        document.f1.t1.value = null;
    }
}

function function2()
{
    const x = parseInt(document.f2.t2.value);
    let count = 0;
    for (let i = 1 ; i < x ; i++)
    {
        if (x % i  == 0)
        {
            count += 1;
        }
    }
    if (count == 1)
    {
        alert("Prime number");
        document.f2.t3.value = "Prime Number";
    }
    else
    {
        alert("Not a prime number");
        document.f2.t3.value = "Not a Prime Number";
    }
}

function function3() 
{
    const xo = parseInt(document.f3.t4.value);
    let hex = xo.toString(16);
    let bin = xo.toString(2);
    let oct = xo.toString(8);
    document.getElementById("demo").innerHTML = "Hexadecimal Value is " + hex + "<br>" + "Binary Value is " + bin + "<br>" + "Octal Value is " + oct ;
    document.getElementById("demo").style.fontFamily = "Verdana,bold,arial";
    document.getElementById("demo").style.fontWeight = "900";
    
}