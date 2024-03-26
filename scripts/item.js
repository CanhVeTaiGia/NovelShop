function goBack() {
  window.location.href = "../index.html";
}

displayItem();

function displayItem() {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let productIds = JSON.parse(localStorage.getItem("productId"));
  if (products.length === 0) {
    return;
  }
  // console.log(products);
  const banner = document.getElementById("banner");
  const productId = document.getElementById("product-id");
  const productStatus = document.getElementById("product-status");
  const cost = document.getElementById("cost");
  const author = document.getElementById("author");
  const category = document.getElementById("category");
  const years = document.getElementById("years");
  const title = document.getElementById("title");
  const buybtn = document.getElementById("buybtn");
  for (let i = 0; i < products.length; i++) {
    if (productIds === products[i].id) {
      productId.innerHTML = products[i].id;
      title.innerHTML = `${products[i].names} - Tập ${products[i].vol}`;
      if (products[i].stock > 0) {
        productStatus.innerHTML = "Còn hàng";
        productStatus.style.color = "#00bfff";
      } else {
        productStatus.innerHTML = "Hết hàng";
        productStatus.style.color = "red";
      }
      banner.src = `.${products[i].images}`;
      cost.innerHTML = `${products[i].cost}đ`;
      author.innerHTML = `Tác giả: ${products[i].author}`;
      category.innerHTML = `Thể loại: ${products[i].category}`;
      years.innerHTML = `Năm: ${products[i].years}`;
      //   buybtn.innerHTML = `
      //         <button id="add-to-cart" onclick="addToCart(${products[i].id})" class="buy-or-cart">THÊM VÀO GIỎ</button>
      //         <button id="buy-now" onclick="buyNow(${products[i].id})" class="buy-or-cart">MUA NGAY</button>
      //         `;
      // console.log(products[i].id);
      break;
    }
  }
  return;
}

function addToCart() {
  let productId = JSON.parse(localStorage.getItem("productId"));
  // let account = JSON.parse(localStorage.getItem("currentUser")) || [];
  let users = JSON.parse(localStorage.getItem("users")) || [];
  // console.log(users);
  let accountId = JSON.parse(localStorage.getItem("accountId")) || [];
  // console.log(accountId);
  let cart = [];
  for(let i = 0; i < users[i].length; i++){
    if(accountId === users[i].id){
      cart.push(users[i].cart);
      console.log(cart);
      // return;
      break;
    }
  }
  console.log(accountId);
  console.log(cart);
  if (accountId.length === 0) {
    alert("Vui lòng đăng nhập để bỏ hàng vào giỏ");
    return (window.location.href = "./login.html");
  }
  for(let i = 0; i < users.length; i++){
    if(accountId === users[i].id){
      if(users[i].status === false){
        return
      }
    }
  }
  let products = JSON.parse(localStorage.getItem("products")) || [];
  //   console.log(products);
  if (products.length === 0) {
    return;
  }
  for (let i = 0; i < products.length; i++) {
    if(products[i].stock === 0){
      return alert("Hàng đã hết");
    }
    if (productId === products[i].id) {
      console.log();
      cart.push(products[i]);
      console.log(cart);

      break;
    }
  }
  for(let i = 0; i < users.length; i++){
    if(users[i].id === accountId){
      users[i].cart = cart;
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
}

function buyNow(){
  let bills = JSON.parse(localStorage.getItem("bills")) || [];
  
}