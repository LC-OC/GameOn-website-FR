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

// Regex et message validation Nom de famille

form.last.addEventListener('change', function() {
  validLastName(this);
});

const validLastName = function(inputLastName) {
  const lastNameReg = new RegExp(
    '^[A-zÀ-ú- ]{2,30}$'
  );

  let testLastName = lastNameReg.test(inputLastName.value);
  console.log(testLastName);
  let inputLastNameValidationMessage = document.querySelector('#last');
  let p = document.querySelector('.error-message-last');
  let testInputLastName = inputLastName.value;

  if (testLastName == true) {
    p.innerHTML = 'Format du nom valide';
    p.style.color ='#279e7a';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputLastNameValidationMessage.classList.remove('validation-error');
    inputLastNameValidationMessage.classList.add('validation-okay');
  }

  else if (testInputLastName.length == 1) {
    p.innerHTML = 'Format non valide: nom trop court';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputLastNameValidationMessage.classList.remove('validation-okay');
    inputLastNameValidationMessage.classList.add('validation-error');
  }

  else if (testInputLastName.length > 15) {
    p.innerHTML = 'Format non valide: nom trop long';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputLastNameValidationMessage.classList.remove('validation-okay');
    inputLastNameValidationMessage.classList.add('validation-error');
  }

  else if (testInputLastName === "") {
    p.innerHTML = 'Veuillez remplir le champ';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputLastNameValidationMessage.classList.remove('validation-okay');
    inputLastNameValidationMessage.classList.add('validation-error');
  }

  else {
    p.innerHTML = 'Format non valide: le prénom ne peut contenir de chiffres et/ou de caractères spéciaux';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputLastNameValidationMessage.classList.remove('validation-okay');
    inputLastNameValidationMessage.classList.add('validation-error');
  }
}

// Regex et message validation email

form.email.addEventListener('change', function() {
  validEmail(this);
});

const validEmail = function(inputEmail) {
  const emailReg = new RegExp(
    '[A-z0-9._-]+[@]{1}[a-z0-9._-]+[.]{1}[a-z]{2,10}'
  );

  let testEmail = emailReg.test(inputEmail.value);
  console.log(testEmail);
  let inputEmailValidationMessage = document.querySelector('#email');
  let p = document.querySelector('.error-message-email');
  let testInputEmail = inputEmail.value;

  if (testEmail == true) {
    p.innerHTML = 'Format valide';
    p.style.color ='#279e7a';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputEmailValidationMessage.classList.remove('validation-error');
    inputEmailValidationMessage.classList.add('validation-okay');
  }

  else if (testInputEmail === "") {
    p.innerHTML = 'Veuillez remplir le champ';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputEmailValidationMessage.classList.remove('validation-okay');
    inputEmailValidationMessage.classList.add('validation-error');
  }

  else {
    p.innerHTML = 'Format non valide: veuillez renseigner un format type "nom@mail.fr"';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputEmailValidationMessage.classList.remove('validation-okay');
    inputEmailValidationMessage.classList.add('validation-error');
  }
}