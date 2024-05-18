function alterarStatus(id) {
    let jogoEscolhido = document.getElementById(`game-${id}`);
    let imagem = jogoEscolhido.querySelector('.dashboard__item__img');
    let butao = jogoEscolhido.querySelector('.dashboard__item__button');
    let nomeJogo = jogoEscolhido.querySelector('.dashboard__item__name');

    alert(nomeJogo.textContent);
}