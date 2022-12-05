
var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

document.getElementById("message").style.display = "block";
myInput.onkeyup = function() {
  // Validate specials
  var special = /(?=.*[!@#$%^&*])/g;
  if(myInput.value.match(special)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");} 
  else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");} 
  else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");}

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");} 
  else {
    number.classList.remove("valid");
    number.classList.add("invalid");}

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");} 
  else {
    length.classList.remove("valid");
    length.classList.add("invalid");}
}


var input = document.getElementById("conf");
input.addEventListener("keydown", function (e) {
   if (e.key === "Enter") {  
     validate(e);}
});


function validate(e) {
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("conf").value;
    if (password != confirm) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}

const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');
  togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});


const toggleConf = document.querySelector('#toggleConf');
  const confirm = document.querySelector('#conf');
  toggleConf.addEventListener('click', function (e) {
    const type = conf.getAttribute('type') === 'password' ? 'text' : 'password';
    conf.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});


