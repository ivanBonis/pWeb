// Função para guardar o nome no localStorage
function guardarLocal() {
    // Vai buscar o valor que escreveste no input
    let nome = document.getElementById("nome").value;
    
    // Guarda esse valor no localStorage com a chave "nomeLocal"
    localStorage.setItem("nomeLocal", nome);
    
    console.log("Guardado no localStorage");
    alert("Nome guardado com sucesso!");
}

// Função para ler o nome do localStorage
function lerDados() {
    // Vai buscar o valor guardado no localStorage
    let local = localStorage.getItem("nomeLocal");
    
    console.log("LocalStorage:", local);
    
    // Mostra o resultado na página HTML
    let paragrafoResultado = document.getElementById("resultado");
    if (local) {
        paragrafoResultado.innerText = "O nome guardado é: " + local;
    } else {
        paragrafoResultado.innerText = "Ainda não há nenhum nome guardado.";
    }
}