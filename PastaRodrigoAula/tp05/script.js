
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        console.log('Seta para a direita pressionada');
        
        
        const lista = document.getElementById("lista");
        
        
        if (lista && lista.lastElementChild) {
            console.log("Item removido:", lista.lastElementChild.textContent);
            
            lista.lastElementChild.remove(); 
        } else {
            console.log("A lista já está vazia ou não foi encontrada!");
        }
    }
});