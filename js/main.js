
  // Função de validação do formulário
  function validarFormulario(event) {
    // Obter os valores dos campos do formulário
    var nome = document.querySelector('input[type="text"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var mensagem = document.querySelector('textarea').value;

    // Validar se os campos estão preenchidos
    if (nome === "" || email === "" || mensagem === "") {
      // Prevenir o envio do formulário
      event.preventDefault();
      alert("Por favor, preencha todos os campos.");
      return false;
    }

    // Validar se o email é válido (simples validação)
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      event.preventDefault();
      alert("Por favor, insira um endereço de e-mail válido.");
      return false;
    }

    // Se tudo estiver válido, o formulário será enviado
    return true;
  }

  

