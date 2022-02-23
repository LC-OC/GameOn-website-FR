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
};

// ------------------------------------------ //

// Close modal
function closeModal() {
  modalbg.style.display = "none";
};


let form = document.querySelector('#form');
let br = document.querySelector(".br");
let btn = document.getElementById('button');
let tournoiP = document.getElementById('tournoiP');
let tournoiCheckbox = document.getElementById('tournoi');
let requiredCheckbox = document.getElementById('checkbox1');
requiredCheckbox.setAttribute('required', true);


// Regex and validation first name

form.first.addEventListener('change', function() {
  validFirstName(this);
});

const validFirstName = function(inputFirstName) {
  const firstNameReg = new RegExp(
    '^[A-zÀ-ú- ]{2,15}$'
  );

  let testFirstName = firstNameReg.test(inputFirstName.value);
  let inputFirstNameValidationMessage = document.querySelector('#first');
  let p = document.querySelector('.error-message-first');
  let testInputFirstName = inputFirstName.value;

  if (testFirstName == true) {
    p.innerHTML = "";
    inputFirstNameValidationMessage.classList.remove('validation-error');
    inputFirstNameValidationMessage.classList.add('validation-okay');
    btn.disabled = false;
  }

  else if (testInputFirstName.length == 1) {
    p.innerHTML = 'Format non valide: prénom trop court';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputFirstNameValidationMessage.classList.remove('validation-okay');
    inputFirstNameValidationMessage.classList.add('validation-error');
    btn.disabled = true;
  }

  else if (testInputFirstName.length > 15) {
    p.innerHTML = 'Format non valide: prénom trop long';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputFirstNameValidationMessage.classList.remove('validation-okay');
    inputFirstNameValidationMessage.classList.add('validation-error');
    btn.disabled = true;
  }

  else if (testInputFirstName === "") {
    p.innerHTML = 'Veuillez remplir le champ';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputFirstNameValidationMessage.classList.remove('validation-okay');
    inputFirstNameValidationMessage.classList.add('validation-error');
    btn.disabled = true;
  }

  else {
    p.innerHTML = 'Format non valide: le prénom ne peut contenir de chiffres et/ou de caractères spéciaux';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputFirstNameValidationMessage.classList.remove('validation-okay');
    inputFirstNameValidationMessage.classList.add('validation-error');
    btn.disabled = true;
  }
};

// Regex and validate last name

form.last.addEventListener('change', function() {
  validLastName(this);
});

const validLastName = function(inputLastName) {
  const lastNameReg = new RegExp(
    '^[A-zÀ-ú- ]{2,30}$'
  );

  let testLastName = lastNameReg.test(inputLastName.value);
  let inputLastNameValidationMessage = document.querySelector('#last');
  let p = document.querySelector('.error-message-last');
  let testInputLastName = inputLastName.value;
 

  if (testLastName == true) {
    p.innerHTML = "";
    inputLastNameValidationMessage.classList.remove('validation-error');
    inputLastNameValidationMessage.classList.add('validation-okay');
    btn.disabled = false;
  }

  else if (testInputLastName.length == 1) {
    p.innerHTML = 'Format non valide: nom trop court';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputLastNameValidationMessage.classList.remove('validation-okay');
    inputLastNameValidationMessage.classList.add('validation-error');
    btn.disabled = true;
  }

  else if (testInputLastName.length > 15) {
    p.innerHTML = 'Format non valide: nom trop long';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputLastNameValidationMessage.classList.remove('validation-okay');
    inputLastNameValidationMessage.classList.add('validation-error');
    btn.disabled = true;
  }

  else if (testInputLastName === "") {
    p.innerHTML = 'Veuillez remplir le champ';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputLastNameValidationMessage.classList.remove('validation-okay');
    inputLastNameValidationMessage.classList.add('validation-error');
    btn.disabled = true;
  }

  else {
    p.innerHTML = 'Format non valide: le prénom ne peut contenir de chiffres et/ou de caractères spéciaux';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputLastNameValidationMessage.classList.remove('validation-okay');
    inputLastNameValidationMessage.classList.add('validation-error');
    btn.disabled = true;
  }
}

// Regex and validation email

form.email.addEventListener('change', function() {
  validEmail(this);
});

