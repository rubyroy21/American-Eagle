var prod = JSON.parse(localStorage.getItem("cartI")) || [];
displayItems(prod);
function displayItems(product) {
  var maincon = document.getElementById("disim");
  //maincon.innerHTML = "";
  product.map(function (item) {
    var div = document.createElement("div")
    var h1 = document.createElement("h1");
    h1.textContent = item.name;
    var h2 = document.createElement("h2");
    h2.textContent = item.price;
    var img = document.createElement("img");
    img.setAttribute("src", item.image_url);
    div.append(h1, h2, img);
    maincon.append(div);

  });

}
