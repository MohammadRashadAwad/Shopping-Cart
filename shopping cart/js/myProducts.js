//let product=JSON.parse(localStorage.getItem('ProductItem'))|| productItemDB;

let insertProduct = document.querySelector(".home .products");
let noProduct = document.querySelector(".home .no-product");
//
function drowUiMyProduct(productItem = []) {
    let productMy=productItem.filter(item=>item.isMe=='yes');
   if(productMy.length!=0){
       console.log('yes')
    let productUI = productMy.map((item) => {
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
               <button class='edit-product' onclick=editProduct(${ item.id })> Edit product </button>
              </div>
            </div>
            <div class="add-to-cart">
            <button class="edit-product" onclick=deleteProduct(${
              item.id
            })>Delete Product</button>
          </div>
            </div>`;
      });
      insertProduct.innerHTML = productUI.join("");
   }
   else{
       console.log("noo");
       noProduct.style.display = "block";
   }
  }
  drowUiMyProduct(JSON.parse(localStorage.getItem("ProductItem")) || productItemDB);


// edit product
function editProduct(id){
    localStorage.setItem('editProductId',id);
    window.location='editProduct.html';
  }

  function deleteProduct(id){
    let product=JSON.parse(localStorage.getItem('ProductItem'))|| productItemDB;
    let productMy=product.filter(item=>item.isMe=='yes');
    let filtered=productMy.filter(item=>item.id!=id);
    let clickedProduct=productMy.find(item=>item.id==id);
    product=product.filter(item=>item.id!=clickedProduct.id)
    localStorage.setItem('ProductItem',JSON.stringify(product))
    drowUiMyProduct(filtered);
  
  }