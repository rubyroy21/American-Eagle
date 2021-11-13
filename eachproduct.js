var counter = localStorage.getItem("counterRes") || 0;
document.querySelector("#a2").addEventListener("click", incFunction);
document.querySelector("#a1").addEventListener("click", decFunction);
if (counter == null) {
    alert("the counter is null");
}

function incFunction() {
    console.log("here");
    counter++;
    localStorage.setItem("counterRes", counter);
    document.getElementById("res").textContent = counter;
}
function decFunction() {
    counter--;
    localStorage.setItem("counterRes", counter);
    document.getElementById("res").textContent = counter;
}
window.addEventListener("load", function () {
    document.getElementById("res").textContent = counter;
});
