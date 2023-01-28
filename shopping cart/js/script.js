// Define product
let insertProduct = document.querySelector(".home .products");
let shoppingCart = document.querySelector(".shopping-cart");
let cartsProductMenu = document.querySelector(".shopping-cart .carts-product");
let cartsProductDom = document.querySelector(".carts-product .product");
let badge = document.querySelector(".shopping-cart .badge");
let productItem = productItemDB;
//display product in Home page Html
function drowUiProduct(productItem = []) {
  let productUI = productItem.map((item) => {
    return `
        <div class="product" style="border:${
          item.isMe == "yes" ? "solid 2px ;" : ""
        }"> 
        <div class="image">
          <img src="${item.imgUrl}" alt="${item.altImg}">
        </div>
        <div class="product-info">
          <a onclick=getId(${item.id})> ${item.title}</a>
          <div class="desc">
           <p>${item.desc}</p>
           <span>size : ${item.size}</span>
           <p class="salary" >Salary : ${item.salary}</p>
          ${
            item.isMe == "yes"
              ? "<button class='edit-product' onclick=editProduct(" +
                item.id +
                ")> Edit product </button>"
              : ""
          }
          </div>
        </div>
        <div class="add-to-cart">
          <button class="add-to-cart-btn" onclick=Addtocart(${
            item.id
          })>Add To Cart</button>
          <i class="fa fa-heart"  style="color: ${
            item.liked == true ? "red" : ""
          }"  onclick= addToFavorite(${item.id})></i>
        </div>
        </div>`;
  });
  insertProduct.innerHTML = productUI.join("");
}
drowUiProduct(JSON.parse(localStorage.getItem("ProductItem")) || productItemDB);

//save favorite product in local storge
let addedItem = localStorage.getItem("ProductInCart")
  ? JSON.parse(localStorage.getItem("ProductInCart"))
  : [];
// check if there is item in LocalStorge
function cartMenuData() {
  if (addedItem) {
    addedItem.map((item) => {
      //insert favorite product in cartsProductDom
      cartsProductDom.innerHTML += `<p> ${item.title} (${item.qty}) </p>`;
    });
  }
  badge.style.display = "block";
  badge.innerHTML = addedItem.length;
}
cartMenuData();
//functio add to cart
function Addtocart(id) {
  if (localStorage.getItem("UserName")) {
    let products =
      JSON.parse(localStorage.getItem("ProductItem")) || productItem;
    let product = products.find((item) => item.id == id);
    let isProductInCart = addedItem.some((i) => i.id === product.id);
    if (isProductInCart) {
      addedItem = addedItem.map((p) => {
        if (p.id === product.id) p.qty += 1;
        return p;
      });
    } else {
      addedItem.push(product);
    }
    cartsProductDom.innerHTML = "";
    addedItem.forEach(
      (item) =>
        (cartsProductDom.innerHTML += `<p> ${item.title} (${item.qty})  </p>`)
    );

    // save Data
    localStorage.setItem("ProductInCart", JSON.stringify(addedItem)); //insert additem in local storge
    // Add Counter of items
    let cartsProductItem = document.querySelectorAll(
      ".shopping-cart .carts-product .product p"
    );
    badge.innerHTML = cartsProductItem.length;
    badge.style.display = "block";
  } else window.location = "login.html";
}

function getUniqueArr(arr, filterType) {
  let unique = arr
    .map((item) => item[filterType])
    .map(
      (item, index, finalArray) => finalArray.indexOf(item) == index && index
    )
    .filter((item) => arr[item])
    .map((item) => arr[item]);
  return unique;
}

// open&&close icone shopping cart
shoppingCart.addEventListener("click", () => {
  if (cartsProductMenu.style.display == "none")
    cartsProductMenu.style.display = "block";
  else cartsProductMenu.style.display = "none";
});
function getId(id) {
  localStorage.setItem("ProductId", id);
  window.location = "detailsProduct.html";
}
// search
let inputSearch = document.querySelector("#search");
inputSearch.addEventListener("keyup", (e) => {
  searchProduct(
    e.target.value.trim(),
    JSON.parse(localStorage.getItem("ProductItem"))
  );
  if (e.target.value.trim() == "") {
    drowUiProduct(JSON.parse(localStorage.getItem("ProductItem")));
  }
});
function searchProduct(title, arry) {
  let arr = arry.filter(
    (item) => item.title.toLowerCase().indexOf(title.toLowerCase()) != -1
  );
  drowUiProduct(arr);
}
// add to favorite
let allFavorite = localStorage.getItem("FavoriteProduct")
  ? JSON.parse(localStorage.getItem("FavoriteProduct"))
  : [];
function addToFavorite(id) {
  if (localStorage.getItem("UserName")) {
    let choseItems =
      JSON.parse(localStorage.getItem("ProductItem")) || productItem;
    let favoriteProduct = choseItems.find((item) => item.id === id);
    allFavorite = [...allFavorite, favoriteProduct];
    let uniqueProduct = getUniqueArr(allFavorite, "id");
    localStorage.setItem("FavoriteProduct", JSON.stringify(uniqueProduct));
    productItem.map((item) => {
      if (item.id === favoriteProduct.id) item.liked = true;
    });
    localStorage.setItem("ProductItem", JSON.stringify(productItem));
    drowUiProduct(productItem);
  } else {
    window.location = "login.html";
  }
}
//function filter by size
let filterSize = document.getElementById("filter-by-size");
filterSize.addEventListener("change", filterProductBySize);
function filterProductBySize(e) {
  let filterVal = e.target.value;
  let product = JSON.parse(localStorage.getItem("ProductItem")) || productItem;
  if (filterVal === "all") {
    drowUiProduct(product);
  } else {
    let x = product.filter((i) => i.size === filterVal);
    drowUiProduct(x);
  }
}
// edit product
function editProduct(id){
  localStorage.setItem('editProductId',id);
  window.location='editProduct.html';
}