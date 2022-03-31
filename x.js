var id = prompt("ID : ");
var salary = prompt("Salary : ");
var cate = prompt("Category : ");
var subcat = prompt("Sub Category : ");
var num = prompt("Number of Publications : ");


var total = salary;

if (cate == "No publication")
{
    console.log("0" + " , There is no increase in salary");
}
else
{
    switch(cate) {
        case ("Conference"):
          if (subcat == "Scopus")
          {
            console.log("Total Salary : " + (total + 3000));
          }
          else
          {
            console.log("Total Salary : " + (total + 1000));   
          }
          break;
        case ("Journal"):
          if (subcat == "Scopus")
          {
            console.log("Total Salary : " + (total + 5000));
          }
          else
          {
            console.log("Total Salary : " + (total + 3000));   
          }
          break;
        case ("SCI Jounal"):
          if (subcat == "Q1 Category")
          {
            console.log("Total Salary : " + (total + 70000));
          }
          if (subcat == "Q2 Category")
          {
            console.log("Total Salary : " + (total + 40000));
          }
          if (subcat == "Q3 Category")
          {
            console.log("Total Salary : " + (total + 20000));
          }
        case ("Web of science"):
          if (subcat == "Indexed")
          {
            console.log("Total Salary : " + (total + 3000));
          }
          else
          {
            console.log("Total Salary : " + (total + 1000));
          }
          default:
            break;
      }
}