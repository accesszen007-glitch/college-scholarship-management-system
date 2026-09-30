// =========================
// ADMIN PASSWORD VISIBILITY
// =========================

const adminPassword =
    document.getElementById("adminPassword");

const toggleAdminPassword =
    document.getElementById("toggleAdminPassword");


if (toggleAdminPassword) {

    toggleAdminPassword.addEventListener("click", () => {

        if (adminPassword.type === "password") {

            adminPassword.type = "text";
            toggleAdminPassword.textContent = "🙈";

        } else {

            adminPassword.type = "password";
            toggleAdminPassword.textContent = "👁";

        }

    });

}


// =========================
// ADMIN LOGIN VALIDATION
// =========================

const adminLoginForm =
    document.getElementById("adminLoginForm");

const adminLoginMessage =
    document.getElementById("adminLoginMessage");


if (adminLoginForm) {

    adminLoginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const email =
            document.getElementById("adminEmail").value.trim();

        const password =
            adminPassword.value;


        adminLoginMessage.className = "auth-message";


        if (!email || !password) {

            adminLoginMessage.textContent =
                "Please enter your admin email and password.";

            adminLoginMessage.classList.add("error");

            return;
        }


        if (password.length < 6) {

            adminLoginMessage.textContent =
                "Password must contain at least 6 characters.";

            adminLoginMessage.classList.add("error");

            return;
        }


        adminLoginMessage.textContent =
            "Admin login form validated successfully.";

        adminLoginMessage.classList.add("success");


        /*
         * Real admin authentication will be connected
         * to the backend later.
         */

    });

}
