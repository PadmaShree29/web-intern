let form = document.getElementById('login-form');
let email = document.getElementById('email');
let pass = document.getElementById('pass');

let emailError = document.getElementById('emailError');
let passError = document.getElementById('passError');

form.addEventListener('submit',(e)=> {
    emailError.textContent = "";
    passError.textContent = "";
    e.preventDefault();

    let valid = true;

    let emailvalue = email.value.trim();
    if (!emailvalue) {
        emailError.textContent = "enter the email id"
        valid = false;
    }
 else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailvalue)) {
        emailError.textContent = "email is invalid"
        valid = false;
    }


    let passvalue = pass.value.trim();
    if (!passvalue) {
        passError.textContent = "password can not be empty"
        valid = false;
    }
    else if (!/(?=.*[a-z])/.test(passvalue)) {
        passError.textContent = "password must be uppercase & number"
        valid = false;
    }
    else if (!/(?=.*[A-Z])/.test(passvalue)) {
        passError.textContent = "password must be include uppercase"
        valid = false;
    }
    else if (!/(?=.*\d)/.test(passvalue)) {
        passError.textContent = "password must be  include number"
        valid = false;
    }
    else if (!/(?=.[&#@])/.test(passvalue)) {
        passError.textContent = "must be atleast one special character"
        valid = false;
    }


    if (valid) {
        let user = JSON.parse(localStorage.getItem('signupData'));
        if (!user) {
            return alert("no user found,please signup")
        }
        if (emailvalue === user.email && passvalue === user.password) {
            alert ("login successfull")
            window.location.href = "homepage.html"
        }
        else {
            alert("invalid credentials")
        }
    }



})