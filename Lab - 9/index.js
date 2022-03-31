$(document).ready(function(){

    let count = 0;

    $("p").css({"margin" :"30px" , "font-size" : "25px"});
    $(".show").css({"margin-left" : "30px","font-size" : "20px"});
    $(".hide").css({"margin-left" : "30px","font-size" : "22px"});
    
    $("p").click(function(){
        $(this).hide();
        count++;
    });

    $(".show").click(function(){
        $("p").show();
        $(".show").css("margin-top","30px");
    });

    $(".hide").click(function(){
        $("p").hide();
        $(".show").css("margin-top","30px");
    });

    if (count === 3)
    {
        $(".show").css("margin-top","30px");
    }
});