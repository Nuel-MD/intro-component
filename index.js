document.getElementById("myBtn").addEventListener("click", function(event) {
    const firstNameInput = document.getElementById('first-name');
    const firstName = firstNameInput.value;
    const lastNameInput = document.getElementById('last-name');
    const lastName = lastNameInput.value;
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const firstNameContainer = firstNameInput.closest('.input-container');
    const lastNameContainer = lastNameInput.closest('.input-container');
    const emailContainer = emailInput.closest('.input-container');
    const passwordContainer = passwordInput.closest('.input-container');

    if (!emailPattern.test(emailValue)) {
        document.getElementById("emailError").style.display = "block";
        document.getElementById("emailIcon").style.display = "block";
        emailContainer.classList.add('error-visible');
        event.preventDefault();
    } else {
        document.getElementById("emailError").style.display = "none";
        document.getElementById("emailIcon").style.display = "none";
        emailContainer.classList.remove('error-visible');
    }

    if (firstName === '') {
        document.getElementById("firstNameError").style.display = "block";
        document.getElementById("first-nameIcon").style.display = "block";
        firstNameContainer.classList.add('error-visible');
        event.preventDefault();
    } else {
        document.getElementById("firstNameError").style.display = "none";
        document.getElementById("first-nameIcon").style.display = "none";
        firstNameContainer.classList.remove('error-visible');
    }

    if (lastName === '') {
        document.getElementById("lastNameError").style.display = "block";
        document.getElementById("last-nameIcon").style.display = "block";
        lastNameContainer.classList.add('error-visible');
        event.preventDefault();
    } else {
        document.getElementById("lastNameError").style.display = "none";
        document.getElementById("last-nameIcon").style.display = "none";
        lastNameContainer.classList.remove('error-visible');
    }

    if (password === '') {
        document.getElementById("passwordError").style.display = "block";
        document.getElementById("passwordIcon").style.display = "block";
        passwordContainer.classList.add('error-visible');
        event.preventDefault();
    } else {
        document.getElementById("passwordError").style.display = "none";
        document.getElementById("passwordIcon").style.display = "none";
        passwordContainer.classList.remove('error-visible');
    }
});
