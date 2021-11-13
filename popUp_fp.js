var popup = document.querySelector(".popup");
var close = document.querySelector(".close");
window.onload = function () {
    setTimeout(function () {
        popup.style.display = "block";

        // Add some time delay to show popup
    }, 2000);
};

close.addEventListener("click", () => {
    popup.style.display = "none";
});

var modalBtn = document.querySelector(".modal-btn");
var modalBg = document.querySelector(".modal-bg");
var modalCl = document.querySelector(".modal-close");

modalBtn.addEventListener("click", function () {
    modalBg.classList.add("bg-active");
});

modalCl.addEventListener("click", function () {
    modalBg.classList.remove("bg-active");
});

var modalBtn1 = document.querySelector(".modal-btn1");
var modalBg1 = document.querySelector(".modal-bg1");
var modalCl1 = document.querySelector(".modal-close1");

modalBtn1.addEventListener("click", function () {
    modalBg1.classList.add("bg-active1");
});

modalCl1.addEventListener("click", function () {
    modalBg1.classList.remove("bg-active1");
});

document.querySelector(".next").addEventListener("click", signUp);
var userArr = JSON.parse(localStorage.getItem("userData")) || [];

function signUp() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email1").value;
    var pass = document.getElementById("pass1").value;

    var userProfile = {
        fname: name,
        emailAddress: email,
        password: pass,
    };

    userArr.push(userProfile);
    localStorage.setItem("userData", JSON.stringify(userArr));

    window.location.href = "homepage1.html";
}

document.querySelector(".signInn").addEventListener("click", signIn);

var regdUsers = JSON.parse(localStorage.getItem("userData"));

function signIn() {
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;

    for (var i = 0; i < regdUsers.length; i++) {
        if (regdUsers[i].emailAddress == email && regdUsers[i].password == pass) {
            alert("Login Successfully!");
            window.location.href = "homepage1.html";
            return true;
        }
    }
    for (var j = 0; j < regdUsers.length; j++) {
        if (regdUsers[j].emailAddress != email && regdUsers[j].password != pass) {
            alert("Invalid User Credentials!");
            window.location.href = "homepage1.html";
            return true;
        }
    }
}