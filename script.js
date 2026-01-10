// ===============================
// MENU OPEN / CLOSE
// ===============================
function openMenu() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("sidebar").style.left = "-260px";
  document.getElementById("overlay").style.display = "none";
}


// ===============================
// ADMIN LOGIN
// ===============================
function adminLogin() {
  const email = prompt("Admin Email:");
  const password = prompt("Admin Password:");

  if (!email || !password) {
    alert("Email aur Password dono required hai");
    return;
  }

  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Admin login successful");
      window.location.href = "admin.html";
    })
    .catch(error => {
      alert(error.message);
    });
}


// ===============================
// FORGOT PASSWORD
// ===============================
function forgotPassword() {
  const email = prompt("Registered Admin Email enter karo:");

  if (!email) {
    alert("Email required hai");
    return;
  }

  firebase.auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      alert("Password reset email bhej diya gaya hai");
    })
    .catch(error => {
      alert(error.message);
    });
}


// ===============================
// ADMIN STATE CHECK (INDEX PAGE)
// ===============================
firebase.auth().onAuthStateChanged(user => {
  const adminBtn = document.querySelector(".admin-btn");

  if (!adminBtn) return;

  if (user) {
    // Admin logged in
    adminBtn.innerText = "Admin Panel";
    adminBtn.onclick = () => {
      window.location.href = "admin.html";
    };
  } else {
    // Not logged in
    adminBtn.innerText = "Admin Mode";
    adminBtn.onclick = adminLogin;
  }
});
