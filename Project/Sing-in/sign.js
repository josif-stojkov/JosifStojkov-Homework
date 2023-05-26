let button = document.getElementById('submit')

if (localStorage.getItem('username') && localStorage.getItem('password')){
  document.getElementById('username').value = localStorage.getItem('username')
  document.getElementById('password').value = localStorage.getItem('password')
}

button.addEventListener('click',(e) =>{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    // localstorage
    localStorage.setItem('username',username)
    localStorage.setItem('password',password)
    alert("Your details are saved in localstorage")
  })