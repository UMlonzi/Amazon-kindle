function password_verify (){
  if (password.value.length >= 1) {
    pass_error.style.border = "1px solid red";
    pass_error.style.display = "none"
  
    return true;
  }
}

function email_verify (){
  if (email.value.length >= 1) {
    email_error.style.border = "1px solid red";
    email_error.style.display = "none"
  
    return true;
  }
}

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var invalid_credential_error = document.getElementById('invalid_credential_error');
invalid_credential_error.style.display = "none";

email.addEventListener('textInput', email_verify);
password.addEventListener('textInput', password_verify);

function myLogin(event) {
    event.preventDefault();
	var usernanme = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	
	if(email.length < 1) {
		email.style.border = "1px solid red";
		email_error.style.display = "block"
		email.focus();
		return false;
	}
  if (password.length < 1) {
	password.style.border = "1px solid red";
	pass_error.style.display = "block"
	password.focus();
	return false;
  }

	var regEmail = localStorage.getItem('Is_enter_email');
	var regPass = localStorage.getItem('RegPassword');

	if(usernanme == regEmail && password == regPass){
		window.location = "./landing page.html";
	}else{
		invalid_credential_error.style.display = "block";
		email.focus();
	}
}
	

    


