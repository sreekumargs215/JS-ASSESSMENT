document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('productForm');
    const createdDateField = document.getElementById('createdDate');
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    productForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productQuality = document.getElementById('productQuality').value;
        const mprPrice = parseFloat(document.getElementById('mprPrice').value);
        const salePrice = parseFloat(document.getElementById('salePrice').value);
        const createdDate = new Date().toISOString();

        const product = {
            prod_id: Date.now(),
            name: productName,
            quality: productQuality,
            mprPrice: mprPrice,
            salePrice: salePrice,
            createdDate: createdDate,
            // addedBy: loggedInUser.email
        };
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);

        localStorage.setItem('products', JSON.stringify(products));
        alert("Product Added Successfully");
        productForm.reset();
    })

})