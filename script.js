$(".top-left").click(function() {
    $(".top-left").text("Thank you for clicking on me!");
    $(".top-left").css("background-color","green");
});
$(".top-right").dblclick(function() {
    $(".top-right").text("Thank you for double-clicking on me!");
    $(".top-right").css("background-color","blue");
});
$(".bottom-left").mouseenter(function() {
    $(".bottom-left").text("Thank you for hovering over me!");
    $(".bottom-left").css("background-color","yellow");
    });
$(".bottom-left").mouseleave(function() {
    $(".bottom-left").text("Put your mouse over me or else...");
    $(".bottom-left").css("background-color","lightgrey");
});
$(".bottom-right").mouseenter(function() {
$(".bottom-right").text("Thank you for visiting!");
$(".bottom-right").css("background-color","white");
});
$(".bottom-right").mouseenter(function() {
    $(".bottom-right").text("Come again soon!");
    $(".bottom-right").css("background-color","red");
});
