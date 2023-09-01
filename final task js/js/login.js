const userSection = document.getElementById("userSection");
const loggedInText = document.getElementById("loggedInText");
const logoutButton = document.getElementById("logoutButton");
const loginForm = document.getElementById("loginForm");
const loggedInUserElement = document.getElementById("loggedInUser");
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
function showLoggedInState() {
    userSection.style.display = "block";
    loginForm.style.display = "none";
}
function showLoggedOutState() {
    userSection.style.display = "none";
    loginForm.style.display = "block";
    loggedInText.textContent = "";
}
if (loggedInUser) {
    showLoggedInState();
    loggedInUserElement.textContent = loggedInUser.username;

    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        showLoggedOutState();
    });
} else {
    showLoggedOutState();
}
loginForm.addEventListener("submit", function (event) {

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(user => user.email === email && user.password === password);
    window.location.reload()
    console.log('user', user)
    event.preventDefault();
    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        showLoggedInState();
        window.location.href = "./dashboard.html";
    } else {
        alert("Invalid credentials!");
    }
});