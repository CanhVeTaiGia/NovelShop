const tbodyUser = document.getElementById("tbody-user");
const productAdmin = document.getElementById("product-admin");
// displayProduct()

function displayProduct(a) {
  const prevProduct = document.getElementById("prev-products");

  const nextPrevProduct = document.getElementById("next-prev-products");
  let products = JSON.parse(localStorage.getItem("products")) || [];

  text = ``;
  let count;
  btnId = ``;
  if (products.length === 0) {
    return;
  }
  for (let i = a; i < a + 6; i++) {
    if (i >= products.length) {
      break;
    }
    text += `<tr>
      <td>${i + 1}</td>
      <td id="table-product-id">${products[i].id}</td>
      <td id="table-product-names">${products[i].names}</td>
      <td id="table-product-author">${products[i].author}</td>
    <td id="table-product-vol">${products[i].vol}</td>
    <td id="table-product-cost">${products[i].cost}</td>
    <td id="table-product-years">${products[i].years}</td>
    <td id="table-product-stock">${products[i].stock}</td>
    <td id="table-product-sold">${products[i].sold}</td>
    <td id="table-product-img"><img class="img" src="${
      products[i].images
    }" alt=""></td>
    <td class="table-edits tool" style="cursor: pointer;" onclick="edits(${
      products[i].id
    })">Sửa</td>
    <td class="table-deletes tool" style="cursor: pointer;" onclick="deletes(${
      products[i].id
    })">Xóa</td>
    </tr>
    `;
    count = i;
  }
  btnId = `
  <button id="prev-products" onclick="prevProducts(${count})" class="next-prev-son">Lùi</button>
  <button id="next-products" onclick="nextProducts(${count})" class="next-prev-son">Tiến</button>
  `;
  const nextProduct = document.getElementById("next-products");
  const tbodyProduct = document.getElementById("tbody-product");
  tbodyProduct.innerHTML = text;
  nextPrevProduct.innerHTML = btnId;
  // if (count <= 6) {
  //   prevProduct.style.display = "none";
  // } else {
  //   prevProduct.style.display = "flex";
  // }
  // if (count > products.length - 5) {
  //   nextProduct.style.display = "none";
  // } else {
  //   nextProduct.style.display = "flex";
  // }
  return count;
}

function showProduct() {
  const productContents = document.getElementById("product-contents");
  const categoryContents = document.getElementById("category-contents");
  const userContents = document.getElementById("user-contents");
  const billsContents = document.getElementById("bills-contents");
  productContents.style.display = "flex";
  categoryContents.style.display = "none";
  userContents.style.display = "none";
  billsContents.style.display = "none";
  displayProduct(0);
}

function nextProducts(a) {
  // const nextProducts = document.getElementById("next-products");
  let count;
  let products = JSON.parse(localStorage.getItem("products")) || [];
  for (let i = 0; i < products.length; i++) {
    if (a === i) {
      count = i;
      // console.log(count);
      break;
    }
  }
  // console.log(count);
  // if(count >= (products.length - 6)){
  //   nextProducts.style.display = "none";
  // }
  // console.log(products.length);
  displayProduct(count + 1);
}

function prevProducts(a) {
  // const
  let count;
  let products = JSON.parse(localStorage.getItem("product")) || [];
  for (let i = a; i > 0; i--) {
    if (a === i) {
      count = i - 10;
      break;
    }
  }
  displayProduct(count + 1);
}

function addProduct() {
  const addOrEdit = document.getElementById("add-or-edit");
  addOrEdit.style.display = "flex";
}

function cancel() {
  const addOrEdit = document.getElementById("add-or-edit");
  addOrEdit.style.display = "none";
}

function showUser() {
  const productContents = document.getElementById("product-contents");
  const categoryContents = document.getElementById("category-contents");
  const userContents = document.getElementById("user-contents");
  const billsContents = document.getElementById("bills-contents");
  billsContents.style.display = "none";
  productContents.style.display = "none";
  categoryContents.style.display = "none";
  userContents.style.display = "flex";
  displayUser(0);
}

function showCategory() {
  const billsContents = document.getElementById("bills-contents");
  const productContents = document.getElementById("product-contents");
  const categoryContents = document.getElementById("category-contents");
  const userContents = document.getElementById("user-contents");
  productContents.style.display = "none";
  categoryContents.style.display = "flex";
  userContents.style.display = "none";
  billsContents.style.display = "none";
}

function displayUser(a) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const tbodyUser = document.getElementById("tbody-user");
  let currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
  console.log(currentUser);
  if (users.length === 0) {
    return;
  }
  for(let i = 0; i < users.length; i++){
    if(currentUser.length === 0){
      break;
    }
    if(users[i].id === currentUser.id){
      users[i] = currentUser;
    }
  }
  let text = ``;
  for (let i = a; i < a + 6; i++) {
    if (i >= users.length) {
      break;
    }
    if (users[i].status === false) {
      text += `<tr>
    <td>${i + 1}</td>
    <td id="table-user-id">${users[i].id}</td>
    <td id="table-user-names">${users[i].names}</td>
    <td id="table-user-email">${users[i].email}</td>
    <td id="table-user-status">${users[i].status}</td>
    <td id="table-user-cart"><img>${users[i].cart.images  }</img></td>
    <!-- <td class="table-edits tool" style="cursor: pointer;" onclick="editUser(${
      users[i].id
    })">Sửa</td> -->
    <td class="table-deletes tool" style="cursor: pointer;" onclick="lockUser(${
      users[i].id
    })">Mở khóa</td>
</tr>
    `;
    } else {
      text += `<tr>
    <td>${i + 1}</td>
    <td id="table-user-id">${users[i].id}</td>
    <td id="table-user-names">${users[i].names}</td>
    <td id="table-user-email">${users[i].email}</td>
    <td id="table-user-status">${users[i].status}</td>
    <td id="table-user-cart">${users[i].cart}</td>
    <!-- <td class="table-edits tool" style="cursor: pointer;" onclick="editUser(${
      users[i].id
    })">Sửa</td> -->
    <td class="table-deletes tool" style="cursor: pointer;" onclick="lockUser(${
      users[i].id
    })">Khóa</td>
</tr>
    `;
    }
  }
  tbodyUser.innerHTML = text;
}

function lockUser(a){
  if(!confirm("Bạn có chắc muốn khóa tài khoản này?")){
    return;
  }
  let users = JSON.parse(localStorage.getItem("users")) || [];
  // console.log(users);
  if(users.length === 0){
    return;
  }
  // console.log(a);
  for(let i = 0; i < users.length; i++){
    if(a === users[i].id){
      if(users[i].status === true){
        users[i].status = false;
        users[i].cart = [];
        break;
      }
      if(users[i].status === false){
        users[i].status = true;
        users[i].cart = [];
        break;
      }
    }
  }
  localStorage.setItem("users", JSON.stringify(users))
  displayUser(0);
}

function showBills() {
  const billsContents = document.getElementById("bills-contents");
  const productContents = document.getElementById("product-contents");
  const categoryContents = document.getElementById("category-contents");
  const userContents = document.getElementById("user-contents");
  productContents.style.display = "none";
  categoryContents.style.display = "none";
  userContents.style.display = "none";
  billsContents.style.display = "flex";
}
