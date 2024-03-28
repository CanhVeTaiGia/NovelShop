function renderCarts() {
  let accoundId = JSON.parse(localStorage.getItem("accountId")) || -1;
  let users = JSON.parse(localStorage.getItem("users")) || [];
  console.log("a");
  if (users.length === 0) {
    return;
  }
  if (accoundId === -1) {
    return;
  }
  // console.log("a");
  let text = ``;
  const cartContent = document.getElementById("cart-content");
  const alerts = document.getElementById("alerts");
  const totalCost = document.getElementById("total-cost");
  // let categorys = JSON.parse(localStorage.getItem(categorys)) || [];
  let total = 0;
  let index = -1;
  let carts = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === accoundId) {
      if (users[i].cart.length === 0) {
        alerts.style.display = "flex";
        // cartContent.innerHTML = `<h3 id="no-cart" class="no-cart">Giỏ hàng của bạn đang trống</h3>`;
        totalCost.innerHTML = 0 + "đ";
        return;
      } else {
        alerts.style.display = "none";
      }
      carts = users[i].cart;
      // index = i;
      break;
    }
  }
  // for(let i = 0; i < categorys.length; i++){
  //   for(let j = 0; j < carts.length; j++){
  //     if(carts[j].category === categorys[i].id){
  //       carts[j].category === categorys[i].names
  //     }
  //   }
  // }
  if (carts.length === 0) {
    cartContent.innerHTML = ``;
    // console.log("a");
    totalCost.innerHTML = 0;
    return;
  }
  for (let i = 0; i < carts.length; i++) {
    text += `
        <div class="cart-div">
        <img class="img" src=".${carts[i].images}" alt="">
        <div onclick="deleteCart(${carts[i].id})" class="deletes">Xóa</div>
        <div class="product-content">
            <h4 id="title">${carts[i].names}</h4>
            <h3 id="cost">${carts[i].cost}đ</h3>
            <div onclick="minus(${carts[i].id})" id="quantity-minus" class="quantity minus">-</div>
            <input value="${carts[i].quantity}" type="text" id="quantity-count" class="quantity quantity-counts"></input>
            <div onclick="plus(${carts[i].id})" id="quantity-plus" class="quantity plus">+</div>
        </div>
    </div>
        `;
    total += +carts[i].cost * +carts[i].quantity;
  }
  totalCost.innerHTML = total + "đ";

  cartContent.innerHTML = text;
  // console.log("a");
}
renderCarts();

function goBack() {
  window.location.href = "../index.html";
}

function minus(a) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const accoundId = JSON.parse(localStorage.getItem("accountId")) || -1;
  // let products = JSON.parse(localStorage.getItem(""))
  if (users.length === 0 || accoundId === -1) {
    return;
  }
  //   console.log(carts);
  // let quantityCount = document.querySelectorAll(".quantity-counts");
  let index = -1;
  let carts = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === accoundId) {
      index = i;
      carts = users[i].cart;
      break;
    }
  }
  if (carts.length === 0) {
    return;
  }
  for (let i = 0; i < carts.length; i++) {
    if (carts[i].id === a) {
      carts[i].quantity -= 1;
      if (carts[i].quantity === 0) {
        return;
      }
      break;
    }
  }
  users[index].cart = carts;
  console.log(users);
  localStorage.setItem("users", JSON.stringify(users));
  renderCarts();
}

function deleteCart(a) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const accoundId = JSON.parse(localStorage.getItem("accountId")) || -1;
  let carts = [];
  let index = -1;
  if (users.length === 0 || accoundId === -1) {
    return;
  }
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === accoundId) {
      carts = users[i].cart;
      index = i;
      break;
    }
  }
  if (index === -1 || carts.length === 0) {
    return;
  }
  for (let i = 0; i < carts.length; i++) {
    if (a === carts[i].id) {
      carts.splice(i, 1);
      break;
    }
  }
  // console.log(carts);
  users[index].cart = carts;
  console.log(users);
  localStorage.setItem("users", JSON.stringify(users));
  renderCarts();
}

function plus(a) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const accoundId = JSON.parse(localStorage.getItem("accountId")) || -1;
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productId = JSON.parse(localStorage.getItem("accountId")) || -1;
  let index = -1;
  let productIndex = -1;
  let carts = [];
  let stock = 0;
  if (users.length === 0 || products.length === 0) {
    return;
  }
  for (let i = 0; i < users.length; i++) {
    if (accoundId === users[i].id) {
      index = i;
      carts = users[i].cart;
      break;
    }
  }
  // console.log(carts, index);
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === a) {
      stock = products[i].stock;
      break;
    }
  }
  if(stock === 0){
    return;
  }
  for(let i = 0; i < carts.length; i++){
    if(a === carts[i].id){
      if(stock < carts[i].quantity){
        alert("Số lượng bạn đặt vượt quá số lượng trong kho");
        return;
      }
      carts[i].quantity ++;
    }
  }
  // console.log(carts);
  users[index].cart = carts;
  localStorage.setItem("users", JSON.stringify(users));
  console.log(users);
  renderCarts();
}

function pay(){
  
}