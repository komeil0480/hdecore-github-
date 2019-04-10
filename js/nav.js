var link = $("#toggle-nav");
var nav = $("#nav");
img = $("#toggle-nav img");

link.on("click" , function() {
    if (img.attr('src') === "index/double-right.png") {
        img.attr("src" , "index/double-left.png" );
        nav.addClass("closee")
    }
    else {
        img.attr("src" , "index/double-right.png" );
        nav.addClass("opene")
        nav.removeClass("closee")
    }
    
    
    // img.attr("src" , "index/iconfinder_chevron5_216596.png" );
})


