$(document).ready(function () {
    $("#tgl-btn").click(function () {
        $("#navbar").toggleClass("scnd-bg");
        $("#Spread").toggleClass("scnd-bg");
        $("#AboutCorona").toggleClass("scnd-bg");
        $("#Symptoms").toggleClass("scnd-bg");
        $("#Prevention").toggleClass("scnd-bg");
    });
});
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").removeClass("bg-transparent", function () {
                $("nav").addClass("bg-white", 500, function () {
                    $("nav").addClass("shadow");
                });
            });
        }
        if (scroll_pos == 0) {
            $("nav").addClass("bg-transparent", 700);
            $("nav").removeClass("shadow");
            $("nav").removeClass("bg-white");
        }
    });
});
$("a.font-button").click(function (e) {
    e.preventDefault();
    console.log("a7a");
    $(this).find("i.icon-plus").toggleClass("fa-minus fa-plus");
});
$("#btn1").click(function (e) { 
    e.preventDefault();
    $("#2ndDiv").hide();
    $("#3rdDiv").hide();
    $("#4thDiv").hide();
    $("#5thDiv").hide();
    $("#6thDiv").hide();
    $("#btn2 , #btn3 , #btn4 , #btn5 , #btn6").css("color", "#465675");
    $("#btn2 , #btn3 , #btn4 , #btn5 , #btn6").css("border-color", "#e7e8ff");
    $("#1stDiv").show();
    $(this).css("color","#2a81ea");
    $(this).css("border-color","#2a81ea");
});
$("#btn2").click(function (e) { 
    e.preventDefault();
    $("#1stDiv").hide();
    $("#3rdDiv").hide();
    $("#4thDiv").hide();
    $("#5thDiv").hide();
    $("#6thDiv").hide();
    $("#btn1 , #btn3 , #btn4 , #btn5 , #btn6").css("color", "#465675");
    $("#btn1 , #btn3 , #btn4 , #btn5 , #btn6").css("border-color", "#e7e8ff");
    $("#2ndDiv").show();
    $(this).css("color","#2a81ea");
    $(this).css("border-color","#2a81ea");
});
$("#btn3").click(function (e) { 
    e.preventDefault();
    $("#1stDiv").hide();
    $("#2ndDiv").hide();
    $("#4thDiv").hide();
    $("#5thDiv").hide();
    $("#6thDiv").hide();
    $("#btn1 , #btn2 , #btn4 , #btn5 , #btn6").css("color", "#465675");
    $("#btn1 , #btn2 , #btn4 , #btn5 , #btn6").css("border-color", "#e7e8ff");
    $("#3rdDiv").show();
    $(this).css("color","#2a81ea");
    $(this).css("border-color","#2a81ea");
});
$("#btn4").click(function (e) { 
    e.preventDefault();
    $("#1stDiv").hide();
    $("#2ndDiv").hide();
    $("#3rdDiv").hide();
    $("#5thDiv").hide();
    $("#6thDiv").hide();
    $("#btn1 , #btn3 , #btn2 , #btn5 , #btn6").css("color", "#465675");
    $("#btn1 , #btn3 , #btn2 , #btn5 , #btn6").css("border-color", "#e7e8ff");
    $("#4thDiv").show();
    $(this).css("color","#2a81ea");
    $(this).css("border-color","#2a81ea");
});
$("#btn5").click(function (e) { 
    e.preventDefault();
    $("#1stDiv").hide();
    $("#3rdDiv").hide();
    $("#4thDiv").hide();
    $("#2ndDiv").hide();
    $("#6thDiv").hide();
    $("#btn1 , #btn3 , #btn4 , #btn2 , #btn6").css("color", "#465675");
    $("#btn1 , #btn3 , #btn4 , #btn2 , #btn6").css("border-color", "#e7e8ff");
    $("#5thDiv").show();
    $(this).css("color","#2a81ea");
    $(this).css("border-color","#2a81ea");
});
$("#btn6").click(function (e) { 
    e.preventDefault();
    $("#1stDiv").hide();
    $("#3rdDiv").hide();
    $("#4thDiv").hide();
    $("#5thDiv").hide();
    $("#2ndDiv").hide();
    $("#btn1 , #btn3 , #btn4 , #btn5 , #btn2").css("color", "#465675");
    $("#btn1 , #btn3 , #btn4 , #btn5 , #btn2").css("border-color", "#e7e8ff");
    $("#6thDiv").show();
    $(this).css("color","#2a81ea");
    $(this).css("border-color","#2a81ea");
});
