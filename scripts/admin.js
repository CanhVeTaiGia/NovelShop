const tbodyUser = document.getElementById("tbody-user");
const productAdmin = document.getElementById("product-admin");

const form = document.getElementById("form");
const formCategory = document.getElementById("form-category");

formCategory.addEventListener("submit", (e) => {
  e.preventDefault();
  // const form = document.getElementById("form");
  // console.log("a");
  let categorys = JSON.parse(localStorage.getItem("categorys")) || [];
  const names = document.getElementById("names");
  if (names.value === "" || categorys.length === 0) {
    alert("Vui lòng nhập tên thể loại");
    return;
  }
  let obj = {
    id: Math.floor(Math.random() * 100000000),
    names: names.value
  }
  for(let i = 0; i < categorys.length; i++) {
    if(categorys[i].names === obj.names){
      alert("Danh mục đã tồn tại");
      return;
    }
  }
  categorys.push(obj);
  localStorage.setItem("categorys", JSON.stringify(categorys));
  displayCategory(0);
  const addOrEdit = document.getElementById("add-or-edit-category");
  addOrEdit.style.display = "none";
  return;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // const form = document.getElementById("form");
  // console.log("a");
  let products = JSON.parse(localStorage.getItem("products")) || [];
  const names = document.getElementById("names");
  const author = document.getElementById("author");
  const vol = document.getElementById("vol");
  const years = document.getElementById("years");
  const cost = document.getElementById("cost");
  const stock = document.getElementById("stock");
  const images = document.getElementById("iamge");
  if (names.value === "") {
    alert("Không được để trống ô input");
    return;
  }
  if (author.value === "") {
    alert("Không được để trống ô input");
    return;
  }
  if (vol.value === "") {
    alert("Không được để trống ô input");
    return;
  }
  if (years.value === "") {
    alert("Không được để trống ô input");
    return;
  }
  if (cost.value === "") {
    alert("Không được để trống ô input");
    return;
  }
  if (stock.value === "") {
    alert("Không được để trống ô input");
    return;
  }
  // if(images.c)
  // // if(names.)
  // return;
  let obj = {
    id: Math.floor(Math.random() * 1000000000),
    names: names.value,
    vol: vol.value,
    author: author.value,
    cost: cost.value,
    stock: stock.value,
    images: images.value,
  };
  products.push(obj);
  localStorage.setItem("products", JSON.stringify(products));
});
// displayProduct()

