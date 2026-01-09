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

/* ADMIN LOGIN */
function adminLogin() {
  const pass = prompt("Enter admin password");
  if (pass === ADMIN_PASSWORD) {
    alert("Admin mode enabled");
  } else {
    alert("Wrong password");
  }
}

/* RESET PASSWORD */
function showReset() {
  const option = prompt(
    "Reset password:\n\n1. Using old password\n2. Another method (OTP)\n\nEnter 1 or 2"
  );

  if (option === "1") resetWithOld();
  if (option === "2") resetWithOTP();
}

/* METHOD 1 */
function resetWithOld() {
  const oldPass = prompt("Enter old password");
  if (oldPass === ADMIN_PASSWORD) {
    const newPass = prompt("Enter new password");
    if (newPass) {
      ADMIN_PASSWORD = newPass;
      alert("Password changed successfully");
    }
  } else {
    alert("Old password incorrect");
  }
}

/* METHOD 2 (OTP DEMO) */
function resetWithOTP() {
  const phone = prompt("Enter your phone number");
  if (!phone) return;

  alert("OTP sent (demo)");

  const otp = prompt("Enter OTP");
  if (otp === "1234") {
    const newPass = prompt("Enter new password");
    if (newPass) {
      ADMIN_PASSWORD = newPass;
      alert("Password reset successful");
    }
  } else {
    alert("Invalid OTP");
  }
}
