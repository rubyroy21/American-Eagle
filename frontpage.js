function newImg() {
    document.getElementById("img1").src =
        "https://aeo.imgix.net/img/app/product/2/272941-1100474.jpg?w=312&amp;auto=format";
}
function oldImg() {
    document.getElementById("img1").src =
        "https://aeo.imgix.net/img/app/product/2/272941-1100475.jpg?w=312&amp;auto=format";
}
function newImg1() {
    document.getElementById("img2").src =
        "https://aeo.imgix.net/img/app/product/3/342891-4497661.jpg?w=312&amp;auto=format";
}
function oldImg1() {
    document.getElementById("img2").src =
        "https://aeo.imgix.net/img/app/product/3/342891-4497659.jpg?w=312&amp;auto=format";
}
function newImg2() {
    document.getElementById("img3").src =
        "https://aeo.imgix.net/img/app/product/3/355762-4496778.jpg?w=312&amp;auto=format";
}
function oldImg2() {
    document.getElementById("img3").src =
        "https://aeo.imgix.net/img/app/product/3/355762-4496776.jpg?w=312&amp;auto=format";
}
function newImg3() {
    document.getElementById("img4").src =
        "https://aeo.imgix.net/img/app/product/4/462719-3377213.jpg?w=312&amp;auto=format";
}
function oldImg3() {
    document.getElementById("img4").src =
        "https://aeo.imgix.net/img/app/product/4/462719-3377214.jpg?w=312&amp;auto=format";
}
function newImg4() {
    document.getElementById("img5").src =
        "https://aeo.imgix.net/img/app/product/4/472640-5182045.jpg?w=312&amp;auto=format";
}
function oldImg4() {
    document.getElementById("img5").src =
        "https://aeo.imgix.net/img/app/product/4/472640-5182046.jpg?w=312&amp;auto=format";
}
function newImg5() {
    document.getElementById("img6").src =
        "https://aeo.imgix.net/img/app/product/4/492991-4532516.jpg?w=312&auto=format";
}
function oldImg5() {
    document.getElementById("img6").src =
        "https://aeo.imgix.net/img/app/product/4/492991-4532514.jpg?w=312&auto=format";
}
//Get the button
var my_button = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        my_button.style.display = "block";
    } else {
        my_button.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}