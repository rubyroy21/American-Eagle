var data = [
    {
      name: "AE Embroidered T-Shirt",
      rating: 4,
      image1_url:"https://aeo.imgix.net/img/app/product/6/621280-6362545.jpg?w=317&auto=format",
      image2_url:"https://aeo.imgix.net/img/app/product/6/621280-6362543.jpg?w=317&auto=format",
      price: 1299,
    },
    {
        name: "AE Embroidered T-Shirt",
        rating: 3,
        image1_url:"https://aeo.imgix.net/img/app/product/6/615407-5871851.jpg?w=317&auto=format",
        image2_url:"https://aeo.imgix.net/img/app/product/6/615407-5871852.jpg?w=317&auto=format",
        price: 1299,
    },
    {
        name: "AE Embroidered T-Shirt",
        rating: 4,
        image1_url:"https://aeo.imgix.net/img/app/product/6/612981-5831858.jpg?w=317&auto=format",
        image2_url:"https://aeo.imgix.net/img/app/product/6/612981-5831859.jpg?w=317&auto=format",
        price: 1299,
    },
    {
        name: "AE Super Soft Pocket T-Shirt",
        rating: 4,
        image1_url:"https://aeo.imgix.net/img/app/product/6/611445-5796071.jpg?w=317&auto=format",
        image2_url:"https://aeo.imgix.net/img/app/product/6/611445-5796072.jpg?w=317&auto=format",
        price: 11499,
    }, 
    {
        name: "AE Super Soft Pocket T-Shirt",
        rating: 4,
        image1_url:"https://aeo.imgix.net/img/app/product/6/621280-6362560.jpg?w=317&auto=format",
        image2_url:"https://aeo.imgix.net/img/app/product/6/621280-6362561.jpg?w=317&auto=format",
        price: 11499,
    },
    {
        name: "AE Super Soft Pocket T-Shirt",
        rating: 4,
        image1_url:"https://aeo.imgix.net/img/app/product/6/610431-5776232.jpg?w=317&auto=format",
        image2_url:"https://aeo.imgix.net/img/app/product/6/610431-5776233.jpg?w=317&auto=format",
        price: 11499,
    },
  ];
localStorage.setItem("shoppingBag" , JSON.stringify(data))

var prod = JSON.parse(localStorage.getItem("shoppingBag")) || [];
/*
function additem(){
    console.log("just check");
    console.log(data);
    for(i = 0; i<data.length; i++){
        prod.push(data[i]);
    }
    localStorage.setItem("shoppingBag",JSON.stringify(prod))
}*/
//console.log(additem());

displayItems(prod);
function displayItems(product) {
    var maincon = document.querySelector("#dis")
    maincon.innerHTML = "";  
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


function pricesort(){
    var selected = document.getElementById("sel").value;
    console.log(selected);
    if(selected == "low"){
      product = product.sort(function(a,b){
          return a.price - b.price;
      });
    }
    if(selected == "high"){
      product = product.sort(function(a,b){
          return b.price - a.price;
      });
    }
}