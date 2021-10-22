$(document).ready(function () {
    $("#tgl-btn").click(function () {
        $("#navbar").toggleClass("scnd-bg");
        $("#Spread").toggleClass("scnd-bg");
        $("#AboutCorona").toggleClass("scnd-bg");
        $("#Symptoms").toggleClass("scnd-bg");
        $("#Prevention").toggleClass("scnd-bg");
    });


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

    $("a.font-button").click(function (e) {
        e.preventDefault();
        $(this).find("i.icon-plus").toggleClass("fa-minus fa-plus");
    });
    $("p.accordion-header").click(function (e) {
        e.preventDefault();
        $(this).find("a.font-button").toggleClass("button-style-onclick button-style");
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
        $(this).css("color", "#2a81ea");
        $(this).css("border-color", "#2a81ea");
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
        $(this).css("color", "#2a81ea");
        $(this).css("border-color", "#2a81ea");
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
        $(this).css("color", "#2a81ea");
        $(this).css("border-color", "#2a81ea");
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
        $(this).css("color", "#2a81ea");
        $(this).css("border-color", "#2a81ea");
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
        $(this).css("color", "#2a81ea");
        $(this).css("border-color", "#2a81ea");
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
        $(this).css("color", "#2a81ea");
        $(this).css("border-color", "#2a81ea");
    });

    // 2nd div position
    var position = $("#AboutCorona").position();
    var top = position.top;
    // 3rd div poisition
    var position3 = $("#Spread").position();
    var top3 = position3.top;
    // 4th div poistion
    var position4 = $("#Symptoms").position();
    var top4 = position4.top;
    // 5th div poistion
    var position5 = $("#Prevention").position();
    var top5 = position5.top;
    // 6th div poistion
    var position6 = $("#Treatment").position();
    var top6 = position6.top;
    // 7th div position
    var position7 = $("#dodont").position();
    var top7 = position7.top;
    // 8th div position
    var position8 = $("#FAQ").position();
    var top8 = position8.top;
    // 9th div position
    var position9 = $("#news").position();
    var top9 = position9.top;
    // 10th div position
    var position10 = $("#footer").position();
    var top10 = position10.top;

    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos < top) {
            $("#nav1").css("color", "#2a81ea");
        }
        else {
            $("#nav1").css("color", "#50658e");
        }

        if (scroll_pos >= top && scroll_pos < top3) {
            $("#nav2").css("color", "#2a81ea");
        }
        else {
            $("#nav2").css("color", "#50658e");
        }

        if (scroll_pos >= top4 && scroll_pos < top5) {
            $("#nav3").css("color", "#2a81ea");
        }
        else {
            $("#nav3").css("color", "#50658e");
        }

        if (scroll_pos >= top5 && scroll_pos < top6) {
            $("#nav4").css("color", "#2a81ea");
        }
        else {
            $("#nav4").css("color", "#50658e");
        }

        if (scroll_pos >= top6 && scroll_pos < top7) {
            $("#nav5").css("color", "#2a81ea");
        }
        else {
            $("#nav5").css("color", "#50658e");
        }

        if (scroll_pos >= top8 && scroll_pos < top9) {
            $("#nav6").css("color", "#2a81ea");
        }
        else {
            $("#nav6").css("color", "#50658e");
        }

        if (scroll_pos >= top9 && scroll_pos < top10) {
            $("#nav7").css("color", "#2a81ea");
        }
        else {
            $("#nav7").css("color", "#50658e");
        }
    });
});