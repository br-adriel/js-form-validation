function limparErros(divErro) {
  if (divErro.hasChildNodes()) {
    const erros = [...divErro.childNodes];
    erros.map((erro) => divErro.removeChild(erro));
  }
}

function adicionarErro(msg, divErro) {
  const p = document.createElement("p");
  p.innerText = msg;
  divErro.appendChild(p);
}

// Input de email
const emailInput = document.getElementById("email");
const emailErros = document.getElementById("erro-email");

emailInput.addEventListener("focusin", () => {
  emailInput.classList.remove("invalido");
  emailInput.classList.remove("valido");
  emailErros.style.display = "none";
});

emailInput.addEventListener("focusout", () => {
  if (emailInput.checkValidity()) {
    emailInput.classList.remove("invalido");
    emailInput.classList.add("valido");

    emailErros.style.display = "none";
  } else {
    emailInput.classList.remove("valido");
    emailInput.classList.add("invalido");

    limparErros(emailErros);
    if (emailInput.validity.valueMissing) {
      adicionarErro("O email é um campo obrigatório", emailErros);
    }
    if (emailInput.validity.tooShort) {
      adicionarErro("O email precisa ter no mínimo 8 caracteres", emailErros);
    }
    if (emailInput.validity.typeMismatch) {
      adicionarErro(
        "O email precisa ter o formato nome@exemplo.com",
        emailErros
      );
    }
    emailErros.style.display = "flex";
  }
});

// Input de país
const paisInput = document.getElementById("pais");
const paisErros = document.getElementById("erro-pais");

paisInput.addEventListener("focusin", () => {
  paisInput.classList.remove("invalido");
  paisInput.classList.remove("valido");
  paisErros.style.display = "none";
});

paisInput.addEventListener("focusout", () => {
  if (paisInput.checkValidity()) {
    paisInput.classList.remove("invalido");
    paisInput.classList.add("valido");

    emailErros.style.display = "none";
  } else {
    paisInput.classList.remove("valido");
    paisInput.classList.add("invalido");

    limparErros(paisErros);
    if (paisInput.validity.valueMissing) {
      adicionarErro("O país é um campo obrigatório", paisErros);
    }
    if (paisInput.validity.tooShort) {
      adicionarErro("O país precisa ter no mínimo 3 caracteres", paisErros);
    }
    paisErros.style.display = "flex";
  }
});
