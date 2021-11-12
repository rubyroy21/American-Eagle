var data = [
  {
    name: "AE Embroidered T-Shirt",

    image1_url:
      "https://aeo.imgix.net/img/app/product/6/621280-6362545.jpg?w=317&auto=format",
    image2_url:
      "https://aeo.imgix.net/img/app/product/6/621280-6362543.jpg?w=317&auto=format",
    price: 199,
  },
  {
    name: "AE Embroidered T-Shirt",

    image1_url:
      "https://aeo.imgix.net/img/app/product/6/615407-5871851.jpg?w=317&auto=format",
    image2_url:
      "https://aeo.imgix.net/img/app/product/6/615407-5871852.jpg?w=317&auto=format",
    price: 699,
  },
  {
    name: "AE Embroidered T-Shirt",
    image1_url:
      "https://aeo.imgix.net/img/app/product/6/633155-6238998.jpg?w=317&auto=format",
    image2_url:
      "https://aeo.imgix.net/img/app/product/6/612981-5831859.jpg?w=317&auto=format",
    price: 899,
  },
  {
    name: "AE Super Soft Pocket T-Shirt",
    image1_url:
      "https://aeo.imgix.net/img/app/product/6/611445-5796060.jpg?w=317&auto=format",
    price: 999,
  },
  {
    name: "AE Super Soft Pocket T-Shirt",
    image1_url:
      "https://aeo.imgix.net/img/app/product/6/610430-6093712.jpg?w=317&auto=format",
    price: 599,
  },
  {
    name: "AE Super Soft Pocket T-Shirt",
    image1_url:
      "https://aeo.imgix.net/img/app/product/6/610431-5776232.jpg?w=317&auto=format",
    image2_url:
      "https://aeo.imgix.net/img/app/product/6/610431-5776233.jpg?w=317&auto=format",
    price: 1499,
  },
];
//   console.log("here")
localStorage.setItem("shoppingBag", JSON.stringify(data));

var prod = JSON.parse(localStorage.getItem("shoppingBag")) || [];

function pricesort() {
  var select = document.getElementById("sel").value;
  if (select == "high") {
    prod = prod.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  if (select == "low") {
    prod = prod.sort(function (a, b) {
      return a.price - b.price;
    });
  }
  console.log(prod);
  displayItems(prod);
}
var maincon = document.querySelector("#dis");
var mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "contOfP");
maincon.append(mainDiv);
displayItems(prod);
var arr = [];
function displayItems(prod) {
  document.querySelector("#contOfP").innerHTML = "";

  prod.map(function (item) {
    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("id", "imgContainer");

    var img = document.createElement("img");
    img.setAttribute("src", item.image1_url);
    img.addEventListener("click", productPage);

    function productPage() {
      window.location.href = "eachproduct.html";

    }
    var btn = document.createElement("button");
    btn.textContent = "+";
    btn.setAttribute("id", "btn1");
    btn.addEventListener("click", myFunction);

    //      btn.onclick = myFunction;
    function myFunction() {
      arr.push(item);
      localStorage.setItem("cartI", JSON.stringify(arr));
      alert("Added Successfully!")
      window.location.href = "addcart.html";
    }

    var p = document.createElement("p");
    p.textContent = item.name;
    p.setAttribute("id", "para");

    var h3 = document.createElement("h3");
    h3.textContent = item.price;
    h3.setAttribute("id", "para");

    imgDiv.append(img, btn, p, h3);
    mainDiv.append(imgDiv);
  });
}

// var mou =  document.querySelector("#imgContainer");
// mou.addEventListener("mouseenter", function(){
//   displayItem(prod);
// });

//   function displayItem(prod) {
//     document.querySelector("#contOfP").innerHTML = "";

//       prod.map(function (item) {
//         var imgDiv = document.createElement("div");
//         imgDiv.setAttribute("id", "imgContainer");
//       var img = document.createElement("img");
//       img.setAttribute("src", item.image2_url);

//       var p = document.createElement("p");
//       p.textContent = item.name;

//       var h3 = document.createElement("h3");
//       h3.textContent = item.price;

//     imgDiv.append(img,p,h3);
//     mainDiv.append(imgDiv);
//       });

//   }

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
