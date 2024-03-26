const names = document.getElementById("names");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");
const alerts = document.getElementById("alerts");
const form = document.getElementById("form");

function checkEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let flag = true;
  if (
    names.value === "" ||
    email.value === "" ||
    password.value === "" ||
    rePassword === ""
  ) {
    alerts.innerHTML = "KHÔNG ĐƯỢC ĐỂ TRỐNG Ô INPUT";
    alerts.style.display = "flex";
    flag = false;
    setTimeout(() => {
      alerts.style.display = "none";
    }, 3000);
    return;
  }
  if (!checkEmail(email.value)) {
    alerts.innerHTML = "EMAIL SAI ĐỊNH DẠNG";
    alerts.style.display = "flex";
    setTimeout(() => {
      alerts.style.display = "none";
    }, 3000);
    return;
} if(password.value !== rePassword.value){
      alerts.innerHTML = "MẬT KHẨU KHÔNG KHỚP";
      alerts.style.display = "flex";
      setTimeout(() => {
        alerts.style.display = "none";
      }, 3000);
      return;
  }
  // let users = JSON.parse(localStorage.setItem("users")) || [];
  for(let i = 0; i < users.length; i++){
    if(email.value === users[i].email){
      alerts.innerHTML = "EMAIL ĐÃ ĐƯỢC ĐĂNG KÍ";
      alerts.style.display = "flex";
      setTimeout(() => {
        alerts.style.display = "none";
      }, 3000);
      return;
    }
    if(names.value === users[i].names){
      alerts.innerHTML = "TÊN NGƯỜI DÙNG ĐÃ ĐƯỢC ĐĂNG KÍ";
      alerts.style.display = "flex";
      setTimeout(() => {
        alerts.style.display = "none";
      }, 3000);
      return;
    }
  }
  // console.log(flag);
  if(flag === true){
    let obj = {
        id: Math.floor(Math.random() * 100000000),
        names: names.value,
        email: email.value,
        password: password.value,
        cart: [],
        status: false
    }
    users.push(obj);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "./login.html";
  }
});
