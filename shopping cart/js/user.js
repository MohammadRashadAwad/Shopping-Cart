let links = document.querySelector("nav .links");
let userInfo = document.querySelector("nav #user-info");
let userDom = document.querySelector("nav #user-info #user");
let logOut = document.querySelector("nav #user-info li #logout");
//User title
if (localStorage.getItem("UserName")) {
  links.remove();
  userInfo.style.display = "flex";
  userDom.innerHTML = localStorage.getItem("UserName");
}
// logOut user
logOut.addEventListener("click", () => {
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1500);
});