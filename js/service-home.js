var wrapper = $("#category-item-wrapper");
var first_wrapper = $(".category-item-wrapper")[0];
var second_wrapper = $(".category-item-wrapper")[1];
var third_wrapper = $(".category-item-wrapper")[2];
var first_item = $(".category-item-wrapper:nth-child(3) .category-item:nth-child(3)");
var second_item = $(".category-item-wrapper:nth-child(4) .category-item:nth-child(3)");

$(document).ready(change_item_position())

$(window).on("resize" , change_item_position);

function change_item_position() {
    width = $(window).width();
    if (width <= 576) {
        first_item.remove();
        second_item.remove();
        third_wrapper.append(first_item[0]);
        third_wrapper.append(second_item[0]);
        $(".about p").html("لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی ");
        }
    else {
        first_item.remove();
        second_item.remove();
        first_wrapper.append(first_item[0]);
        second_wrapper.append(second_item[0]);
    }
}
