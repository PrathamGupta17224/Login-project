
function printemail(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    const userObject = {
        email_value : email,
        password_value : password
    }
    console.table(userObject);
}
