let userName=document.querySelector("#username");
let Email=document.querySelector("#email");
let password=document.querySelector("#password");
let btnSignUp=document.querySelector("#btn-sign-up");
btnSignUp.addEventListener('click',(e)=>{
    e.preventDefault()
    if(userName.value.trim()==""||password.value==""||Email.value.trim()=="")
    alert("fill data")
    else
    localStorage.setItem("UserName",userName.value);
    localStorage.setItem("Email",Email.value)
    localStorage.setItem("Password",password.value)
    setTimeout(() => {
        window.location="login.html"
    }, 1500);
})