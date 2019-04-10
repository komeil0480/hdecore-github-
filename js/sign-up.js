window.addEventListener("load" , refresh_input);

function refresh_input() {
    var input = document.getElementsByTagName("input");
    for (var i = 0; i < 2; i++) {
        input[i].value = '';
    }
    
}

var input_first_name = document.querySelector("#input-first-name");
var input_last_name = document.querySelector("#input-last-name");
var input_email = document.querySelector("#input-email");
var input_tel = document.querySelector("#input-tel");
var input_pass = document.querySelector("#input-pass");
var input_pass_re = document.querySelector("#input-pass-re");
var input_address = document.querySelector("#input-address");

var text_first_name = document.querySelector("#text-first-name");
var text_last_name = document.querySelector("#text-last-name");
var text_email = document.querySelector("#text-email");
var text_tel = document.querySelector("#text-tel");
var text_pass = document.querySelector("#text-pass");
var text_pass_re = document.querySelector("#text-pass-re");
var text_address = document.querySelector("#text-address");

function inpute(_input, _text) {
    if (_input.value !== "") {
        _text.classList.add("input-text-top");
        _input.classList.add("input-input-lightBlue");
        _input.classList.remove("input-red");
    } else {
        _text.classList.remove("input-text-top");
        _input.classList.remove("input-input-lightBlue");
    }
    console.log(_input.value)
}
input_first_name.addEventListener("keyup" , input_first);
input_last_name.addEventListener("keyup" , input_last);
input_email.addEventListener("keyup" , input_email_f);
input_tel.addEventListener("keyup" , input_tel_f);
input_pass.addEventListener("keyup" , input_pass_f);
input_pass_re.addEventListener("keyup" , input_pass_re_f);
input_address.addEventListener("keyup" , input_address_f)

function input_first() {
    inpute(input_first_name, text_first_name);
}
function input_last() {
    inpute(input_last_name, text_last_name);
}
function input_email_f() {
    inpute(input_email, text_email);
}
function input_tel_f() {
    inpute(input_tel, text_tel);
}
function input_pass_f() {
    inpute(input_pass, text_pass);
}
function input_pass_re_f() {
    inpute(input_pass_re, text_pass_re);
}
function input_address_f() {
    inpute(input_address, text_address)
}




//برای نشان دادن یا نشان ندادن پسورد به کاربر

var eye = document.querySelector("#pass-eye");
var eye_img = document.querySelector("#pass-eye img");


eye.addEventListener("click" , change_eye);

function change_eye() {
    if (eye_img.src.indexOf("/index/eye-open.png") !== -1) {
        eye_img.src = "/index/eye-closed.png";
        input_pass.type="password";
        input_pass_re.type="password";
    } else {
        eye_img.src = "/index/eye-open.png";
        input_pass.type = "text";
        input_pass_re.type = "text";
    }
}


// برای تائید فرم
// form submit
var form = document.querySelector("#form");
form.addEventListener("submit" , submit);

function submit(e) {
    e.preventDefault();
    [input_first_name, input_last_name, input_email,input_tel, input_pass, input_pass_re].forEach(_element => {
        check_input(_element);
    });
    //برای قرمز شدن در صورت مساوی نبودن دو رمز عبور
    pass_is_equal();
}


function check_input(_input) {
    if (_input.value == "") {
        _input.classList.add("input-red");
    } else {
        _input.classList.remove("input-red");
    }
}

//تابع برای قرمز شدن در صورت مساوی نبودن دو رمز عبور

function pass_is_equal() {
    if (input_pass.value !== input_pass_re.value) {
        input_pass.classList.add("input-red");
        input_pass_re.classList.add("input-red");
    }
}


// برای بزرگ شدن ورودی ایمیل 
input_email.addEventListener("focus" , op) 


function op() {
    input_tel.style.opacity = "0";
    text_tel.style.opacity = "0";
}

input_email.addEventListener("focusout" , op_n) 

function op_n() {
    input_tel.style.opacity = "1";
    text_tel.style.opacity = "1";
}