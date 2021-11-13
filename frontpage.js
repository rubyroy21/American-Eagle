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

console.log("here")
var cartList = JSON.parse(localStorage.getItem("cartData"));
console.log(cartList);
var cartDiv = document.createElement("div");
cartDiv.setAttribute("id", "cartContainer");



var itemDiv = document.querySelector("#cartProducts");
itemDiv.append(cartDiv)

showProduct(cartList);

function showProduct(cartList) {
    console.log("here")
    cartList.map(function (item) {
        //   console.log(item);
        var imgD = document.createElement("div");
        imgD.setAttribute("id", "ImagesD")

        var contents = document.createElement("div");
        contents.setAttribute("id", "contDiv")
        var img = document.createElement("img");
        img.setAttribute("src", item.image1_url);
        img.setAttribute("id", "icons")
        var h2 = document.createElement("h2");
        h2.textContent = item.name;

        var h3 = document.createElement("h3");
        h3.textContent = item.price;
        var p1 = document.createElement("p");
        p1.textContent = "Color: Black";

        var p2 = document.createElement("p");
        p2.textContent = "Size: M";
        var p3 = document.createElement("p");
        p3.textContent = "Qty: 1";

        var pDiv = document.createElement("div");
        pDiv.setAttribute("id", "pTags")
        pDiv.innerHTML = "<p>Edit   | <span>Remove</span></p>";
        imgD.append(img);
        contents.append(h2, h3, p1, p2, p3, pDiv);
        cartDiv.append(imgD, contents);
    });
}
var totalPrice = cartList.reduce(function (acc, cv) {
    return acc + Number(cv.price);
}, 0);

console.log(totalPrice);
var tot = document.getElementById("totalP")
tot.textContent = totalPrice;