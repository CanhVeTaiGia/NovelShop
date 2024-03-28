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
  const quantityInfo = document.getElementById("quantity-info");
  let categorys = JSON.parse(localStorage.getItem("categorys")) || [];
  if (categorys.length === 0) {
    return;
  }
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < categorys.length; j++) {
      if (products[i].category === categorys[j].id) {
        products[i].category = categorys[j].names;
        // console.log("a");
      }
    }
  }

  for (let i = 0; i < products.length; i++) {
    if (productIds === products[i].id) {
      // console.log("a");
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
      // quantityInfo.innerHTML = `<span class="title">Số lượng:</span>
      // <div onclick="minus()" id="quantity-minus" class="quantity">-</div>
      // <input value="1" type="text" id="quantity-count" class="quantity"></input>
      // <div onclick="plus(${products[i].id})" id="quantity-plus" class="quantity">+</div>
      // `;
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
  let accountId = JSON.parse(localStorage.getItem("accountId")) || -1;
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (accountId === -1 || users.length === 0) {
    alert("Vui lòng đăng nhập để bỏ hàng vào giỏ");
    window.location.href = "./login.html";
    return;
  }
  const quantityCount = document.getElementById("quantity-count");
  let productId = JSON.parse(localStorage.getItem("productId"));
  let cart = [];
  for (let i = 0; i < users.length; i++) {
    if (accountId == users[i].id) {
      cart = users[i].cart;
      // console.log("cart duocj gan: ", cart);
      // return;
      break;
    }
  }
  // for(let i = 0; i < users.length)
  if (accountId.length === 0) {
    alert("Vui lòng đăng nhập để bỏ hàng vào giỏ");
    return (window.location.href = "./login.html");
  }
  for (let i = 0; i < users.length; i++) {
    if (accountId === users[i].id) {
      if (users[i].status === false) {
        return;
      }
    }
  }
  let products = JSON.parse(localStorage.getItem("products")) || [];
  //   console.log(products);
  if (products.length === 0) {
    return;
  }
  let infoProductAdd = null;
  for (let i = 0; i < products.length; i++) {
    if (productId === products[i].id) {
      infoProductAdd = products[i];
    }

    // if(infoProductAdd.length === 0){
    //   return;
    // }
  }
  let indexProductInCart = -1;
  console.log("cart truoc khi lap: ", cart.length);
  for (let i = 0; i < cart.length; i++) {
    // console.log(cart[i].id, productId);
    if (cart[i].id == productId) {
      indexProductInCart = i;
      break;
    }
  }

  if (indexProductInCart === -1) {
    // if(cart[indexProductInCart].stock === quantityCount.value){
    //   return;
    // }
    cart.push({ ...infoProductAdd, quantity: +quantityCount.value });
  } else {
    const quantity = +cart[indexProductInCart].quantity;
    // if(cart[indexProductInCart].stock > quantity + +quantityCount.value){
    //   return;
    // }
    cart[indexProductInCart].quantity = quantity + +quantityCount.value;
  }
  console.log(cart);

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === accountId) {
      users[i].cart = cart;
      break;
      // console.log(users[i].cart);
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
}

function plus() {
  const quantityCount = document.getElementById("quantity-count");
  let productId = JSON.parse(localStorage.getItem("productId")) || -1;
  let products = JSON.parse(localStorage.getItem("products")) || [];
  for (let i = 0; i < products.length; i++) {
    if (productId === products[i].id) {
      if (quantityCount.value === products[i].stock) {
        return;
      }
    }
  }
  quantityCount.value++;
}

function minus() {
  // let productId = JSON.parse(localStorage.getItem("productId")) || -1;
  const quantityCount = document.getElementById("quantity-count");
  if (quantityCount.value <= 1) {
    return;
  }
  quantityCount.value--;
}

function buyNow() {
  let accountId = JSON.parse(localStorage.getItem("accountId")) || -1;
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let productId = JSON.parse(localStorage.getItem("productId")) || -1;
  const quantityCount = document.getElementById("quantity-count");
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  let productIndex = -1;
  if (users.length === 0) {
    return;
  }
  if (accountId === -1) {
    return;
  }
  if (products.length === 0) {
    return;
  }
  if (productId === -1) {
    return;
  }
  // for(let i = 0; i < users.length; i++)

  for (let i = 0; i < products.length; i++) {
    if (productId === products[i].id) {
      productIndex = i;
      break;
    }
  }
  // console.log("a");
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].productId === productId) {
      orders[i].quantity = +quantityCount.value + +orders[i].quantity;
      if (orders[i].quantity > products[productIndex].stock) {
        alert("Số hàng bạn muốn mua lớn hơn số hàng trong kho");
        return;
      }
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
          products[i].stock =
            parseInt(products[i].stock) - parseInt(quantityCount.value);
        }
      }
      alert("Bạn đã mua hàng");
      localStorage.setItem("orders", JSON.stringify(orders));
      localStorage.setItem("products", JSON.stringify(products));
      return;
    }
  }
  orders.push({
    orderId: Math.floor(Math.random() * 100000000000),
    productId: productId,
    quantity: +quantityCount.value,
    userId: accountId,
  });
  if (orders[0].quantity > products[productIndex].stock) {
    alert("Số hàng cần mua vượt quá số hàng trong kho");
    return;
  }
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      products[i].stock =
        parseInt(products[i].stock) - parseInt(quantityCount.value);
        if(products[i].stock <= 0){
          products[i].stock = 0;
        }
      productIndex[i].sold =
        parseInt(products[i].sold) + parseInt(quantityCount.value);
    }
  }
  alert("Bạn đã mua hàng");
  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.setItem("products", JSON.stringify(products));
  return;
}
// localStorage.removeItem("orders")
function pay() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  // const accoun dId
}
