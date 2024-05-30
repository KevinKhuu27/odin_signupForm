const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const message = document.getElementById('message');

function validatePassword() {
    if (password.value !== confirm.value) 
    {
        message.textContent = "Password does not match";
        return false;
    }
    message.textContent = "";
    return true;
}

password.addEventListener('input', validatePassword);
confirm.addEventListener('input', validatePassword);

document.getElementById('signupForm').addEventListener('submit', function(event) 
{
    if (!validatePassword()) 
    {
        event.preventDefault();
    }
    else 
    {
        alert("Registration successful!");
    }
});