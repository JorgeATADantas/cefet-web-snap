  // Exercício 0: ocultar/mostrar marcações
  const checkboxVisibilidadeMarcacoes = document.querySelector('#visibilidade-das-marcacoes');
  checkboxVisibilidadeMarcacoes.addEventListener('input', () => {
    document.body.classList.toggle(checkboxVisibilidadeMarcacoes.value, checkboxVisibilidadeMarcacoes.checked);
  });

  //Megaexercício 2: Selecionar marcação e preencher controles

  function atualizaControles(marcacaoEl) {

    //x, y, largura e altura: vêm do style da marcação, das propriedades left, top, width, height
    document.querySelector('#x-da-marcacao').value = parseInt(marcacaoEl.style.left);
    document.querySelector('#y-da-marcacao').value = parseInt(marcacaoEl.style.top);
    document.querySelector('#largura-da-marcacao').value = parseInt(marcacaoEl.style.width);
    document.querySelector('#altura-da-marcacao').value = parseInt(marcacaoEl.style.height);

    //título, conteúdo e cor: vêm dos atributos de dados da .marcacao
    document.querySelector('#titulo-da-marcacao').value = marcacaoEl.dataset.titulo;
    document.querySelector('#conteudo-da-marcacao').value = marcacaoEl.dataset.conteudo;
    document.querySelector('#cor-da-marcacao').value = marcacaoEl.dataset.cor;

    //formato da marcação: deve-se verificar as classes que a .marcacao possui:
    //Se ela tiver .formato-oval, deve-se "checkar" o input[type="radio"] cujo value é formato-oval
    //Senão, checkar o que tem value="formato-retangular"
    const formato = marcacaoEl.classList.contains('formato-oval') ? 'formato-oval' : 'formato-retangular';
    document.querySelector(`input[name="formato-da-marcacao"][value="${formato}"]`).checked = true;
  }

    //Selecionar uma marcação: quando alguma .marcacao sofrer um click, 
    // remova a classe selecionada de quem é a marcação atual e insira essa mesma classe naquela que foi alvo do click
    marcacoes.forEach(function (marcacao) {
      marcacao.addEventListener('click', function () {
        marcacoes.forEach(m => m.classList.remove('selecionada'));
        marcacao.classList.add('selecionada');
        atualizaControles(marcacao);
      });
    });
    const marcacaoSelecionada = document.querySelector('.marcacao.selecionada');
    if (marcacaoSelecionada) atualizaControles(marcacaoSelecionada);
