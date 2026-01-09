let ADMIN_PASSWORD = "Aone@2026";

/* MENU */
function openMenu() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("overlay").style.display = "block";
}
function closeMenu() {
  document.getElementById("sidebar").style.left = "-280px";
  document.getElementById("overlay").style.display = "none";
}

/* ADMIN */
function adminLogin() {
  const pass = prompt("Enter admin password");
  if (pass === ADMIN_PASSWORD) {
    alert("Admin mode enabled");
  } else {
    alert("Wrong password");
  }
}

/* FORGOT PASSWORD */
function showReset() {
  const choice = prompt(
    "Password reset method:\n\n" +
    "1️⃣ Old password\n" +
    "2️⃣ Another method (OTP)\n\n" +
    "1 ya 2 likhiye"
  );

  if (choice === "1") {
    resetWithOld();
  } else if (choice === "2") {
    otpMessage();
  }
}

/* METHOD 1 */
function resetWithOld() {
  const oldPass = prompt("Old password enter karo");
  if (oldPass === ADMIN_PASSWORD) {
    const newPass = prompt("New password enter karo");
    if (newPass) {
      ADMIN_PASSWORD = newPass;
      alert("Password successfully changed");
    }
  } else {
    alert("Old password galat hai");
  }
}

/* METHOD 2 (STATIC LIMIT) */
function otpMessage() {
  alert(
    "OTP reset (Another Method)\n\n" +
    "Is website par direct OTP possible nahi hai.\n\n" +
    "OTP lene ke liye owner se sampark kare:\n\n" +
    "+91 86768 15988\n" +
    "+91 95762 21986\n\n" +
    "Only for admin use"
  );
}
