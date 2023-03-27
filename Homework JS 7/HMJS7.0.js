let form = document.getElementById("myForm");
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  let emptyFields = [];

  if (!form.name.value) {
    emptyFields.push("Name");
  }

  if (!form.email.value) {
    emptyFields.push("Email");
  }

  if (!form.phone.value) {
    emptyFields.push("Phone");
  }

  if (!form.address.value) {
    emptyFields.push("Address");
  }

  if (!form.zip.value) {
    emptyFields.push("Zip code");
  }

  if (emptyFields.length > 0) {
    alert("Please fill in the following fields: " + emptyFields.join(", "));
  } else {
    alert("OK");
  }
});
console.log(addEventListener);
