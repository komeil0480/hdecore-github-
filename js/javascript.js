var body = document.querySelector("body");
var html = document.querySelector("html");
var header = document.querySelector("header");
var footer = document.querySelector("footer");

// موقعیت اول که باید رنگ منوی بغل عوض شه اونجاییه که از قسمت Header .میاد بیرون

var links = [
            document.querySelector(".change_color:nth-child(5)"),
            document.querySelector(".change_color:nth-child(4)"),
            document.querySelector(".change_color:nth-child(3)"),
            document.querySelector(".change_color:nth-child(2)"),
            document.querySelector(".change_color:nth-child(1)")
];
var images = [
            document.querySelector(".change_color:nth-child(5) img"),
            document.querySelector(".change_color:nth-child(4) img"),
            document.querySelector(".change_color:nth-child(3) img"),
            document.querySelector(".change_color:nth-child(2) img"),
            document.querySelector(".change_color:nth-child(1) img")
            ];


function change_links_color() {
    for(var i = 0 ; i < 5 ; i++) {
        changeColor(links[i],images[i]);
    }
}

function changeColor(link,image) {
    var scroll = html.scrollTop;
    var header_height= header.offsetHeight;
    var rect= link.getBoundingClientRect();
    var rec = footer.getBoundingClientRect();
    var footer_top = footer.scrollTop;
    var link_top= rect.top + scroll;
    var link_height = link.offsetHeight;
    var x = header_height-link_top;
    var y = footer_top - link_top;
    if (x<0) {
        image.classList.add("invert");
    } else if ( x-link_height > 0) {
        image.classList.remove("invert");
    }
    
}

// روی فوتر و سفید شدن لینک ها کار کنم