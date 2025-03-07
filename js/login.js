document.addEventListener("DOMContentLoaded", function () {
    const userField = document.getElementById("user");
    const passField = document.getElementById("pass");

    userField.addEventListener("focus", () => {
        document.getElementById("erroruser").textContent = "";
        document.getElementById("matcherror").textContent = "";
    });
    passField.addEventListener("focus", () => {
        document.getElementById("errorpass").textContent = "";
        document.getElementById("matcherror").textContent = "";
    });
});

const validCredentials = [
    { username: "adnan", password: "1234567" },
    { username: "ridhwan", password: "7654321" },
];

function login() {
    event.preventDefault();

    const username = document.getElementById("user").value.trim();
    const pass = document.getElementById("pass").value.trim();

    const errorUser = document.getElementById("erroruser");
    const errorPass = document.getElementById("errorpass");
    const matcherror = document.getElementById("matcherror");

    errorUser.textContent = "";
    errorPass.textContent = "";
    matcherror.textContent = "";

    let isValid = true;

    if (username === "") {
        errorUser.textContent = "Username is not required.";
        isValid = false;
    }
    if (pass === "") {
        errorPass.textContent = "Password is not required.";
        isValid = false;
    }
    if (isValid) {
        const ismatch = validCredentials.some(
            (cred) => cred.username === username && cred.password === pass
        );
        if (ismatch) {
            alert("Login success");
            window.location.href="index.html";
        } else {
            alert( "Invalid username or password");
        }
    }
}
