document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const loggedInUserElement = document.getElementById("loggedInUser");
    const productCountElement = document.getElementById("productCount");
    const addProductButton = document.getElementById("addProductButton");
    if (loggedInUser) {
        loggedInUserElement.textContent = `Username: ${loggedInUser.username}`;
        const products = JSON.parse(localStorage.getItem('products')) || [];
        const userProducts = products.filter(product => product.userId === loggedInUser.userId);
        const productCount = userProducts.length;

        productCountElement.textContent = `Number of Products: ${productCount}`;
    }

    addProductButton.addEventListener("click", function () {
        window.open("./productreg.html", "_blank");
    });

});
document.getElementById("logoutButton").addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "../index/login.html";
});