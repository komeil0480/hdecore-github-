$(".sidebar > ul > li > a[data-toggle='collapse']").on('click' , function() {
    if($(this).hasClass("collapsed")) {
        $(this).addClass("active")
    }
    else {
        $(this).removeClass("active")
    }
    
})