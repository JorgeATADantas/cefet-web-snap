//Exercício 4: Filtros na foto
const filtro = document.querySelector('#filtro-da-foto');
const foto = document.querySelector('.foto-anotada img');

//Quando o usuário escolher um filtro, simplesmente altere a propriedade filter da .foto-anotada > img para o valor da opção escolhida
filtro.addEventListener('change', function () {
  foto.style.filter = filtro.value;
});


//Desafio 1: Trocar a foto por outro arquivo.

const arquivoImagem = document.querySelector('#imagem');
arquivoImagem.addEventListener('change', function (e) {
    const arquivo = new FileReader();
    arquivo.addEventListener('load', function () {
    foto.src = arquivo.result;
    foto.style.filter = 'none';
    filtro.value = 'none';
  });

  arquivo.readAsDataURL(e.target.files[0]);
});