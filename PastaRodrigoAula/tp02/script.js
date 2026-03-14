
console.log("Ficheiro script.js carregado corretamente!");

window.onload = function() {
    const titulo = document.querySelector('h1');
    if (titulo) {
        titulo.style.color = '#007bff'; 
        console.log("O título da página foi alterado pelo script externo.");
    }
};