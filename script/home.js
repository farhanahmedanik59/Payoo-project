// reusable function
function getInputValueNumber(id) {
  value = parseInt(document.getElementById(id).value);
  return value;
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
});
// toggling feature
document.getElementById("add-money-box").addEventListener("click", function () {
  const sections = document.getElementsByClassName("feature-section");
  for (const section of sections) {
    section.style.display = "none";
  }
  document.getElementById("add-money-parent").style.display = "block";
});
document.getElementById("cashout-box").addEventListener("click", function () {
  const sections = document.getElementsByClassName("feature-section");
  for (const section of sections) {
    section.style.display = "none";
  }
  document.getElementById("cashout-parent").style.display = "block";
});
