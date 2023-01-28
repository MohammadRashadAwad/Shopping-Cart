// insert favorite product in page cart product
let FavoriteProduct = document.querySelector(".home .products");
let noProduct = document.querySelector(".home .no-product");
function drowUiFavoriteProduct(allproductItem = []) {
  if (JSON.parse(localStorage.getItem("FavoriteProduct")).length === 0)
    noProduct.style.display = "block";

  let productItem =
    JSON.parse(localStorage.getItem("FavoriteProduct")) || allproductItem;
  let productUI = productItem.map((item) => {
    return `
          <div class="product">
          <div class="image">
            <img src="${item.imgUrl}" alt="${item.altImg}">
          </div>
          <div class="product-info">
            <h1> ${item.title}</h1>
            <div class="desc">
             <p>${item.desc}</p>
             <span>size : ${item.size}</span>
             <p class="salary" >Salary : ${item.salary}</p>
             <span>Quntatit ${item.qty} </span>
            </div>
          </div>
          <div class="add-to-cart">
            <button class="add-to-cart-btn" onclick=RemoveFormCart(${item.id})>Remove Form Favorite</button>
          </div>
          </div>`;
  });
  FavoriteProduct.innerHTML = productUI.join("");
}
drowUiFavoriteProduct();
function RemoveFormCart(id) {
  let FavoriteProduct = localStorage.getItem("FavoriteProduct");
  if (FavoriteProduct) {
    let items = JSON.parse(FavoriteProduct);
    let filtered = items.filter((item) => item.id !== id);
    localStorage.setItem("FavoriteProduct", JSON.stringify(filtered));
    drowUiFavoriteProduct(filtered);
  }
}
