document.querySelector('.submit1').addEventListener("click",function1);

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');


function tablecreate()
{
    table.appendChild(thead);
    table.appendChild(tbody);
    
    table.classList.add("table1");
    document.querySelector('.disp').appendChild(table);
    table.classList.add("class1");

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Elective";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Full name of elective";

    table.cellPadding = "4px";
    table.cellSpacing = "4px";
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    thead.appendChild(row_1);
}

function addbody(a,b)
{
    let row_2 = document.createElement('tr');
    let body1 = document.createElement('td');
    body1.innerHTML = a;
    let body2 = document.createElement('td');
    body2.innerHTML = b;
    row_2.appendChild(body1);
    row_2.appendChild(body2);
    tbody.appendChild(row_2);
}




function function1()
{

    var regno = document.f1.t2.value;

    if (regno.slice(2,5) === "BAI")
    {
        if (table.rows.length > 0)
        {
            for (var i = 0 ; i < 3 ;i++)
            {
                document.querySelector('.table1').deleteRow(0);
            }
        }

        tablecreate();
        addbody("CSE1014","Foundations of AI");
        addbody("CSE1015","Machine Learning Essentials");

        x = table.rows[1].cells[0].innerHTML;
        table.rows[1].cells[0].addEventListener("click",function(){
            document.querySelector('.msg').setAttribute("value","CSE1014 Faculty : Priyadarshini J");
        });
        table.rows[2].cells[0].addEventListener("click",function(){
            document.querySelector('.msg').setAttribute("value","CSE1015 Faculty : Rajalakshmi R");
        });
    }

    if (regno.slice(2,5) === "BPS")
    {
        if (table.rows.length > 0)
        {
            for (var i = 0 ; i < 3 ;i++)
            {
                document.querySelector('.table1').deleteRow(0);
            }
        }

        tablecreate();
        addbody("CSE1020","Cipher Analysis");
        addbody("CSE3000","Web Mining");
        
        table.rows[1].cells[0].addEventListener("click",function(){
            document.querySelector('.msg').setAttribute("value","CSE1020 Faculty : Premlatha M");
        });
        table.rows[2].cells[0].addEventListener("click",function(){
            document.querySelector('.msg').setAttribute("value","CSE3000 Faculty : Suganya G");
        });
    }
}