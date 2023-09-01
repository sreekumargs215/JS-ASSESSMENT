const userSection = document.getElementById("userSection");
const userSection1 = document.getElementById("userSection1");
const loggedInText = document.getElementById("loggedInText");
const loggedInUserElement = document.getElementById("loggedInUser");
const logoutButton = document.getElementById("logoutButton");
const registerButton = document.getElementById("registerButton");
const loginButton = document.getElementById("loginButton");
const existingUsers = JSON.parse(localStorage.getItem("existingUsers"));
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
function showLoggedInState() {
    userSection.style.display = "block";
    userSection1.style.display = "none";
    loginbeforetxt.style.display = "none";
    registerButton.style.display = "none";
    loginButton.style.display = "none";
}
function showLoggedOutState() {
    userSection.style.display = "none";
    userSection1.style.display = "block";
    loggedInText.textContent = "Click the 'Register' button first and then click the 'Login' button to login with your email.";
    registerButton.style.display = "inline-block";
    loginButton.style.display = "inline-block";
    loginbeforetxt.style.display = "block";
}
if (loggedInUser) {
    showLoggedInState();
    loggedInUserElement.textContent = loggedInUser.username;
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        showLoggedOutState();
        window.location.reload()
    });
} else {
    showLoggedOutState();
}
registerButton.addEventListener("click", () => {
    window.open("register.html", "_blank");
});
loginButton.addEventListener("click", () => {
    window.open("login.html", "_blank");
});
