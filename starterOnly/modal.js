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

// Regex et message validation Prénom

form.first.addEventListener('change', function() {
  validFirstName(this);
});

const validFirstName = function(inputFirstName) {
  const firstNameReg = new RegExp(
    '^[A-zÀ-ú- ]{2,15}$'
  );

  let testFirstName = firstNameReg.test(inputFirstName.value);
  console.log(testFirstName);
  let inputFirstNameValidationMessage = document.querySelector('#first');
  let p = document.querySelector('.error-message-first');
  let testInputFirstName = inputFirstName.value;

  if (testFirstName == true) {
    p.innerHTML = 'Format du prénom valide';
    p.style.color ='#279e7a';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputFirstNameValidationMessage.classList.remove('validation-error');
    inputFirstNameValidationMessage.classList.add('validation-okay');
  }

  else if (testInputFirstName.length == 1) {
    p.innerHTML = 'Format non valide: prénom trop court';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputFirstNameValidationMessage.classList.remove('validation-okay');
    inputFirstNameValidationMessage.classList.add('validation-error');
  }

  else if (testInputFirstName.length > 15) {
    p.innerHTML = 'Format non valide: prénom trop long';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputFirstNameValidationMessage.classList.remove('validation-okay');
    inputFirstNameValidationMessage.classList.add('validation-error');
  }

  else if (testInputFirstName === "") {
    p.innerHTML = 'Veuillez remplir le champ';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputFirstNameValidationMessage.classList.remove('validation-okay');
    inputFirstNameValidationMessage.classList.add('validation-error');
  }

  else {
    p.innerHTML = 'Format non valide: le prénom ne peut contenir de chiffres et/ou de caractères spéciaux';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputFirstNameValidationMessage.classList.remove('validation-okay');
    inputFirstNameValidationMessage.classList.add('validation-error');
  }
};