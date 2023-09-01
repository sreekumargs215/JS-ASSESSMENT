document.addEventListener('DOMContentLoaded', function () {
    const productTableBody = document.getElementById('productTableBody');
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const filteredProducts = products.filter(product => product.addedBy === loggedInUser.email);
    filteredProducts.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.quality}</td>
                <td>${Number(product.mprPrice).toFixed(2)}</td>
                <td>${Number(product.salePrice).toFixed(2)}</td>
                <td>${product.createdDate}</td>
                <td>
                    <button onclick="editProduct(${product.prod_id})">Edit</button>
                    <button onclick="deleteProduct(${product.prod_id})">Delete</button>
                </td>
            `;
        productTableBody.appendChild(row);
    });
});

function editProduct(id) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    let index = products.findIndex(obj => obj.prod_id === id)

    alert(index)
    const product = products[index];

    const productName = prompt('Edit Product Name:', product.name);
    if (productName !== null) {
        product.name = productName;
    }

    const productQuality = prompt('Edit Product Quantity:', product.quality);
    if (productQuality !== null) {
        product.quality = productQuality;
    }

    const mprPrice = prompt('Edit Product MRP Price:', product.mprPrice);
    if (mprPrice !== null) {
        product.mprPrice = +mprPrice;
    }

    const salePrice = prompt('Edit Product SALE Price:', product.salePrice);
    if (salePrice !== null) {
        product.salePrice = +salePrice;
    }

    localStorage.setItem('products', JSON.stringify(products));
    location.reload();

    console.log(product)
}
function deleteProduct(id) {
    alert("Are you sure want to delete this one");
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const myArr = products.filter(obj => obj.prod_id !== id)
    let data = localStorage.setItem('products', JSON.stringify(myArr))
    location.reload();

    function sortPrice(key) {
        const productTableBody = document.getElementById('productTableBody');
        productTableBody.innerHTML = '';

        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        const products = JSON.parse(localStorage.getItem('products')) || [];

        const filteredProducts = products.filter(product => product.addedBy === loggedInUser.email).sort((a, b) => {
            if (a[key] < b[key]) {
                return -1;
            }
            if (a[key] > b[key]) {
                return 1;
            }
            return 0;
        });
    }

    filteredProducts.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.quality}</td>
                <td>${product.mprPrice.toFixed(2)}</td>
                <td>${product.salePrice.toFixed(2)}</td>
                <td>${product.createdDate}</td>
                <td>
                    <button onclick="editProduct(${product.prod_id})">Edit</button>
                    <button onclick="deleteProduct(${product.prod_id})">Delete</button>
                </td>
            `;
        productTableBody.appendChild(row);
    });
}
document.getElementById("logoutButton").addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "../index/login.html";
});
document.getElementById("dashb").addEventListener("click", () => {
    window.open("../index/dashboard.html", "_self");
    window.location.href = "../index/dashboard.html";
}); 