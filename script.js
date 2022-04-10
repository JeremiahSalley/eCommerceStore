const url = "https://fakestoreapi.com/products";
const mensUrl = "https://fakestoreapi.com/products/category/men's clothing";
const womenUrl = "https://fakestoreapi.com/products/category/women's clothing";
const electronicsUrl = "https://fakestoreapi.com/products/category/electronics";
const jeweleryUrl = "https://fakestoreapi.com/products/category/jewelery";

function womenData(){
  fetch(womenUrl)
    .then((res) => res.json())
    .then((data) => {
      let femaleData = "";
      data.map((values) => {
        femaleData += `<div class="card womenCards">
        <div class="imageContainer">
          <img class="shop-item-image" src="${values.image}">
        </div>
        <div class="shopDetails">
          <h5 class="name">${values.title}</h5>
          <p class="price">${values.price}</p>
          <button class="add-cart-btn">Add To Bag</button>
        </div>
      </div>`
      });
      console.log(femaleData)
      document.getElementById("womenProducts").innerHTML = femaleData;
    })
    .catch((err) => {
      console.log(err);
    });
}

function menData(){
  fetch(mensUrl)
  .then((res) => res.json())
  .then((data) => {
    let maleData = "";
    data.map((values) => {
      maleData += `<div class="card">
      <div class="imageContainer">
        <img class="shop-item-image" src="${values.image}">
      </div>
      <div class="shopDetails">
        <h5 class="name">${values.title}</h5>
        <p class="price">${values.price}</p>
        <button class="add-cart-btn">Add To Bag</button>
      </div>
    </div>`
    });
    console.log(maleData)
    document.getElementById("menProducts").innerHTML = maleData;
  })
  .catch((err) => {
    console.log(err);
  })
}


function jeweleryData(){
  fetch(jeweleryUrl)
  .then((res) => res.json())
  .then((data) => {
    let jewlData = "";
    data.map((values) => {
      jewlData += `<div class="card">
      <div class="imageContainer">
        <img class="shop-item-image" src="${values.image}">
      </div>
      <div class="shopDetails">
        <h5 class="name">${values.title}</h5>
        <p class="price">${values.price}</p>
        <button class="add-cart-btn">Add To Bag</button>
      </div>
    </div>`
    });
    console.log(jewlData)
    document.getElementById("jewerelyProducts").innerHTML = jewlData;
  })
  .catch((err) => {
    console.log(err);
  })
}


function electronicsData(){
  fetch(electronicsUrl)
  .then((res) => res.json())
  .then((data) => {
    let tronicsData = "";
    data.map((values) => {
      tronicsData += `<div class="card">
      <div class="imageContainer">
        <img class="shop-item-image" src="${values.image}">
      </div>
      <div class="shopDetails">
        <h5 class="name">${values.title}</h5>
        <p class="price">${values.price}</p>
        <button class="add-cart-btn">Add To Bag</button>
      </div>
    </div>`
    });
    console.log(tronicsData)
    document.getElementById("electronicsProducts").innerHTML = tronicsData;
  })
  .catch((err) => {
    console.log(err);
  })
}




menData()

womenData()

jeweleryData()

electronicsData()
