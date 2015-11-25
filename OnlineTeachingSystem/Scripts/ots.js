﻿/*
*   Created by Dwayne ‎2015‎-‎11‎-‎24‎ ‏‎15:38:46
*   Last edit by Dwayne 2015-11-24 22:27:25
*/
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof oldonload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload;
            func();
        }
    }
};
function showAlert() {
    var a = $('#signup-alert')[0];
    if (a.innerText != "") {
        a.style.display = "block";
        a.style.padding = "5px 15px 5px 15px";
        if (a.classList.contains('alert-success')) {
            setTimeout("javascript:location.href='/'", 2000);
        }
    }
}
function showSideBarActive() {
    var a = document.getElementsByClassName('nav-sidebar')[0];
    var currentIndex = a.lastElementChild.innerText[0] - '0';
    a.children[currentIndex].className += ' active';
};
function checkSignUp() {
    var form = $('#signupForm')[0];
    var mail = $('#inputEmail')[0].value;
    var name = $('#inputName')[0].value;
    var password = $('#inputPassword')[0].value;
    var re = /^[\w+\.]+@[\w+\.]+\.\w+$/;
    var ok = 1;

    if (!re.test(mail)) {
        form.children[0].className += " has-error";
        form.children[0].firstElementChild.innerText = "Invalid mail address";
        ok = 0;
    } else {
        form.children[0].className = "form-group";
        form.children[0].firstElementChild.innerText = "Email Address";
    }

    if (name.length < 6 || name.length > 16) {
        form.children[1].className += " has-error";
        form.children[1].firstElementChild.innerText = "Length of Nick Name should between 6 and 16";
        ok = 0;
    } else {
        form.children[1].className = "form-group";
        form.children[1].firstElementChild.innerText = "Nick Name";
    }

    if (password.length < 6 || password.length > 16) {
        form.children[2].className += " has-error";
        form.children[2].firstElementChild.innerText = "Length of Password should between 6 and 16";
        ok = 0;
    } else {
        form.children[2].className = "form-group";
        form.children[2].firstElementChild.innerText = "Password";
    }

    return ok == 1 ? true : false;
}
function addLoginAttr() {
    if ($('#nav-left')[0].innerText == "Log in") {
        $('#nav-left').attr("data-toggle", "modal");
        $('#nav-left').attr("data-target", "#loginModal");
    }
}
function checkLogin() {
    var form = $('#loginForm')[0];
    var mail = $('#loginEmail')[0].value;
    var re = /^[\w+\.]+@[\w+\.]+\.\w+$/;
    var ok = 1;

    if (!re.test(mail)) {
        $('#loginEmailLabel')[0].className += " has-error";
        $('#loginEmailLabel')[0].firstElementChild.innerText = "Invalid mail address";
        ok = 0;
    } else {
        $('#loginEmailLabel')[0].className = "form-group";
        $('#loginEmailLabel')[0].firstElementChild.innerText = "Email Address";
    }

    return ok == 1 ? true : false;
}
function showLogin() {
    if ($('#login-alert').hasClass('alert-danger')) {
        $('#nav-left')[0].click();
        $('#login-alert')[0].style.display = "block";
        $('#login-alert')[0].style.padding = "5px 15px 5px 15px";
    }
}