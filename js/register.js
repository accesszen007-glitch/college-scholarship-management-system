// =========================
// PASSWORD VISIBILITY
// =========================

const registerPassword =
    document.getElementById("registerPassword");

const confirmPassword =
    document.getElementById("confirmPassword");

const toggleRegisterPassword =
    document.getElementById("toggleRegisterPassword");

const toggleConfirmPassword =
    document.getElementById("toggleConfirmPassword");


// Show / Hide Register Password
if (toggleRegisterPassword) {

    toggleRegisterPassword.addEventListener("click", () => {

        if (registerPassword.type === "password") {

            registerPassword.type = "text";
            toggleRegisterPassword.textContent = "🙈";

        } else {

            registerPassword.type = "password";
            toggleRegisterPassword.textContent = "👁";

        }

    });

}


// Show / Hide Confirm Password
if (toggleConfirmPassword) {

    toggleConfirmPassword.addEventListener("click", () => {

        if (confirmPassword.type === "password") {

            confirmPassword.type = "text";
            toggleConfirmPassword.textContent = "🙈";

        } else {

            confirmPassword.type = "password";
            toggleConfirmPassword.textContent = "👁";

        }

    });

}


// =========================
// REGISTRATION VALIDATION
// =========================

const registerForm =
    document.getElementById("registerForm");

const registerMessage =
    document.getElementById("registerMessage");


if (registerForm) {

    registerForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const fullName =
            document.getElementById("fullName").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const password =
            registerPassword.value;

        const confirm =
            confirmPassword.value;

        const terms =
            document.getElementById("terms").checked;


        registerMessage.className = "auth-message";


        // Name validation
        if (fullName.length < 3) {

            registerMessage.textContent =
                "Please enter your full name.";

            registerMessage.classList.add("error");

            return;
        }


        // Phone validation
        if (phone.length < 10) {

            registerMessage.textContent =
                "Please enter a valid phone number.";

            registerMessage.classList.add("error");

            return;
        }


        // Password validation
        if (password.length < 6) {

            registerMessage.textContent =
                "Password must contain at least 6 characters.";

            registerMessage.classList.add("error");

            return;
        }


        // Confirm password
        if (password !== confirm) {

            registerMessage.textContent =
                "Passwords do not match.";

            registerMessage.classList.add("error");

            return;
        }


        // Terms
        if (!terms) {

            registerMessage.textContent =
                "Please agree to the Terms and Privacy Policy.";

            registerMessage.classList.add("error");

            return;
        }


        // Success
        registerMessage.textContent =
            "Registration form validated successfully.";

        registerMessage.classList.add("success");


        /*
         * Backend registration will be connected later.
         */
    });

}