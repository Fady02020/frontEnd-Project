$(document).ready(function () {
    $("#tgl-btn").click(function () {
        $("#navbar").toggleClass("scnd-bg"); 
        $("#Spread").toggleClass("scnd-bg"); 
        $("#AboutCorona").toggleClass("scnd-bg"); 
    });
});
$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0) {
            $("nav").removeClass("bg-transparent", function(){
                $("nav").addClass("bg-white",700);
            });
        }
        if(scroll_pos == 0){
            $("nav").addClass("bg-transparent",700);
            $("nav").removeClass("bg-white");
        }
    });
});
