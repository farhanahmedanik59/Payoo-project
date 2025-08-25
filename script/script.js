// login button

document.getElementById("loginButton").addEventListener("click", function (event) {
  event.preventDefault();
  const number = 1234;
  const pin = 1234;
  const numberField = parseInt(document.getElementById("numberField").value);
  const pinField = parseInt(document.getElementById("codeField").value);

  if (numberField === number && pinField === pin) {
    window.location.href = "sub-pages/home.html";
  } else {
    alert("Invalid Credentials");
  }
});
