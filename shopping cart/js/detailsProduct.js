let Products=JSON.parse(localStorage.getItem("ProductItem"))||productItemDB;
let ProductId=localStorage.getItem("ProductId")
let itemDom=document.querySelector(".details-product")
let detailsProduct=Products.find((item)=> item.id==ProductId);
console.log(detailsProduct)
itemDom.innerHTML=`
<img src="${detailsProduct.imgUrl}" alt="">
<h2>${detailsProduct.title}</h2>
<p>${detailsProduct.desc} </p>

<span>size : ${detailsProduct.size}</span>
<p>salary: ${detailsProduct.salary} </p>
`