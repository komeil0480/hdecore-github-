
link = $("#toggle-nav");
var rotateCounter = 0
$("#toggle-nav").on("click" , function() {
    if (rotateCounter == 0) {
        $("#toggle-nav img").css( "transform" , "rotateY(180deg)");
        rotateCounter = 1;
        $(".nav-wrapper").addClass("closeee");
    } else {
        $("#toggle-nav img").css("transform" , "rotateY(0deg)");
        rotateCounter = 0;
        $(".nav-wrapper").removeClass("closeee");
    }
})


