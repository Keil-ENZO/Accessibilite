const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

const cancelButton = document.getElementById("cancel");
const confirmButton = document.getElementById("confirm");

const form = document.getElementById("contactForm");
const submitButton = form.querySelector('input[type="submit"]');

function toggleNav() {
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}

hamburgerButton.addEventListener("click", toggleNav);
// Expressions régulières
const nameRegex = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;
const phoneRegex = /(\+|00)?(33|0)[1-9](\d{2}){4}/;
const emailRegex = /\S+@\S+\.\S+/;

// Fonction de validation du formulaire
// Fonction de validation du formulaire
function validateFormOnSubmit() {
  // Récupérer les éléments du formulaire et les valeurs
  const nomInput = document.getElementById("nom");
  const prenomInput = document.getElementById("prenom");
  const emailInput = document.getElementById("email");
  const telInput = document.getElementById("tel");
  const messageInput = document.getElementById("message");

  const nom = nomInput.value;
  const prenom = prenomInput.value;
  const email = emailInput.value;
  const tel = telInput.value;
  const message = messageInput.value;

  // Validation du nom et du prénom
  const isNameValid = nameRegex.test(nom) && nameRegex.test(prenom);
  if (!isNameValid) {
    nomInput.setCustomValidity(
      "Le nom et le prénom doivent contenir uniquement des lettres."
    );
    document.getElementById("nomError").textContent =
      "Le nom et le prénom doivent contenir uniquement des lettres.";
  } else {
    nomInput.setCustomValidity("");
    document.getElementById("nomError").textContent = "";
  }

  // Validation de l'email
  const isEmailValid = emailRegex.test(email);
  if (!isEmailValid) {
    emailInput.setCustomValidity("Veuillez saisir une adresse email valide.");
    document.getElementById("emailError").textContent =
      "Veuillez saisir une adresse email valide.";
  } else {
    emailInput.setCustomValidity("");
    document.getElementById("emailError").textContent = "";
  }

  // Validation du numéro de téléphone
  const isPhoneValid = phoneRegex.test(tel);
  if (!isPhoneValid) {
    telInput.setCustomValidity(
      "Veuillez saisir un numéro de téléphone valide."
    );
    document.getElementById("telError").textContent =
      "Veuillez saisir un numéro de téléphone valide.";
  } else {
    telInput.setCustomValidity("");
    document.getElementById("telError").textContent = "";
  }

  // Validation du message
  const isMessageValid = message.length >= 30;
  if (!isMessageValid) {
    messageInput.setCustomValidity(
      "Le message doit contenir au moins 30 caractères."
    );
    document.getElementById("messageError").textContent =
      "Le message doit contenir au moins 30 caractères.";
  } else {
    messageInput.setCustomValidity("");
    document.getElementById("messageError").textContent = "";
  }

  // Vérifier si le formulaire est valide
  if (form.checkValidity()) {
    modal.style.display = "block";
  } else {
    event.preventDefault();
  }
}

// Valider le formulaire lors de la soumission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  validateFormOnSubmit();

  if (form.checkValidity()) {
    modal.style.display = "block";
  }
});

cancelButton.addEventListener("click", function () {
  modal.style.display = "none";
});

confirmButton.addEventListener("click", function () {
  form.submit();
});
