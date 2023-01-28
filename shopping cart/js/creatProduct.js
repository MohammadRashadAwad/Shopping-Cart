// var
let nameProduct=document.querySelector('.product-name');
let descProduct=document.querySelector('.product-description');
let selectProductSize=document.querySelector('.product-size');
let formCreat=document.querySelector('.form-creat');
let uploadFile =document.querySelector('.upload-image');
let productImage;
//Event
selectProductSize.addEventListener("change",getSelectProductSize)
formCreat.addEventListener('submit',createNewProsuct)
uploadFile.addEventListener("change",uploadImage)
//function
let productSize;
function getSelectProductSize(e){
     productSize=e.target.value;
 
}
function createNewProsuct(e){
    e.preventDefault();
let allProduct=JSON.parse(localStorage.getItem("ProductItem"));
let valueName=nameProduct.value;
let valueDesc=descProduct.value;
let obj={
    id:allProduct ? allProduct.length+1 :1 ,
    title:valueName,
    imgUrl:productImage,
    desc:valueDesc,
    size:productSize,
    qty:1,
    isMe:"yes"
}
let newProduct=allProduct ? [...allProduct,obj] : [obj]
 localStorage.setItem("ProductItem",JSON.stringify(newProduct))
 setTimeout(() => {
     window.location='index.html'
 }, 1000);
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

