document.addEventListener('DOMContentLoaded',() => {
    const button = document.querySelector ('.js-theme');
    const meuBody = document.querySelector ('.meu-body'); // Corrigido para ' meu-body'
    const meuMenu = document.querySelector('.menu')
    const themes = {
        't-gold': 't-orange',
        't-orange': 't-gold',
    }
    if (button && meuBody) {
        button.addEventListener('click', event =>{
            event.preventDefault();
            const currenttheme = meuBody.dataset.theme;
            meuBody.setAttribute( 'data-theme', themes[currenttheme] || 't-orange'); // Corrigido para 't-orange'
            })
        button.addEventListener('click', event =>{
            event.preventDefault();
            const currenttheme = meuMenu.dataset.theme;
            meuMenu.setAttribute( 'data-theme', themes[currenttheme] || 't-orange');
            })
        }
    });