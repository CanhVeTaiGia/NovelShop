const emailOrName = document.getElementById("email-names");
const password = document.getElementById("password");
const form = document.getElementById("form");
const alerts = document.getElementById("alerts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let users = JSON.parse(localStorage.getItem("users")) || [];
  console.log(users);
  if (emailOrName.value === "" || password.value === "") {
    let flag = true;
    alerts.innerHTML = "Vui lòng điền vào ô trống";
    alerts.style.display = "block";
    flag = false;
    setTimeout(() => {
      alerts.style.display = "none";
    }, 3000);
  }
  if (users.length > 0) {
    for (let i = 0; i < users.length; i++) {
      if (
        emailOrName.value === users[i].names ||
        (emailOrName.value === users[i].email &&
          users[i].password === password.value)
      ) {
        localStorage.setItem("currentUser", JSON.stringify(users[i]));
        window.location.href = "../index.html";
      } else {
        alerts.innerHTML = "Tài khoản và mật khẩu không đúng";
        alerts.style.display = "block";
        flag = false;
        setTimeout(() => {
          alerts.style.display = "none";
        }, 3000);
      }
    }
  } else {
    alerts.innerHTML = "Tài khoản và mật khẩu không đúng";
    alerts.style.display = "block";
    flag = false;
    setTimeout(() => {
      alerts.style.display = "none";
    }, 3000);
  }
});
