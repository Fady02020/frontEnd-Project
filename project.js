$(document).ready(function () {
    // changes background color when button clicked 
    $("#tgl-btn").click(function () {
        $("#navbar").toggleClass("scnd-bg");
        $("#Spread").toggleClass("scnd-bg");
        $("#AboutCorona").toggleClass("scnd-bg");
        $("#Symptoms").toggleClass("scnd-bg");
        $("#Prevention").toggleClass("scnd-bg");
        $("#Treatment").toggleClass("scnd-bg");
        $("#dodont").toggleClass("scnd-bg");
        $("#FAQ").toggleClass("scnd-bg");
        $("#news").toggleClass("scnd-bg");
        $("#footer").toggleClass("scnd-bg");
    });
    // closes side bar when button is closed 
    $("#nav1").click(function () {
        if ($('#tgl-btn').attr('aria-expanded') == 'true') {
            $('').myfunction();
        }
    });
    $("#nav2").click(function () {
        if ($('#tgl-btn').attr('aria-expanded') == 'true') {
            $('').myfunction();
        }
    });
    $("#nav3").click(function () {
        if ($('#tgl-btn').attr('aria-expanded') == 'true') {
            $('').myfunction();
        }
    });
    $("#nav4").click(function () {
        if ($('#tgl-btn').attr('aria-expanded') == 'true') {
            $('').myfunction();
        }
    });
    $("#nav5").click(function () {
        if ($('#tgl-btn').attr('aria-expanded') == 'true') {
            $('').myfunction();
        }
    });
    $("#nav6").click(function () {
        if ($('#tgl-btn').attr('aria-expanded') == 'true') {
            $('').myfunction();
        }
    });
    $("#nav7").click(function () {
        if ($('#tgl-btn').attr('aria-expanded') == 'true') {
            $('').myfunction();
        }
    });
    $("#nav8").click(function () {
        if ($('#tgl-btn').attr('aria-expanded') == 'true') {
            $('').myfunction();
        }
    });
    $("#nav9").click(function () {
        if ($('#tgl-btn').attr('aria-expanded') == 'true') {
            $('').myfunction();
        }
    });
    (function ($) {
        $.fn.myfunction = function () {
            $('#tgl-btn').attr('aria-expanded', 'false');
            $('#tgl-btn').toggleClass("collapsed");
            $('#navbarSupportedContent').toggleClass("show");
            $("#navbar").toggleClass("scnd-bg");
            $("#Spread").toggleClass("scnd-bg");
            $("#AboutCorona").toggleClass("scnd-bg");
            $("#Symptoms").toggleClass("scnd-bg");
            $("#Prevention").toggleClass("scnd-bg");
            $("#Treatment").toggleClass("scnd-bg");
            $("#dodont").toggleClass("scnd-bg");
            $("#FAQ").toggleClass("scnd-bg");
            $("#news").toggleClass("scnd-bg");
            $("#footer").toggleClass("scnd-bg");
        };
    })(jQuery);

    // changes navbar background color and go up button dissappers 
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").removeClass("bg-transparent", function () {
                $("nav").addClass("bg-white", 500, function () {
                    $("nav").addClass("shadow");
                });
            });
            $("#goUp").show(500);
        }
        if (scroll_pos == 0) {
            $("nav").addClass("bg-transparent", 700);
            $("nav").removeClass("shadow");
            $("nav").removeClass("bg-white");
            $("#goUp").hide(500);
        }
    });
    // toggles plus icon with minus icon 
    $("a.font-button").click(function (e) {
        e.preventDefault();
        $(this).find("i.icon-plus").toggleClass("fa-minus fa-plus");
    });
    // toggles color od the FAQ buttons when they are clicked 
    $("p.accordion-header").click(function (e) {
        e.preventDefault();
        $(this).find("a.font-button").toggleClass("button-style-onclick button-style");
    });
    // shows and hides FAQ info when each button is clicked 
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

    // highlightes the navbor buttons when we are hovering on their div 

    // about corona div
    var position = $("#AboutCorona").position();
    var top = position.top;
    // spread div
    var position2 = $("#Spread").position();
    var top2 = position2.top;
    // symptomps div
    var position3 = $("#Symptoms").position();
    var top3 = position3.top;
    // prevention div
    var position4 = $("#Prevention").position();
    var top4 = position4.top;
    // treatment div
    var position5 = $("#Treatment").position();
    var top5 = position5.top;
    // do & don't div
    var position6 = $("#dodont").position();
    var top6 = position6.top;
    // FAQ div
    var position7 = $("#FAQ").position();
    var top7 = position7.top;
    // news div
    var position8 = $("#news").position();
    var top8 = position8.top;
    // footer div
    var position9 = $("#footer").position();
    var top9 = position9.top;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos < top-50) {
            $("#nav1").css("color", "#2a81ea");
        }
        else {
            $("#nav1").css("color", "#50658e");
        }

        if (scroll_pos >= top-50 && scroll_pos < top2) {
            $("#nav2").css("color", "#2a81ea");
        }
        else {
            $("#nav2").css("color", "#50658e");
        }

        if (scroll_pos >= top3 && scroll_pos < top4) {
            $("#nav3").css("color", "#2a81ea");
        }
        else {
            $("#nav3").css("color", "#50658e");
        }

        if (scroll_pos >= top4 && scroll_pos < top5) {
            $("#nav4").css("color", "#2a81ea");
        }
        else {
            $("#nav4").css("color", "#50658e");
        }

        if (scroll_pos >= top5 && scroll_pos < top6) {
            $("#nav5").css("color", "#2a81ea");
        }
        else {
            $("#nav5").css("color", "#50658e");
        }

        if (scroll_pos >= top6 && scroll_pos < top7) {
            $("#nav8").css("background", "#50658e");
            $("#nav8").css("color", "#ffff");
        }
        else {
            $("#nav8").css("background", "#2a81ea");
            $("#nav8").css("color", "#ffff");
        }

        if (scroll_pos >= top7 && scroll_pos < top8) {
            $("#nav6").css("color", "#2a81ea");
        }
        else {
            $("#nav6").css("color", "#50658e");
        }

        if (scroll_pos >= top8 && scroll_pos < top9) {
            $("#nav7").css("color", "#2a81ea");
        }
        else {
            $("#nav7").css("color", "#50658e");
        }
    });
});
