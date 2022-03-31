$(document).ready(function(){
    $(".b1").click(() => {
        try {
            var number = $(".t1").val();
            var nums = [];
            for (let i = 0 ; i < number.length - 1 ; i++)
            {
                let num = parseInt(number.slice(i,i+1));
                nums.push(num);
            }
            nums.push(parseInt(number[number.length - 1]))
            let evenmax = -1,oddmax = -1;
            for (let i = 0 ; i < nums.length; i++)
            {
                if (nums[i] % 2 === 0)
                {
                    if (evenmax < nums[i])
                    {
                        evenmax = nums[i];
                    }
                }
                else
                {
                    if (oddmax < nums[i])
                    {
                        oddmax = nums[i];
                    }
                }
            }
            $(".p1").html("Highest even digit is : " + evenmax + "<br>" + "Highest odd digit is : " + oddmax);
            $(".p1").css({"font-size" : "22px" , "margin-left" : "30px"})
            if (oddmax > evenmax)
            {
                throw "Odd digit is highest digit."
            }
        } catch (error) {
            alert("Message from exception handling : " + error)
        }

    });
});