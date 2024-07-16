const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter',()=>{const personagemselecionado = document.querySelector('.selecionado');
        personagemselecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado');

    const personagemGrande = document.querySelector('.personagem-info')

    const idPersonagem = personagem.attributes.id.value;

    personagemGrande.src = `card-${idPersonagem}.png`

    const nomePersonagem = document.getElementById('nome-personagem');

    nomePersonagem.innerHTML = personagem.getAttribute('data-name')


})
})