function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

 /* Date naissance
 form.birthdate.addEventListener('change', function() {
  validBirthDate(this);
});

const validBirthDate = function(inputBirthDate) {
  let testInputBirthDate = inputBirthDate.value;
  console.log(testInputBirthDate.length);

  const birthdateReg = new RegExp(
    '^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$'
  );

  let testBirthDate = birthdateReg.test(inputBirthDate.value);
  console.log(testBirthDate);

 
}*/

