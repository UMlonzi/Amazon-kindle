var email_or_phone_number = document.forms['form']['email or phone number'];
var Amazon_password = document.forms['form']['Amazon password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email_or_phone_number.addEventListener('textInput', email_or_phone_number_verify);
Amazon_password.addEventListener('textInput', Amazon_password_verify);
function validated(){
  if(email_or_phone_number.value.length < 9) {
    email_or_phone_number.style.border = "1px solid red";
    email_error.style.display = "block"
    email_or_phone_number.focus();
    return false;
  }
  if (Amazon_password.value.length < 6) {
    Amazon_password.style.border = "1px solid red";
    pass_error.style.display = "block"
    Amazon_password.focus();
    return false;
  }
}
function email_or_phone_number_verify (){
  if (email_or_phone_number.value.length >= 8) {
    email_or_phone_number.style.border = "1px solid red";
    email_error.style.display = "block"
    email_or_phone_number.focus();
    return true;
  }
}