// Função da Tarefa 1 (mantém-se)
function guardarLocal() {
    let nome = document.getElementById("nome").value;
    localStorage.setItem("nomeLocal", nome);
    console.log("Guardado no localStorage");
}

// NOVA FUNÇÃO: Guardar no sessionStorage
function guardarSession() {
    // Vai buscar o valor do input
    let nome = document.getElementById("nome").value; 
    
    // Guarda o valor no sessionStorage com a chave "nomeSession"
    sessionStorage.setItem("nomeSession", nome); 
    
    console.log("Guardado no sessionStorage");
    alert("Nome guardado na sessão com sucesso!");
}

// ATUALIZAÇÃO: Ler ambos os dados
function lerDados() {
    let local = localStorage.getItem("nomeLocal"); 
    let session = sessionStorage.getItem("nomeSession"); 
    
    console.log("LocalStorage:", local); 
    console.log("SessionStorage:", session); 
    // Mostra o resultado na página HTML
    let paragrafoResultado = document.getElementById("resultado");
    paragrafoResultado.innerHTML = 
        "<strong>LocalStorage:</strong> " + (local ? local : "Vazio") + "<br>" +
        "<strong>SessionStorage:</strong> " + (session ? session : "Vazio");
}