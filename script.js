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
    paisInput.classList.remove("invalido");
    paisInput.classList.add("valido");

    emailErros.style.display = "none";
  } else {
    paisInput.classList.remove("valido");
    paisInput.classList.add("invalido");

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
    cepInput.classList.remove("invalido");
    cepInput.classList.add("valido");

    cepErros.style.display = "none";
  } else {
    cepInput.classList.remove("valido");
    cepInput.classList.add("invalido");

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
    senhaInput.classList.remove("invalido");
    senhaInput.classList.add("valido");

    senhaErros.style.display = "none";
  } else {
    senhaInput.classList.remove("valido");
    senhaInput.classList.add("invalido");

    limparErros(senhaErros);

    // verifica se ta preenchido
    if (senhaInput.validity.valueMissing) {
      adicionarErro("A senha é um campo obrigatório", senhaErros);
    }

    // verifica se atende comprimento minimo
    if (senhaInput.validity.tooShort) {
      adicionarErro("A senha precisa ter no mínimo 8 carcteres", senhaErros);
    }

    // verifica se atende ao formato especificado
    if (senhaInput.validity.patternMismatch) {
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
  if (senha2Input.checkValidity()) {
    senha2Input.classList.remove("invalido");
    senha2Input.classList.add("valido");

    senha2Erros.style.display = "none";
  } else {
    senha2Input.classList.remove("valido");
    senha2Input.classList.add("invalido");

    limparErros(senha2Erros);

    // verifica se ta preenchido
    if (senha2Input.validity.valueMissing) {
      adicionarErro(
        "A confirmação de senha é um campo obrigatório",
        senha2Erros
      );
    }

    // verifica se atende comprimento minimo
    if (senha2Input.validity.tooShort) {
      adicionarErro(
        "A confirmação de senha precisa ter no mínimo 8 carcteres",
        senha2Erros
      );
    }

    // verifica se esta diferente do campo de senha
    if (senhaInput.value !== senha2Input.value) {
      adicionarErro("As senhas são diferentes", senha2Erros);
    }
    senha2Erros.style.display = "flex";
  }
});
