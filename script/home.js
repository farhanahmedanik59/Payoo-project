// Add money feature---------
document.getElementById("addMoneyBtn").addEventListener("click", function (event) {
  const validPin = 1234;
  event.preventDefault();
  const bank = document.getElementById("bank").value;
  const accountNumber = document.getElementById("accountNumber").value;
  const addMoney = parseInt(document.getElementById("addMoney").value);
  const pinNumber = parseInt(document.getElementById("pinNumber").value);
  const cartValue = document.getElementById("cart-value");
  const converted = parseInt(cartValue.innerText);
  if (accountNumber.length < 11) {
    alert("pin must be 11 digit");
    return;
  }
  if (pinNumber !== validPin) {
    alert("Invalid Pin");
    return;
  }
  const totalNewBalance = converted + addMoney;
  cartValue.innerText = totalNewBalance;
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
