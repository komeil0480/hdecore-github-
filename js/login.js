window.addEventListener("load" , refresh_input);

function refresh_input() {
    var input = document.getElementsByTagName("input");
    for (var i = 0; i < 2; i++) {
        input[i].value = '';
    }
    
}

var check_box = document.querySelector("#check-box");
var check_img = document.querySelector("#check-img");

check_box.addEventListener("click" , check);

function check() {
    if (check_img.style.display == "none"){
        check_img.style.display="inline-block";
        check_box.style.backgroundColor = "rgb(6, 164, 255)";
    } else {
        check_img.style.display="none";
        check_box.style.backgroundColor = "#fff";
    }
}


var input_input_user = document.querySelector("#input-input-user");
var input_text_user = document.querySelector("#input-text-user");
input_input_user.addEventListener("focusout" , inpute_user);
function inpute_user() {
    if (input_input_user.value !== "") {
        input_text_user.classList.add("input-text-top");
        input_input_user.classList.add("input-input-lightBlue");
        input_input_user.classList.remove("input-red");
    } else {
        input_text_user.classList.remove("input-text-top");
        input_input_user.classList.remove("input-input-lightBlue");
    }
}

var input_input_pass = document.querySelector("#input-input-pass");
var input_text_pass = document.querySelector("#input-text-pass");
input_input_pass.addEventListener("focusout" , inpute_pass);
function inpute_pass() {
    if (input_input_pass.value !== "") {
        input_text_pass.classList.add("input-text-top");
        input_input_pass.classList.add("input-input-lightBlue");
    } else {
        input_text_pass.classList.remove("input-text-top");
        input_input_pass.classList.remove("input-input-lightBlue");
    }
}

//برای نشان دادن یا نشان ندادن پسورد به کاربر

var eye = document.querySelector("#pass-eye");
var eye_img = document.querySelector("#pass-eye img");
input_input_pass.addEventListener("keyup" , open_eye);

function open_eye() {
    if (input_input_pass.value !== "") {
        eye.classList.add("eye-open")
    }
}

input_input_pass.addEventListener("focusout" , close_eye);

function close_eye() {
    if (input_input_pass.value == ""){
        eye.classList.remove("eye-open");
    }
}

eye.addEventListener("click" , change_eye);

function change_eye() {
    if (eye_img.src.indexOf("/index/eye-open.png") !== -1) {
        eye_img.src = "/index/eye-closed.png";
        input_input_pass.type="password";
    } else {
        eye_img.src = "/index/eye-open.png";
        input_input_pass.type = "text";
    }
}


// form submit
var form = document.querySelector("#form");
form.addEventListener("submit" , submit);

function submit(e) {
    e.preventDefault();
    if (input_input_user.value == "") {
        input_input_user.classList.add("input-red");
    } else {
        input_input_user.classList.remove("input-red");
    }
    if (input_input_pass.value == "") {
        input_input_pass.classList.add("input-red");
    } else{
        input_input_pass.classList.remove("input-red");
    };
}


input_input_pass.addEventListener("blur" , remove_red);
function remove_red() {
    if (input_input_pass.value != '') {
        input_input_pass.classList.remove("input-red");
    }
}

input_input_user.addEventListener("blur" , remove_red_user);
function remove_red_user() {
    if (input_input_user != '') {
        input_input_user.classList.remove("input-red");
    }
}
