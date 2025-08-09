const userData=JSON.parse(localStorage.getItem("signupData"));
if(!userData){
    alert("Invalid session data Please log in again.");
    window.location.href="login.html";
}
else{
 document.getElementById("welcomeMessage").textContent=`welcome back ${userData.username}!`;
}
