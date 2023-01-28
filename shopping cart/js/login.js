let Email = document.querySelector("#email");
let password = document.querySelector("#password");
let btnSignIn = document.querySelector("#btn-sign-in");
btnSignIn.addEventListener("click", (e) => {
    e.preventDefault();
  if (Email.value.trim() == "" || password.value == "") alert("fill data");
  else {
    if (
      Email.value == localStorage.getItem("Email") &&
      password.value == localStorage.getItem("Password")
    )
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    else alert("Email or password is wrong");
  }
 
});
