let ADMIN_PASSWORD = "Aone@2026";
let isAdmin = false;

function openMenu() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("sidebar").style.left = "-260px";
  document.getElementById("overlay").style.display = "none";
}

function adminLogin() {
  const pass = prompt("Enter Admin Password");
  if (pass === ADMIN_PASSWORD) {
    isAdmin = true;
    alert("Admin mode ON");
    enableEdit();
  } else {
    alert("Wrong password");
  }
}

function enableEdit() {
  const stock = document.querySelector(".new-stock");
  stock.contentEditable = "true";
  stock.style.border = "2px dashed black";
}

function showReset() {
  alert(
    "Password reset help:\n\n" +
    "OTP lene ke liye owner se sampark kare:\n\n" +
    "+91 86768 15988\n" +
    "+91 95762 21986\n\n" +
    "Only for admin use"
  );
}
