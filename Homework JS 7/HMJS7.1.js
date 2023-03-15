let form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

let name1 = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let address = document.getElementById('address');
let city = document.getElementById('city');

name1.addEventListener ('blur', (event) => {
  if (name1.value.trim() === '') {
    name1.classList.add('invalid');
    document.getElementById('nameError').textContent = 'Please enter your name';

  }
})