function displayProduct(a) {
  // const prevProduct = document.getElementById("prev-products");

  const nextPrevProduct = document.getElementById("next-prev-products");
  let products = JSON.parse(localStorage.getItem("products")) || [];

  text = ``;
  let count;
  let btnId = ``;
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
      <td id="table-product-category">${products[i].category}</td>
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

function edits(a) {
  // resetFromEvent();
  // const addOrEdit
  localStorage.setItem("editProductId", JSON.stringify(a));
  const form = document.getElementById("form");
  let products = JSON.parse(localStorage.getItem("products")) || [];
  if (products.length === 0) {
    return;
  }
  const addOrEdit = document.getElementById("add-or-edit");
  addOrEdit.style.display = "flex";
  form.innerHTML = `
  <h1 id="title">Thay đổi/Thêm Sản Phẩm</h1>
  <input placeholder="Tên" class="change-value" id="names" value="" type="text">
  <input placeholder="Tác giả" class="change-value" id="author" type="text">
  <input placeholder="Tập" class="change-value" id="vol" type="number">
  <input id="years" type="text" placeholder="Năm" class="change-value">
  <input placeholder="Giá" class="change-value" id="cost" type="text">
  <input placeholder="Số lượng" class="change-value" id="stock" type="text">
  <input placeholder="Bìa" class="change-value" type="file" id="iamge">
  <button id="edit" onclick="editProduct(${a})" class="submit" type="button" onclick="confirmEdit()">Sửa</button>
  <button type="button" onclick="cancel()" class="cancel">Hủy</button>
`;
  const edit = document.getElementById("edit");
  // const submit = document.getElementById("submit");
  edit.style.display = "flex";
  // submit.style.display = "none";
  return;
}


function editProduct(a) {
  // console.log(a);
  // const
  let products = JSON.parse(localStorage.getItem("products")) || [];
  if (products.length === 0) {
    return;
  }
  const names = document.getElementById("names");
  const author = document.getElementById("author");
  const vol = document.getElementById("vol");
  const years = document.getElementById("years");
  const cost = document.getElementById("cost");
  const stock = document.getElementById("stock");
  const images = document.getElementById("iamge");
  if (names.value === "") {
    alert("Không được để trống ô input");
    return;
  }
  if (author.value === "") {
    alert("Không được để trống ô input");
    return;
  }
  if (vol.value === "") {
    alert("Không được để trống ô input");
    return;
  }
  if (vol.value < 0) {
    alert("Số tập không được nhỏ hơn 0");
    return;
  }
  if (parseInt(years.value) < 0) {
    alert("Năm không được nhỏ hơn 0");
    return;
  }
  if (parseInt(parseInt(cost.value) < 0)) {
    alert("Giá tiền không được nhỏ hơn 0");
    return;
  }
  if (years.value === "") {
    alert("Không được để trống ô input");
    return;
  }
  if (cost.value === "") {
    alert("Không được để trống ô input");
    return;
  }
  if (parseInt(stock.value) < 0) {
    alert("Số lượng không được nhỏ hơn 0");
    return;
  }
  if (stock.value === "") {
    alert("Không được để trống ô input");
    return;
  }
  let obj = {
    id: a,
    names: names.value,
    vol: vol.value,
    author: author.value,
    years: years.value,
    cost: cost.value,
    images: images.value,
    stock: stock.value,
    sold: 0,
  };
  for (let i = 0; i < products.length; i++) {
    if (a === products[i].id) {
      products.splice(i, 1, obj);
    }
  }
  localStorage.setItem("products", JSON.stringify(products));
  const addOrEdit = document.getElementById("add-or-edit");
  addOrEdit.style.display = "none";
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

function editCategory(a) {
  const addOrEdit = document.getElementById("add-or-edit-category");
  addOrEdit.style.display = "flex";
  const form = document.getElementById("form-category");
  form.innerHTML = `
  <h1 id="title">Thay đổi thể loại</h1>
  <input placeholder="Tên" class="change-value" id="names" value="" type="text">
  <button id="edit" onclick="editCategory(${a})" class="submit" type="button" onclick="confirmEdit()">Sửa</button>
  <button type="button" onclick="cancel()" class="cancel">Hủy</button>
`;
}

function addCategory() {
  const addOrEdit = document.getElementById("add-or-edit-category");
  addOrEdit.style.display = "flex";
  const form = document.getElementById("form-category");
  form.innerHTML = `
  <h1 id="title">Thêm thể loại</h1>
  <input placeholder="Tên" class="change-value" id="names" value="" type="text">
  <button id="submit" class="submit" type="submit">Thêm</button>
  <button type="button" onclick="cancel()" class="cancel">Hủy</button>
`;
}

function addProduct() {
  const addOrEdit = document.getElementById("add-or-edit");
  addOrEdit.style.display = "flex";
  const form = document.getElementById("form");
  form.innerHTML = `
  <h1 id="title">Thêm Hàng</h1>
  <input placeholder="Tên" class="change-value" id="names" value="" type="text">
  <input placeholder="Tác giả" class="change-value" id="author" type="text">
  <input placeholder="Tập" class="change-value" id="vol" type="number">
  <input id="years" type="text" placeholder="Năm" class="change-value">
  <input placeholder="Giá" class="change-value" id="cost" type="text">
  <input placeholder="Số lượng" class="change-value" id="stock" type="text">
  <input placeholder="Bìa" class="change-value" type="file" id="iamge">
  <button id="submit" class="submit" type="submit">Thêm</button>
  <button type="button" onclick="cancel()" class="cancel">Hủy</button>
`;
}

function cancel() {
  const addOrEdit = document.getElementById("add-or-edit");
  addOrEdit.style.display = "none";
  const addOrEditCategory = document.getElementById("add-or-edit-category");
  addOrEditCategory.style.display = "none";
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

function showCategory(a) {
  const billsContents = document.getElementById("bills-contents");
  const productContents = document.getElementById("product-contents");
  const categoryContents = document.getElementById("category-contents");
  const userContents = document.getElementById("user-contents");
  productContents.style.display = "none";
  categoryContents.style.display = "flex";
  userContents.style.display = "none";
  billsContents.style.display = "none";
  displayCategory(0);
}

function displayUser(a) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const tbodyUser = document.getElementById("tbody-user");
  let accoundId = JSON.parse(localStorage.getItem("accountId")) || -1;
  // console.log(accoundId);
  if (users.length === 0) {
    return;
  }
  for (let i = 0; i < users.length; i++) {
    if (accoundId === -1) {
      break;
    }
    // if(users[i].id === accoundId){
    //   users[i].id = accoundId;
    // }
  }
  let text = ``;
  let imgSrc = ``;
  // let index = -1;
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
    <td class="table-user-cart" id="table-user-cart">None</td>
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
    <td class="table-user-cart" id="table-user-cart"></td>
    <!-- <td class="table-edits tool" style="cursor: pointer;" onclick="editUser(${
      users[i].id
    })">Sửa</td> -->
    <td class="table-deletes tool" style="cursor: pointer;" onclick="lockUser(${
      users[i].id
    })">Khóa</td>
    </tr>
    `;
      // for (let j = 0; j < users[i].cart.length; j++) {
      //
      // }
      // cartImg.innerHTML = imgSrc;
    }
  }
  tbodyUser.innerHTML = text;
  const tableUserCart = document.querySelectorAll(".table-user-cart");
  // const cartImg = document.querySelectorAll(".cartImg");

  // console.log(users);
  for (let i = 0; i < users.length; i++) {
    let carts = users[i].cart;
    if (carts.length === 0) {
      return;
    }
    for (let j = 0; j < carts.length; j++) {
      console.log(carts);
      imgSrc += `<img title="Quantity: ${carts[i].quantity}" class="cartImg" src="${carts[j].images}" alt="">`;
    }
    tableUserCart[i].innerHTML = imgSrc;
  }
}

function lockUser(a) {
  if (!confirm("Bạn có chắc muốn khóa tài khoản này?")) {
    return;
  }
  let users = JSON.parse(localStorage.getItem("users")) || [];
  // console.log(users);
  if (users.length === 0) {
    return;
  }
  // console.log(a);
  for (let i = 0; i < users.length; i++) {
    if (a === users[i].id) {
      if (users[i].status === true) {
        users[i].status = false;
        users[i].cart = [];
        break;
      }
      if (users[i].status === false) {
        users[i].status = true;
        // users[i].cart = [];
        break;
      }
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
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

function displayCategory(a) {
  let categorys = JSON.parse(localStorage.getItem("categorys")) || [];
  const tbodyCategory = document.getElementById("tbody-category");
  if (categorys.length === 0) {
    return;
  }
  const categoryContents = document.getElementById("category-contents-btn");
  let text = ``;
  let btn = ``;
  let count;
  if (a >= categorys.length - 6) {
    for (let i = a; i < categorys.length; i++) {
      text += `
      <tr>
                          <td>${i + 1}</td>
                          <td id="table-category-id">${categorys[i].id}</td>
                          <td id="table-category-names">${
                            categorys[i].names
                          }</td>
                          <td class="table-edits tool" style="cursor: pointer;" onclick="editCategory(${
                            categorys[i].id
                          })">Sửa</td>
                          <td class="table-deletes tool" style="cursor: pointer;" onclick="deleteCategory(${
                            categorys[i].id
                          })">Xóa</td>
                      </tr>
      `;
      count = i;
    }
    btn += `<button id="prev-category" onclick="prevCategory(${count})" class="next-prev-son">Lùi</button>
    <button id="next-category" onclick="nextCategory(${count})" class="next-prev-son">Tiến</button>`;
    tbodyCategory.innerHTML = text;
    // categoryContents.innerHTML = btn;
    return;
  }
  // for (let i = a; i < a + 6; i++) {
  //   text += `
  //   <tr>
  //                       <td>${i + 1}</td>
  //                       <td id="table-category-id">${categorys[i].id}</td>
  //                       <td id="table-category-names">${categorys[i].names}</td>
  //                       <td class="table-edits tool" style="cursor: pointer;" onclick="editCategory(${
  //                         categorys[i].id
  //                       })">Sửa</td>
  //                       <td class="table-deletes tool" style="cursor: pointer;" onclick="deleteCategory(${
  //                         categorys[i].id
  //                       })">Xóa</td>
  //                   </tr>
  //   `;
  // }
  // tbodyCategory.innerHTML = text;
  // return;
}

function adminAccount() {
  let admin = {
    id: 0,
    names: "admin",
    password: 16012005,
    role: "admin",
  };
  localStorage.setItem("admin", JSON.stringify(admin));
  return;
}
adminAccount();

function deletes(a) {
  console.log("a");
  let products = JSON.parse(localStorage.getItem("products")) || [];
  console.log(products);
  if (products.length === 0) {
    return;
  }
  for (let i = 0; i < products.length; i++) {
    if (a === products[i].id) {
      products.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("products", JSON.stringify(products));
  displayProduct(0);
  return;
}

function deleteCategory(a){
  let categorys = JSON.parse(localStorage.getItem("categorys")) || [];
  if(categorys.length === 0){
    return;
  }
  for(let i = 0; i < categorys.length; i++){
    if(a === categorys[i].id){
      categorys.splice(i,1);
      break;
    }
  }
  localStorage.setItem("categorys", JSON.stringify(categorys));
  displayCategory(0);
}

function displayOrders(a){
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  if(orders.length === 0){
    for(let i = 0; i < orders.length; i++){
      text += ``;
    }
  }
}
