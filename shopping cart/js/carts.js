// insert favorite product in page cart product
//
let insertProduct = document.querySelector(".home .products");
let noProduct = document.querySelector(".home .no-product");
function drowUiCartProduct(allproductItem = []) {
  if (JSON.parse(localStorage.getItem("ProductInCart")).length === 0)
    noProduct.style.display = "block";

  let productItem =
    JSON.parse(localStorage.getItem("ProductInCart")) || allproductItem;
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
            <button class="add-to-cart-btn" onclick=RemoveFormCart(${item.id})>Remove Form Cart</button>
          </div>
          </div>`;
  });
  insertProduct.innerHTML = productUI.join("");
}
drowUiCartProduct();
function RemoveFormCart(id) {
  let productInCart = localStorage.getItem("ProductInCart");
  if (productInCart) {
    let items = JSON.parse(productInCart);
    let filtered = items.filter((item) => item.id !== id);
    localStorage.setItem("ProductInCart", JSON.stringify(filtered));
    drowUiCartProduct(filtered);
  }
}
