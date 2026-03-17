//Usuário envia formulário
//↓
//JS intercepta envio
//↓
//verifica cada campo
//↓
//se algo estiver errado → mostra erro
//↓
//se tudo estiver certo → envia

//O que esse formulário faz
//🔵 clicar no campo → animação
//🔴 erro → borda vermelha + mensagem
//🟢 correto → borda verde
//Valida enquanto o usuário digita.

// pega os elementos do HTML
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");


nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);


form.addEventListener("submit", function (event) {

  event.preventDefault();

  validateName();
  validateEmail();
  validatePassword();

});


function showError(input, message) {

  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  input.classList.add("error");
  input.classList.remove("success");

}


function setSuccess(input) {

  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = "";

  input.classList.remove("error");
  input.classList.add("success");

}


function validateName() {

  if (nameInput.value.trim() === "") {
    showError(nameInput, "Digite seu nome");
  } else {
    setSuccess(nameInput);
  }

}


function validateEmail() {

  const email = emailInput.value;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    showError(emailInput, "Digite seu email");
  }
  else if (!regex.test(email)) {
    showError(emailInput, "Email inválido");
  }
  else {
    setSuccess(emailInput);
  }

}


function validatePassword() {

  if (passwordInput.value.length < 8) {
    showError(passwordInput, "Senha precisa ter 8 caracteres");
  } else {
    setSuccess(passwordInput);
  }

}