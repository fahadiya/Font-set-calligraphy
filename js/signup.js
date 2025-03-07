document.addEventListener("DOMContentLoaded", function () {
    // Attach event listeners to input fields
    const userField = document.getElementById("user");
    const emailField = document.getElementById("Email");
    const passField = document.getElementById("pass");
    const cpassField = document.getElementById("cpass");

    userField.addEventListener("focus", () => {
        document.getElementById("erroruser").textContent = "";
    });

    emailField.addEventListener("focus", () => {
        document.getElementById("erroremail").textContent = "";
    });

    passField.addEventListener("focus", () => {
        document.getElementById("errorcreate").textContent = "";
    });

    cpassField.addEventListener("focus", () => {
        document.getElementById("errorconfirm").textContent = "";
    });
});

function signup(){
    
    event.preventDefault();

    const username = document.getElementById("user").value.trim();
    const Email = document.getElementById("Email").value.trim();
    const create = document.getElementById("pass").value.trim();
    const confirm=document.getElementById("cpass").value.trim();

    const errorUser = document.getElementById('erroruser');
    const errorEmail = document.getElementById('erroremail');
    const errorCreate = document.getElementById('errorcreate');
    const errorConfirm = document.getElementById('errorconfirm');

    errorUser.textContent = "";
    errorEmail.textContent = "";
    errorCreate.textContent = "";
    errorConfirm.textContent = "";

    let isValid = true;


    if(username===""){
        errorUser.textContent="Username is not requaired.";
        isValid=false
    }
    if(Email===""){
       errorEmail.textContent="Email is not requaired.";
        isValid=false;
    }

    if(create===""){
        errorCreate.textContent="Create password is not requaired.";
        isValid=false;
    }else if(create.length<6){
        errorCreate.textContent = "Password must be at least 6 characters long.";
        isValid=false;
    }
    if(confirm==""){
        errorConfirm.textContent="Conform password is not requaired.";
        isValid=false;
    }else if(create!==confirm){
        errorConfirm.textContent = "Password does not match.";
        isValid =false;
    }
    if(isValid){
        window.location.href="index.html";
    }
}


