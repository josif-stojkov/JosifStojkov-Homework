let form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let address = document.getElementById('address');
let city = document.getElementById('city');

name.addEventListener ('blur', (event) => {
  if (name.value.trim() === '') {
    name.classList.add('invalid');
    document.getElementById('nameError').textContent = 'Please enter your name';

  }
}
