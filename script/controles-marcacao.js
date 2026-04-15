  // Exercício 0: ocultar/mostrar marcações
  const checkboxVisibilidadeMarcacoes = document.querySelector('#visibilidade-das-marcacoes');
  checkboxVisibilidadeMarcacoes.addEventListener('input', () => {
    document.body.classList.toggle(checkboxVisibilidadeMarcacoes.value, checkboxVisibilidadeMarcacoes.checked);
  });