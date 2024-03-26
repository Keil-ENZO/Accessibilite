const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");

hamburgerButton.addEventListener("click", toggleNav);

function toggleNav() {
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Expressions régulières
const nameRegex = /^[A-Za-z]+$/;
const phoneRegex = /(\+|00)?(33|0)[1-9](\d{2}){4}/;
const emailRegex = /\S+@\S+\.\S+/;

const form = document.getElementById("contactForm");
const submitButton = form.querySelector('input[type="submit"]');

// Fonction de validation du formulaire
function validateForm() {
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
    nomInput.setCustomValidity("Le nom et le prénom doivent contenir uniquement des lettres.");
    document.getElementById("nomError").textContent = "Le nom et le prénom doivent contenir uniquement des lettres.";
  } else {
    nomInput.setCustomValidity("");
    document.getElementById("nomError").textContent = "";
  }

  // Validation de l'email
  const isEmailValid = emailRegex.test(email);
  if (!isEmailValid) {
    emailInput.setCustomValidity("Veuillez saisir une adresse email valide.");
    document.getElementById("emailError").textContent = "Veuillez saisir une adresse email valide.";
  } else {
    emailInput.setCustomValidity("");
    document.getElementById("emailError").textContent = "";
  }

  // Validation du numéro de téléphone
  const isPhoneValid = phoneRegex.test(tel);
  if (!isPhoneValid) {
    telInput.setCustomValidity("Veuillez saisir un numéro de téléphone valide.");
    document.getElementById("telError").textContent = "Veuillez saisir un numéro de téléphone valide.";
  } else {
    telInput.setCustomValidity("");
    document.getElementById("telError").textContent = "";
  }

  // Validation du message
  const isMessageValid = message.length >= 30;
  if (!isMessageValid) {
    messageInput.setCustomValidity("Le message doit contenir au moins 30 caractères.");
    document.getElementById("messageError").textContent = "Le message doit contenir au moins 30 caractères.";
  } else {
    messageInput.setCustomValidity("");
    document.getElementById("messageError").textContent = "";
  }

  // Activation ou désactivation du bouton de soumission en fonction de la validité du formulaire
  if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}


// Écouter les changements dans le formulaire pour valider en temps réel
form.addEventListener("input", validateForm);

// Valider le formulaire lors de la soumission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Formulaire envoyé !");
  // Ici, vous pouvez ajouter la logique d'envoi du formulaire si nécessaire
});
