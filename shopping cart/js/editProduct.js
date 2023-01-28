// // var
let products= JSON.parse(localStorage.getItem("ProductItem")) ||productItemDB;
console.log("before" ,products);
let productId=localStorage.getItem('editProductId');
let editProducts=products.find(i=>i.id==productId);

let nameProduct=document.querySelector('.product-name');
let descProduct=document.querySelector('.product-description');
let selectProductSize=document.querySelector('.product-size');
let formCreat=document.querySelector('.form-creat');
let uploadFile =document.querySelector('.upload-image');
let productImage;
let productSize;
nameProduct.value=editProducts.title
descProduct.value=editProducts.desc
selectProductSize.value=editProducts.size
productImage=editProducts.imgUrl;


// //Event
selectProductSize.addEventListener("change",getSelectProductSize)
formCreat.addEventListener('submit',updateProductFun)
uploadFile.addEventListener("change",uploadImage)
// //function

function getSelectProductSize(e){
     productSize=e.target.value;
 
 }
function updateProductFun(e){
    e.preventDefault();
editProducts.title=nameProduct.value;
editProducts.desc=descProduct.value;
editProducts.size=selectProductSize.value
editProducts.imgUrl=productImage;
localStorage.setItem("ProductItem",JSON.stringify(products))
setTimeout(() => {
    window.location='index.html'
}, 1500);
}
function uploadImage(){
    let file=this.files[0];
    let type=["image/jpeg","image/png"]
    if(type.indexOf(file.type)==-1){
    alert("the file not suported")
    return;
    }
    if(file.size > 2 *1024 *1024){
    alert('Image not Exced 2MG')
    return;}
    getImageBase64(file)
    // productImage=URL.createObjectURL(file) //blob
  
}
function getImageBase64(file){
let reader=new FileReader();
reader.readAsDataURL(file);
reader.onload=function(){
    productImage=reader.result;
}
reader.onerror=function(){
    alert("ERROR ")
}
}

