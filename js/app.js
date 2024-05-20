let jogosAlugados = 0;

function quantidadeDeJogosAlugados() {
    console.log(`Quantidade de jogos alugados: ${jogosAlugados}`);
}
function alterarStatus(id) {
    let jogoEscolhido = document.getElementById(`game-${id}`);
    let imagem = jogoEscolhido.querySelector('.dashboard__item__img');
    let botao = jogoEscolhido.querySelector('.dashboard__item__button');
    let nomeJogo = jogoEscolhido.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
     //   if (confirm(`Você confirma que devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
             botao.classList.remove('dashboard__item__button--return');
             botao.textContent = 'Alugar';
             jogosAlugados--;
   //     }
    }else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;
    }  

    quantidadeDeJogosAlugados();
}
// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    quantidadeDeJogosAlugados();
});



