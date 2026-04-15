//Exercício 1: Balãozinho com informações da marcação

const balaozinho = document.querySelector('#balaozinho'); //Selecionar o primeiro elemento que tem id = balaozinho
const marcacoes  = document.querySelectorAll('.marcacao');   //Selecionar todos os elementos que tem id = marcacao

for (const marcacao of marcacoes) {         // Pecorrendo todas as marcações

    //Quando o mouse entra no boalaozinho, pega os atributos
    marcacao.addEventListener('mouseover', () => {
        balaozinho.innerHTML = `<h2>${marcacao.dataset.titulo}</h2>     
                                <p>${marcacao.dataset.conteudo}</p>`;  
        balaozinho.style.color = marcacao.dataset.cor;
    });

    //Quando o mouse sai no boalaozinho, apaga
    marcacao.addEventListener('mouseout', () => {
        balaozinho.innerHTML = '';
    });

    //Quando o mouse move no boalaozinho, move junto
    marcacao.addEventListener('mousemove', (e) => {
        balaozinho.style.left = e.pageX + 'px';
        balaozinho.style.top = e.pageY + 'px';
    });
}