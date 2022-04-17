const url = "https://fakestoreapi.com/products";
const mensUrl = "https://fakestoreapi.com/products/category/men's clothing";
const womenUrl = "https://fakestoreapi.com/products/category/women's clothing";
const electronicsUrl = "https://fakestoreapi.com/products/category/electronics";
const jeweleryUrl = "https://fakestoreapi.com/products/category/jewelery";
const searchInput = document.getElementById("search");
const searchItems = document.getElementById("searchProducts");

function womenData() {
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
          <p class="price">$${values.price}</p>
          <button class="add-cart-btn">Add To Bag</button>
        </div>
      </div>`;
      });
      document.getElementById("womenProducts").innerHTML = femaleData;
      let cartBtn = document.getElementsByClassName("add-cart-btn");
      for (let i = 0; i < cartBtn.length; i++) {
        let addToCart = cartBtn[i];
        addToCart.addEventListener("click", addToCartClicked);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function menData() {
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
        <p class="price">$${values.price}</p>
        <button class="add-cart-btn">Add To Bag</button>
      </div>
    </div>`;
      });
      document.getElementById("menProducts").innerHTML = maleData;
      let cartBtn = document.getElementsByClassName("add-cart-btn");
      for (let i = 0; i < cartBtn.length; i++) {
        let addToCart = cartBtn[i];
        addToCart.addEventListener("click", addToCartClicked);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function jeweleryData() {
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
        <p class="price">$${values.price}</p>
        <button class="add-cart-btn">Add To Bag</button>
      </div>
    </div>`;
      });
      document.getElementById("jewerelyProducts").innerHTML = jewlData;
      let cartBtn = document.getElementsByClassName("add-cart-btn");
      for (let i = 0; i < cartBtn.length; i++) {
        let addToCart = cartBtn[i];
        addToCart.addEventListener("click", addToCartClicked);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function electronicsData() {
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
        <p class="price"> $${values.price}</p>
        <button class="add-cart-btn">Add To Bag</button>
      </div>
    </div>`;
      });
      document.getElementById("electronicsProducts").innerHTML = tronicsData;
      let cartBtn = document.getElementsByClassName("add-cart-btn");
      for (let i = 0; i < cartBtn.length; i++) {
        let addToCart = cartBtn[i];
        addToCart.addEventListener("click", addToCartClicked);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

menData();

womenData();

jeweleryData();

electronicsData();

function addToCartClicked(e) {
  let button = e.target;
  console.log(button);
  let shopItem = button.parentElement.parentElement;
  let title = shopItem.getElementsByClassName("name")[0].innerText;
  let price = shopItem.getElementsByClassName("price")[0].innerText;
  let imgSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  addItemToCart(title, price, imgSrc);
}

function addItemToCart(title, price, imgSrc) {
  let cartContents = document.getElementsByClassName("products")[0];
  // let cartContent = document.getElementsByClassName("product")[0];
  let newCartRow = document.createElement("div");
  newCartRow.classList.add("product");
  let cartRow = `
  <img width="60" src="${imgSrc}" alt="iphone" />
  <div>
    <span class='title'> ${title}</span>
    <div class='price-section'>
    <input type="number" value="1" class="cart-quantity-input" />
    ${price}
    </div>

  </div>
  <button class='btn-danger'>
    <i class="bi bi-x"></i>
  </button>`;

  newCartRow.innerHTML = cartRow;
  cartContents.appendChild(newCartRow);
  newCartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeItemsFromCart)
  
}

let removeFromCart = document.getElementsByClassName("btn-danger");
function removeItemsFromCart(){
  for (let i = 0; i < removeFromCart.length; i++) {
      let button = removeFromCart[i];
      button.addEventListener("click", function (event) {
        let buttonClicked = event.target;
        buttonClicked.parentNode.parentNode.remove();
      });
    }
}

// create an cart that slides in from right to left and check out page
let openPanelButton = document.getElementsByClassName("open-panel");
let closePanelButton = document.getElementsByClassName("close-panel");
let cartPanel = document.querySelector(".cart-panel");

openPanelButton[0].onclick = () => {
  console.log("here");
  openPanelButton[0].classList.add("hide");
  cartPanel.classList.toggle("open");
  cartPanel.style.overflowY = "auto";
  document.documentElement.style.getPropertyValue("--scroll-y");
  const body = document.body;
  body.style.height = "100vh";
  body.style.overflowY = "hidden";
  removeItemsFromCart()
};

closePanelButton[0].onclick = () => {
  openPanelButton[0].classList.remove("hide");
  cartPanel.classList.remove("open");
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  body.style.height = "";
  body.style.overflowY = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
};






// create an search page that search all product from api via name or category

const userCardTemplate = document.querySelector("[data-user-template]");
const cardContainer = document.querySelector("[data-card-container]");

let products = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  // console.log(shopItems)

  products.forEach((product) => {
    const isVisible =
      product.name.toLowerCase().includes(value) ||
      product.category.toLowerCase().includes(value);
    product.element.classList.toggle("cardHide", !isVisible);
  });
  //   if isVisible not true it will hide the card and only show card that have the same value as the input
});

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    products = data.map((shopItem) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const cardImg = card.querySelector("[data-image]");
      const cardTitle = card.querySelector("[data-title]");
      const cardPrice = card.querySelector("[data-price]");

      cardImg.src = shopItem.image;
      cardTitle.innerText = shopItem.title;
      cardPrice.innerText = `$` + shopItem.price;
      console.log(card);
      cardContainer.append(card);
      // console.log(shopItem)
      return {
        name: shopItem.title,
        category: shopItem.category,
        element: card,
      };
    });
    let cartBtn = document.getElementsByClassName("add-cart-btn");
      for (let i = 0; i < cartBtn.length; i++) {
        let addToCart = cartBtn[i];
        addToCart.addEventListener("click", addToCartClicked);
      }
  });
