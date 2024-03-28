let products = [
  {
    id: Math.floor(Math.random() * 1000000000),
    names: "Arya bàn bên thi thoảng thả thính tôi bằng tiếng Nga",
    author: "SunSunSun",
    vol: 1,
    cost: 115000,
    years: 2021,
    stock: 32,
    sold: 14,
    images: "./assets/imgs/items/aryaTap1.jpg",
    // category: ["Tiểu thuyết"],
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    names: "Arya bàn bên thi thoảng thả thính tôi bằng tiếng Nga",
    author: "SunSunSun",
    vol: 2,
    years: 2022,
    cost: 120000,
    stock: 12,
    sold: 12,
    images: "./assets/imgs/items/aryaTap2.jpg",
    // category: ["Tiểu thuyết"],
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    names: "Arya bàn bên thi thoảng thả thính tôi bằng tiếng Nga",
    author: "SunSunSun",
    vol: 3,
    cost: 115000,
    years: 2023,
    stock: 15,
    sold: 16,
    images: "./assets/imgs/items/aryaTap3.jpg",
    // category: ["Tiểu thuyết"],
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    names: "Arya bàn bên thi thoảng thả thính tôi bằng tiếng Nga",
    author: "SunSunSun",
    vol: 4,
    cost: 115000,
    years: 2023,
    stock: 13,
    sold: 17,
    images: "./assets/imgs/items/aryaTap4.jpg",
    // category: ["Tiểu thuyết"],
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    names: "Shimotsuki trót phải lòng nhân vật nền",
    author: "Kagami Yagami",
    vol: 1,
    cost: 125000,
    years: 2021,
    stock: 24,
    sold: 10,
    images: "./assets/imgs/items/shimotsukiTap1.jpg",
    // category: "Tiểu thuyết",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    names: "Shimotsuki trót phải lòng nhân vật nền",
    author: "Kagami Yagami",
    vol: 2,
    cost: 115000,
    years: 2022,
    stock: 28,
    sold: 20,
    images: "./assets/imgs/items/shimotsukiTap2.jpg",
    // category: "Tiểu thuyết",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    names: "Thế giới otome game thật khắc nghiệt với nhân vật quần chúng",
    author: "Mishima Yomu",
    vol: 1,
    cost: 120000,
    years: 2019,
    stock: 27,
    sold: 18,
    images: "./assets/imgs/items/mobusekaTap1.jpg",
    // category: "Tiểu thuyết",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    names: "Thế giới otome game thật khắc nghiệt với nhân vật quần chúng",
    author: "Mishima Yomu",
    vol: 5,
    years: 2021,
    cost: 110000,
    stock: 11,
    sold: 14,
    images: "./assets/imgs/items/mobusekaTap5.jpg",
    // category: "Tiểu thuyết",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    names: "Thiên sứ nhà bên",
    author: "Saekisan",
    vol: 1,
    years: 2020,
    cost: 130000,
    stock: 8,
    images: "./assets/imgs/items/thiensuTap1.jpg",
    sold: 13,
    // category: "Tiểu thuyết",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    names: "Thiên sứ nhà bên",
    author: "Saekisan",
    vol: 2,
    years: 2021,
    cost: 100000,
    stock: 12,
    images: "./assets/imgs/items/thiensuTap2.jpg",
    sold: 17,
    // category: "Tiểu thuyết",
  },
];
// localStorage.setItem("products", JSON.stringify(products))

let categorys = [
  {
    id: Math.floor(Math.random() * 1000000000),
    names: "Sách khoa học",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    names: "Sách tiểu thuyết",
  },
  {
    id: Math.floor(Math.random() * 1000000000),
    names: "Sách truyện tranh",
  },
];


// localStorage.setItem("categorys", JSON.stringify(categorys));

function test(){
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let categorys = JSON.parse(localStorage.getItem("categorys")) || [];
  if(products.length === 0 || categorys.length === 0){
    return
  }
  for(let i = 0; i < categorys.length; i++){
    products[i].category = categorys[1].id
  }
  localStorage.setItem("products", JSON.stringify(products));
}
// test() 