const validEmail = function(inputEmail) {
  const emailReg = new RegExp(
    '[A-z0-9._-]+[@]{1}[a-z0-9._-]+[.]{1}[a-z]{2,10}'
  );

  let testEmail = emailReg.test(inputEmail.value);
  let inputEmailValidationMessage = document.querySelector('#email');
  let p = document.querySelector('.error-message-email');
  let testInputEmail = inputEmail.value;

  if (testEmail == true) {
    p.innerHTML = "";
    inputEmailValidationMessage.classList.remove('validation-error');
    inputEmailValidationMessage.classList.add('validation-okay');
    btn.classList.remove('button-disabled');
  }

  else if (testInputEmail === "") {
    p.innerHTML = 'Veuillez remplir le champ';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputEmailValidationMessage.classList.remove('validation-okay');
    inputEmailValidationMessage.classList.add('validation-error');
    btn.classList.add('button-disabled');
  }

  else {
    p.innerHTML = 'Format non valide: veuillez renseigner un format type "nom@mail.fr"';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    br.style.display = "none";
    inputEmailValidationMessage.classList.remove('validation-okay');
    inputEmailValidationMessage.classList.add('validation-error');
    btn.classList.add('button-disabled');
  }
}

// Regex and validation Quantity

form.quantity.addEventListener('change', function() {
  validQuantity(this);
});

const validQuantity = function(inputQuantity) {
  const quantityReg = new RegExp(
    '^[0-9]{1,2}$'
  );

  let testQuantity = quantityReg.test(inputQuantity.value);
  let inputQuantityValidationMessage = document.querySelector('#quantity');
  let p = document.querySelector('.error-message-quantity');
  let testInputQuantity = inputQuantity.value;

  if (testQuantity == true) {
    p.innerHTML = "";
    inputQuantityValidationMessage.classList.remove('validation-error');
    inputQuantityValidationMessage.classList.add('validation-okay');
    btn.classList.remove('button-disabled');
  }

  else if (testInputQuantity === "") {
    p.innerHTML = 'Veuillez remplir le champ';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    inputQuantityValidationMessage.classList.remove('validation-okay');
    inputQuantityValidationMessage.classList.add('validation-error');
    tournoiP.style.display = 'none';
    tournoiCheckbox.style.display = 'none';
    btn.classList.add('button-disabled');
  }

  else {
    p.innerHTML = 'Le format est incorrect: veuillez renseigner un chiffre égal ou inférieur à 99';
    p.style.color ='#fe142f';
    p.classList.add('validation-message');
    inputQuantityValidationMessage.classList.remove('validation-okay');
    inputQuantityValidationMessage.classList.add('validation-error');
    btn.classList.add('button-disabled');
  }
}


// Box checked - error message if not check

let errorCheckbox = document.getElementById('error-checkbox');
function errorRequiredCheckbox() {
  if (requiredCheckbox.checked == false) {
    errorCheckbox.style.display = 'block';
    br.style.display = 'none';
    errorCheckbox.innerHTML = "Veuillez accepter les conditions d'utilisation.";
    errorCheckbox.classList.add('checkbox-required');
    btn.classList.add('button-disabled');
   
} else {
  errorCheckbox.style.display = 'none';
  btn.classList.remove('button-disabled');
  }
}

// Validate Birthdate

function validBirthDate() {
  let birthdate = document.getElementById("birthdate").value;
  let birthdateP = document.getElementById('error-message-birthdate');
  let inputBirthdateValidationMessage = document.getElementById('birthdate');
  if (birthdate.match(/^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/)) {
    birthdateP.style.color ='#279e7a';
    birthdateP.innerHTML = "Format de date correct";
    birthdateP.classList.add('validation-message');
    inputBirthdateValidationMessage.classList.remove('validation-error');
    inputBirthdateValidationMessage.classList.add('validation-okay');
    btn.classList.remove('button-disabled');
  } else {
    birthdateP.style.color ='#fe142f';
    birthdateP.innerHTML = "Format de date incorrect";
    birthdateP.classList.add('validation-message');
    inputBirthdateValidationMessage.classList.remove('validation-okay');
    inputBirthdateValidationMessage.classList.add('validation-error');
  }
}


let messageAfterSubmit = document.getElementById("validation");

// Validation message after submit

function validate() {
  form.style.display = "none";
  messageAfterSubmit.classList.add("validate-appear");
}
 
// Close modale validation message

function closeValidation() {
  modalbg.style.display = "none";
}