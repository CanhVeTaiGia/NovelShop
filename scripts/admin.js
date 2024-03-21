const userAdmin = document.getElementById("user-admin");
const productAdmin = document.getElementById("product-admin");
let productDisplayCount = 6;
displayUsers();
displayProducts(productDisplayCount);
let admin = {
  id: 0,
  names: "admin",
  password: "16012005",
};
localStorage.setItem("admin", JSON.stringify(admin));

userAdmin.addEventListener("click", () => {
  const productContents = document.getElementById("product-contents");
  const userContents = document.getElementById("user-contents");
  productContents.style.display = "none";
  userContents.style.display = "flex";
});

productAdmin.addEventListener("click", () => {
  const productContents = document.getElementById("product-contents");
  const userContents = document.getElementById("user-contents");
  productContents.style.display = "flex";
  userContents.style.display = "none";
});

function displayUsers(a) {
  const tbodyUser = document.getElementById("tbody-user");
  let users = JSON.parse(localStorage.getItem("users"));
  let text = ``;
  console.log(users);
  if (users === null) {
    return;
  }
  for (let i = a - 6; i < a; i++) {
    text += `<tr>
    <td>${i + 1}</td>
    <td id="table-user-id">${users[i].id}</td>
    <td id="table-user-names">${users[i].names}</td>
    <td id="table-user-email">${users[i].email}</td>
    <td id="table-user-status">${users[i].status}</td>
    <td class="table-edits tool" style="cursor: pointer;" onclick="edits(${
      users[i].id
    })">Sửa</td>
    <td class="table-deletes tool" style="cursor: pointer;" onclick="ban(${
      users[i].id
    })">Khóa</td>
    </tr>
    `;
  }
  tbodyUser.innerHTML = text;
}

function displayProducts(a) {
  const tbodyProduct = document.getElementById("tbody-product");
  let products = JSON.parse(localStorage.getItem("products"));
  let text = ``;
  let count = 1;
  if (products === null) {
    return;
  }
  if (a > products.length) {
    for (let i = a - 6; i < products.length; i++) {
      text += `<tr>
      <td>${i + 1}</td>
      <td id="table-product-id">${products[i].id}</td>
      <td id="table-product-names">${products[i].names}</td>
      <td id="table-product-author">${products[i].author}</td>
      <td id="table-product-vol">${products[i].vol}</td>
      <td id="table-product-years">${products[i].years}</td>
      <td id="table-product-cost">${products[i].cost}đ</td>
      <td id="table-product-stock">${products[i].stock}</td>
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
    }
    tbodyProduct.innerHTML = text;
    return;
  } else {
    for (let i = a - 6; i < a; i++) {
      text += `<tr>
      <td>${i + 1}</td>
      <td id="table-product-id">${products[i].id}</td>
      <td id="table-product-names">${products[i].names}</td>
      <td id="table-product-author">${products[i].author}</td>
      <td id="table-product-vol">${products[i].vol}</td>
      <td id="table-product-years">${products[i].years}</td>
      <td id="table-product-cost">${products[i].cost}đ</td>
      <td id="table-product-stock">${products[i].stock}</td>
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
    }
    tbodyProduct.innerHTML = text;
    return;
  }
}

function addProduct() {
  const addOrEdit = document.getElementById("add-or-edit");
  addOrEdit.style.display = "flex";
}

function cancel() {
  const addOrEdit = document.getElementById("add-or-edit");
  addOrEdit.style.display = "none";
}

function nextProduct(productDisplayCount){
  productDisplayCount + 6;
  displayProducts(productDisplayCount);
}