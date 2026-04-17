// Exercício 0: ocultar/mostrar marcaçõess
  const checkboxVisibilidadeMarcacoes = document.querySelector('#visibilidade-das-marcacoes');
  checkboxVisibilidadeMarcacoes.addEventListener('input', () => {
    document.body.classList.toggle(checkboxVisibilidadeMarcacoes.value, checkboxVisibilidadeMarcacoes.checked);
  });

  //Megaexercício 2: Selecionar marcação e preencher controles
  let marcacaoSelecionada = document.querySelector('.marcacao.selecionada');

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

    if (marcacaoSelecionada) {
    atualizaControles(marcacaoSelecionada);
     }

    //Selecionar uma marcação: quando alguma .marcacao sofrer um click, 
    // remova a classe selecionada de quem é a marcação atual e insira essa mesma classe naquela que foi alvo do click
    //const marcacoes = document.querySelectorAll('.marcacao');
    for (const marcacao of marcacoes) {
      marcacao.addEventListener('click', () => {
        if (marcacaoSelecionada) {
          marcacaoSelecionada.classList.remove('selecionada');
        }
        marcacao.classList.add('selecionada');
        marcacaoSelecionada = marcacao;
        atualizaControles(marcacao);
      });
    }

    //Megaexercício 3: Controles alteram marcação

      function atualizaMarcacao(marcacaoEl) {

        //Campos x, y, largura e altura: devem alterar o style da marcação - Lembre-se de concatenar o valor numérico do campo com a unidade de medida px
        marcacaoEl.style.left = document.querySelector('#x-da-marcacao').value + 'px';
        marcacaoEl.style.top = document.querySelector('#y-da-marcacao').value + 'px';
        marcacaoEl.style.width = document.querySelector('#largura-da-marcacao').value + 'px';
        marcacaoEl.style.height = document.querySelector('#altura-da-marcacao').value + 'px';

        //Campos título, conteúdo e cor: definem atributos de dados da marcação
        marcacaoEl.dataset.titulo = document.querySelector('#titulo-da-marcacao').value;
        marcacaoEl.dataset.conteudo = document.querySelector('#conteudo-da-marcacao').value;
        marcacaoEl.dataset.cor = document.querySelector('#cor-da-marcacao').value;

        const formatoSelecionado = document.querySelector('input[name="formato-da-marcacao"]:checked').value;
        marcacaoEl.classList.remove('formato-oval', 'formato-retangular');
        marcacaoEl.classList.add(formatoSelecionado);
      }

      const camposMarcacao = document.querySelectorAll('input:not([type="checkbox"]), textarea');
      for (const input of camposMarcacao) {
        input.addEventListener('input', () => {
          if (marcacaoSelecionada) {
            atualizaMarcacao(marcacaoSelecionada);
          }
        });
      }