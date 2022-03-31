$(document).ready(function(){

    $("#btn1").click(function(){
        alert("Text: "+$("#test").text());
    });

    $("#btn2").click(function(){
        alert("Text: "+$("#test").html());
    });

    
    $("h1").css({"margin-left" : "30px", "margin-top" : "30px"})

    $(".button1").click(() => {
    var name = prompt("Enter your name : ");
        alert("Given Name is : " + name);
        $(".p1").text("Your name is : " + name);
        $(".p1").css({"font-size" : "25px" , "margin-left" : "30px"})
    });

    $(".button2").click(() => {
        var college = prompt("Enter your college : ");
        alert("Given college is : " + college);
        $(".p2").html("Your college is : " + "<strong>" + college + "</strong>");
        $(".p2").css({"font-size" : "25px" , "margin-left" : "30px"})
    });
}
);
