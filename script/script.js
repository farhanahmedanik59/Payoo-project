// login button

document.getElementById("loginButton").addEventListener("click", function (event) {
  event.preventDefault();
  const number = 123;
  const pin = 1234;
  const numberField = parseInt(document.getElementById("numberField").value);
  const pinField = parseInt(document.getElementById("codeField").value);
  console.log(numberField);
  console.log(pinField);
  if (numberField === number && pinField === pin) {
    window.location.href = "../home.html";
  } else {
    alert("Invalid Credentials");
  }
});
