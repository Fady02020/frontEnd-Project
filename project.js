$(document).ready(function () {
    $("#tgl-btn").click(function () {
        $("#navbar").toggleClass("scnd-bg"); 
        $("#Spread").toggleClass("scnd-bg"); 
        $("#AboutCorona").toggleClass("scnd-bg"); 
        $("#Symptoms").toggleClass("scnd-bg"); 
        $("#Prevention").toggleClass("scnd-bg"); 
    });
});
$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 0) {
            $("nav").removeClass("bg-transparent", function(){
                $("nav").addClass("bg-white",500, function(){
                    $("nav").addClass("shadow");
                });
            });
        }
        if(scroll_pos == 0){
            $("nav").addClass("bg-transparent",700);
            $("nav").removeClass("shadow");
            $("nav").removeClass("bg-white");
        }
    });
});
