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
  if (count <= 6) {
    prevProduct.style.display = "none";
  } else {
    prevProduct.style.display = "flex";
  }
  if (count > products.length - 5) {
    nextProduct.style.display = "none";
  } else {
    nextProduct.style.display = "flex";
  }
  return count;
}

function showProduct() {
  const productContents = document.getElementById("product-contents");
  productContents.style.display = "flex";
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

function showUser() {
  // const
}
