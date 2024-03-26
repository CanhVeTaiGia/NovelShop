function accTools() {
  const logintabs = document.getElementById("login-tab");
  // console.log("a");
  if (logintabs.style.display === "flex") {
    logintabs.style.display = "none";
  } else {
    logintabs.style.display = "flex";
  }
  let accountId = JSON.parse(localStorage.getItem("accountId")) || [];
  // console.log(accountId);
  let users = JSON.parse(localStorage.getItem("users")) || [];
  // console.log(users);
  const login = document.getElementById("login");
  const signup = document.getElementById("signup");
  const logout = document.getElementById("logout");
  if (accountId.length === 0) {
    logout.style.display = "none";
    login.style.display = "flex";
    signup.style.display = "flex";
    return;
  }
  for (let i = 0; i < users.length; i++) {
    if (accountId === users[i].id) {
      console.log("a");
      logout.style.display = "flex";
      login.style.display = "none";
      signup.style.display = "none";
      return;
    }
  }
}

function login() {
  window.location.href = "./pages/login.html";
  return;
}

function signup() {
  window.location.href = "./pages/signup.html";
  return;
}

function renderProduct() {
  const shopList = document.getElementById("shop-list");
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let text = ``;
  // console.log(products);
  if (products.length === 0) {
    return;
  }
  // console.log("a");
  for (let i = 0; i < products.length; i++) {
    text += `
        <div onclick="showProducts(${products[i].id})" class="items">
                    <img id="lN-banner" class="lN-banner" src="${products[i].images}" alt="" srcset="">
                    <div class="div">
                    <h5 class="lN-title" id="lN-title">${products[i].names}</h>
                    <span>
                    <p class="lN-cost">${products[i].cost}đ</p> 
                    <p class="sold">Đã bán: ${products[i].sold}</p>
                    </span>
                    </div>
                    </div>
                    `;
  }
  shopList.innerHTML = text;
}
renderProduct();

function showProducts(a) {
  localStorage.setItem("productId", a);
  window.location.href = "./pages/item.html";
}

function cart() {
  let account = JSON.parse(localStorage.getItem("currentUser")) || [];
  if (account.length === 0) {
    return;
  }
  // console.log(account);
  let currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
  let carts = currentUser.cart;
  console.log(carts);
  const cartCount = document.getElementById("cart-count");
  cartCount.innerHTML = carts.length;
}
cart();

// function accTools(){
//   let users = JSON.parse(localStorage.getItem("users")) || [];
//   const accountId = JSON.parse(localStorage.getItem("accountId")) || [];
//   const login = document.getElementById("login");
//   const signup = document.getElementById("signup");
//   const log = document.getElementById("log");
//   const userName = document.getElementById("user-name");
//   const logout = document.getElementById("logout");
//   const logintabs = document.getElementById("logintabs")
//   if(accountId.length === 0 || users.length){
//     login.style.display = "flex";
//     signup.style.display = "flex";
//     logout.style.display = "none";
//   }
//   else{
//     login.style.display
//   }
// }

function checkLogin() {
  let accountId = JSON.parse(localStorage.getItem("accountId")) || [];
  let users = JSON.parse(localStorage.getItem("users")) || [];
  // return
  const log = document.getElementById("log");
  const userName = document.getElementById("user-name");
  if(accountId.length === 0){
    log.style.display = "flex";
    userName.style.display = "none";
    return;
  }
  for(let i = 0; i < users.length; i++){
    if(accountId === users[i].id){
      log.style.display = "none";
      userName.innerHTML = `${users[i].names}`;
      userName.style.display = "flex";
      return;
    }
  }
}
checkLogin()

function login(){
  window.location.href = "./pages/login.html";
}

function signup(){
  window.location.href = "./pages/signup.html";
}

function logout(){
  localStorage.removeItem("accountId");
  window.location.href = "./pages/login.html";
}