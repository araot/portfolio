
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
    Swal.fire({
      icon: 'warning',
      title: 'Campos vazios!',
      text: 'Por favor, preencha todos os campos do formulário.',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'swal2-popup-warning',
        title: 'swal2-title-warning'
      }
    });
    return;
  }

  // Validar se o email é válido (simples validação)
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    event.preventDefault();
    Swal.fire({
      icon: 'warning',
      title: 'E-mail inserido inválido!',
      text: 'Por favor, insira um endereço de e-mail válido.',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'swal2-popup-warning',
        title: 'swal2-title-warning'
      }
    });
    return;
  }

  // Se tudo estiver válido, mostrar a mensagem de sucesso
  Swal.fire({
    icon: 'success',
    title: 'Dados enviados!',
    text: 'Os seus dados foram enviados com sucesso.',
    confirmButtonText: 'OK',
    customClass: {
      popup: 'swal2-popup-success',
      title: 'swal2-title-success'
    }
  }).then(function() {
    // Limpar os campos do formulário após a confirmação do sucesso
    document.querySelector('input[type="text"]').value = '';
    document.querySelector('input[type="email"]').value = '';
    document.querySelector('textarea').value = '';
  });

  // Se tudo estiver válido, o formulário será enviado
  return;
}

  

