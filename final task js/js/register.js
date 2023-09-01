// const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
// const userSection = document.getElementById("userSection");
// const loggedInText = document.getElementById("loggedInText");
// const logoutButton = document.getElementById("logoutButton");
// const registrationForm = document.getElementById("registrationForm");
// function showLoggedInState() {
//     registrationForm.style.display = "block";
//     loginForm.style.display = "none";
// }
// function showLoggedOutState() {
//     loginForm.style.display = "none";
//     registrationForm.style.display = "block";
//     loggedInText.textContent = "";
// }
// if (loggedInUser) {
//     showLoggedInState();
//     loggedInUserElement.textContent = loggedInUser.username;

//     logoutButton.addEventListener("click", () => {
//         localStorage.removeItem("loggedInUser");
//         showLoggedOutState();
//     });
// } else {
//     showLoggedOutState();
// }



document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const genderRadioButtons = document.getElementsByName("gender");
    let selectedGender = "";
    for (const radioButton of genderRadioButtons) {
        if (radioButton.checked) {
            selectedGender = radioButton.value;
            break;
        }
    } const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const mobile = document.getElementById("mobile").value;
    const createdDate = new Date().toISOString();
    const namePattern = /^[A-Za-z]+$/;







    if (!namePattern.test(firstname) || !namePattern.test(lastname)) {
        alert("First name and last name must contain only letters.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (username.trim() === "" || firstname.trim() === "" || lastname.trim() === "" || email.trim() === "" || mobile.trim() === "") {
        alert("Please fill out all fields.");
        return;
    }

    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Mobile number must be 10 digits.");
        return;
    }
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some(user => user.username === username || user.email === email);
    if (userExists) {
        alert("Username or email already exists!");
        return;
    }
    const newUser = {
        username,
        firstname,
        lastname,
        email,
        gender: selectedGender,
        password,
        mobile,
        createdDate,
    };

    const existingUsers1 = JSON.parse(localStorage.getItem("existingUsers")) || [];

    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration successful!");


    window.location.href = "./login.html"; // Redirect to login page



});

