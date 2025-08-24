// reusable function
const transactions = [];
function btnStyle(id) {
  const boxs = document.getElementsByClassName("box");
  for (const box of boxs) {
    box.classList.remove("bg-[#0874f20d]", "border-2", "border-blue-800");
  }
  document.getElementById(id).classList.add("bg-[#0874f20d]", "border-2", "border-[#0874f2]");
}
function cartbalance() {
  const value = parseInt(document.getElementById("cart-value").innerText);
  return value;
}
function getitem(id) {
  const item = document.getElementById(id);
  return item;
}
function getInputValueNumber(id) {
  value = parseInt(document.getElementById(id).value);
  return value;
}
function pageDisable(id) {
  const sections = document.getElementsByClassName("feature-section");
  for (const section of sections) {
    section.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
// Add money feature---------
const validPin = 1234;

document.getElementById("addMoneyBtn").addEventListener("click", function (event) {
  event.preventDefault();
  const bank = document.getElementById("bank").value;
  const accountNumber = document.getElementById("accountNumber").value;
  const addMoney = parseInt(document.getElementById("addMoney").value);
  const pinNumber = parseInt(document.getElementById("pinNumber").value);
  const cartValue = document.getElementById("cart-value");
  const converted = parseInt(cartValue.innerText);
  if (accountNumber.length < 11) {
    alert(" account number must be 11 digit");
    return;
  }
  if (pinNumber !== validPin) {
    alert("Invalid Pin");
    return;
  }
  const totalNewBalance = converted + addMoney;
  cartValue.innerText = totalNewBalance;
  const data = {
    name: "Add Money",
    date: new Date().toLocaleString(),
  };
  transactions.push(data);
  console.log(transactions);
});
// Cash out Feature
document.getElementById("cashout-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const pin = parseInt(document.getElementById("pin-number").value);
  if (pin !== validPin) {
    alert("Invalid Pin");
    return;
  }
  const ammount = getInputValueNumber("ammount");
  const cart = document.getElementById("cart-value");
  const cartAmmount = parseInt(document.getElementById("cart-value").innerText);
  console.log(cartAmmount);
  const newAmmount = cartAmmount - ammount;
  cart.innerText = newAmmount;
  const data = {
    name: "Cash Out",
    date: new Date().toLocaleString(),
  };
  transactions.push(data);
  console.log(transactions);
});
// Transfer Feature
document.getElementById("transfer-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const cartAmmount = cartbalance();
  const ammount = getInputValueNumber("transfer-ammount");
  const newAmmount = cartAmmount - ammount;
  console.log(newAmmount);
  document.getElementById("cart-value").innerText = newAmmount;
});
// toggling feature
document.getElementById("add-money-box").addEventListener("click", function (event) {
  const sections = document.getElementsByClassName("feature-section");
  for (const section of sections) {
    section.style.display = "none";
  }
  document.getElementById("add-money-parent").style.display = "block";
  btnStyle("add-money-box");
});
document.getElementById("cashout-box").addEventListener("click", function () {
  pageDisable("cashout-parent");
  btnStyle("cashout-box");
});

document.getElementById("transfer-box").addEventListener("click", function () {
  pageDisable("transfer-parent");
  btnStyle("transfer-box");
});
