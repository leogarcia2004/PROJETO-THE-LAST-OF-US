
    
    const botao_troca = document.querySelectorAll('.botao')
    const imagem_troca = document.querySelectorAll('.imagem')

    botao_troca.forEach((button, position) => {

        button.addEventListener('click', () => {

            desselecionarBotao();
            desativarImagem();

            selecionarBotao(button);
            ativarImagem(position);
        }) 
    });
    
    

    function ativarImagem(position) {
        imagem_troca[position].classList.add('ativa');
    }

    function selecionarBotao(button) {
        button.classList.add('selecionado');
    }

    function desativarImagem() {
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
    }

    function desselecionarBotao() {
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
    }