import { menu } from './nav-menu.js';

document.addEventListener("DOMContentLoaded", () => {
    /* Cria o javascript do menu sanduíche da versão mobile */
    menu();
    const hyperlinks = document.querySelectorAll("a");
    const buttons = document.querySelectorAll("button");
    /* Adicionando classes de animação de botôes via javascript */
    buttons.forEach(element => {
        element.classList.add("transition-all", "duration-300", "hover:ring-2", "hover:ring-[#004346]", "hover:ring-offset-2");
    });
});