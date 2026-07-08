const signupForm = document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();

const company=document.getElementById("company").value.trim();

const email=document.getElementById("email").value.trim();

const phone=document.getElementById("phone").value.trim();

const password=document.getElementById("password").value;

const confirm=document.getElementById("confirmPassword").value;

if(password!==confirm){

alert("Passwords do not match");

return;

}

const user={

name,

company,

email,

phone,

password

};

localStorage.setItem("opsUser",JSON.stringify(user));

alert("Account Created Successfully");

window.location.href="signin.html";

});

}

/* ---------------- SIGN IN ---------------- */

const signinForm = document.getElementById("signinForm");

if(signinForm){

signinForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("loginEmail").value;

const password=document.getElementById("loginPassword").value;

const savedUser=JSON.parse(localStorage.getItem("opsUser"));

if(!savedUser){

alert("No account found. Please Sign Up.");

window.location.href="signup.html";

return;

}

if(email===savedUser.email && password===savedUser.password){

localStorage.setItem("isLoggedIn","true");

alert("Login Successful");

window.location.href="onboarding.html";

}

else{

alert("Invalid Email or Password");

}

});

}
const userName = document.getElementById("name").value; // or from your database

localStorage.setItem("userName", userName);

window.location.href = "dashboard.html";

// ---------------- TOGGLE PASSWORD VISIBILITY ---------------- //

const toggle=document.getElementById("togglePassword");

if(toggle){

toggle.onclick=function(){

const pass=document.getElementById("loginPassword");

if(pass.type==="password"){

pass.type="text";

toggle.innerHTML="<i class='bx bx-hide'></i>";

}

else{

pass.type="password";

toggle.innerHTML="<i class='bx bx-show'></i>";

}

}

}