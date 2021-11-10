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