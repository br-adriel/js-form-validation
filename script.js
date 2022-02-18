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

function tornarValido(input) {
  input.classList.remove("invalido");
  input.classList.add("valido");
}

function tornarInvalido(input) {
  input.classList.remove("valido");
  input.classList.add("invalido");
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
    tornarValido(emailInput);

    emailErros.style.display = "none";
  } else {
    tornarInvalido(emailInput);

    limparErros(emailErros);
    // verifica se foi preenchido
    if (emailInput.validity.valueMissing) {
      adicionarErro("O email é um campo obrigatório", emailErros);
    }

    // verifica se atende ao comprimento minimo
    if (emailInput.validity.tooShort) {
      adicionarErro("O email precisa ter no mínimo 8 caracteres", emailErros);
    }

    // verifica se atende ao formato especificado
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
    tornarValido(paisInput);

    emailErros.style.display = "none";
  } else {
    tornarInvalido(paisInput);

    limparErros(paisErros);

    // verifica se foi preechido
    if (paisInput.validity.valueMissing) {
      adicionarErro("O país é um campo obrigatório", paisErros);
    }

    // verifica se atende comprimento minimo
    if (paisInput.validity.tooShort) {
      adicionarErro("O país precisa ter no mínimo 3 caracteres", paisErros);
    }
    paisErros.style.display = "flex";
  }
});

// Input de CEP
const cepInput = document.getElementById("cep");
const cepErros = document.getElementById("erro-cep");

cepInput.addEventListener("focusin", () => {
  cepInput.classList.remove("invalido");
  cepInput.classList.remove("valido");
  cepErros.style.display = "none";
});

cepInput.addEventListener("focusout", () => {
  if (cepInput.checkValidity()) {
    tornarValido(cepInput);
    cepErros.style.display = "none";
  } else {
    tornarInvalido(cepInput);
    limparErros(cepErros);

    // verifica se esta preechido
    if (cepInput.validity.valueMissing) {
      adicionarErro("O CEP é um campo obrigatório", cepErros);
    }

    // verifica se atende comprimento minimo
    if (cepInput.validity.tooShort) {
      adicionarErro("O CEP precisa ter 8 números", cepErros);
    }

    // verifica se atende formato especificado
    if (cepInput.validity.patternMismatch) {
      adicionarErro(
        "O CEP precisa estar no formato 12345-678 ou 12345678",
        cepErros
      );
    }
    cepErros.style.display = "flex";
  }
});

// Input de senha
const senhaInput = document.getElementById("senha");
const senhaErros = document.getElementById("erro-senha");

senhaInput.addEventListener("focusin", () => {
  senhaInput.classList.remove("invalido");
  senhaInput.classList.remove("valido");
  senhaErros.style.display = "none";
});

senhaInput.addEventListener("focusout", () => {
  if (senhaInput.checkValidity()) {
    tornarValido(senhaInput);
    senhaErros.style.display = "none";
  } else {
    tornarInvalido(senhaInput);

    limparErros(senhaErros);

    // verifica se ta preenchido
    if (senhaInput.validity.valueMissing) {
      adicionarErro("A senha é um campo obrigatório", senhaErros);
    }

    // verifica se atende comprimento minimo
    if (senhaInput.validity.tooShort) {
      adicionarErro("A senha precisa ter no mínimo 8 carcteres", senhaErros);
    }

    // nao tem numero
    if (/(?=.*[0-9])/.test(senhaInput.value) === false) {
      adicionarErro("A senha precisa ter no mínimo 1 número", senhaErros);
    }

    // nao tem letra minuscula
    if (/(?=.*[a-z])/.test(senhaInput.value) === false) {
      adicionarErro(
        "A senha precisa ter no mínimo 1 letra minúscula",
        senhaErros
      );
    }

    // nao tem letra maiuscula
    if (/(?=.*[A-Z])/.test(senhaInput.value) === false) {
      adicionarErro(
        "A senha precisa ter no mínimo 1 letra maiúscula",
        senhaErros
      );
    }
    senhaErros.style.display = "flex";
  }
});

// Input de confimação de senha
const senha2Input = document.getElementById("senha2");
const senha2Erros = document.getElementById("erro-senha2");

senha2Input.addEventListener("focusin", () => {
  senha2Input.classList.remove("invalido");
  senha2Input.classList.remove("valido");
  senha2Erros.style.display = "none";
});

senha2Input.addEventListener("focusout", () => {
  limparErros(senha2Erros);
  senha2Erros.style.display = "none";

  tornarValido(senha2Input);

  // verifica se ta preenchido
  if (senha2Input.validity.valueMissing) {
    adicionarErro("A confirmação de senha é um campo obrigatório", senha2Erros);
    tornarInvalido(senha2Input);
    senha2Erros.style.display = "flex";
    senha2Input.setCustomValidity("Inválido");
  }

  // verifica se atende comprimento minimo
  if (senha2Input.validity.tooShort) {
    adicionarErro(
      "A confirmação de senha precisa ter no mínimo 8 carcteres",
      senha2Erros
    );
    tornarInvalido(senha2Input);
    senha2Erros.style.display = "flex";
    senha2Input.setCustomValidity("Inválido");
  }

  // verifica se esta diferente do campo de senha
  if (senhaInput.value !== senha2Input.value) {
    adicionarErro("As senhas são diferentes", senha2Erros);
    tornarInvalido(senha2Input);
    senha2Erros.style.display = "flex";
    senha2Input.setCustomValidity("Inválido");
  }
});
