let form2 = document.getElementById("myForm2");
let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let address = document.getElementById("address");
let zip = document.getElementById("zip");

name.addEventListener("blur", function() {
    if (!name.value) {
