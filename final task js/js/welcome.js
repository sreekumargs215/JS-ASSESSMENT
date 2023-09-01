const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (loggedInUser) {
    document.getElementById("loggedInUser").textContent = loggedInUser.username;
} else {
    window.location.href = "../../final task js/index/login.html";
}

document.getElementById("logoutButton").addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "../../final task js/index/login.html";
});