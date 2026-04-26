
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(() => console.log('Service Worker registado com sucesso.'))
            .catch(erro => console.error('Erro no Service Worker:', erro));
    });
}


function guardarLocal() {
    let nome = document.getElementById("nome").value;
    localStorage.setItem("nomeLocal", nome);
    console.log("Guardado no localStorage");
    alert("Guardado no LocalStorage!");
}

function guardarSession() {
    let nome = document.getElementById("nome").value;
    sessionStorage.setItem("nomeSession", nome);
    console.log("Guardado no sessionStorage");
    alert("Guardado no SessionStorage!");
}

function lerDados() {
    let local = localStorage.getItem("nomeLocal");
    let session = sessionStorage.getItem("nomeSession");
    console.log("LocalStorage:", local);
    console.log("SessionStorage:", session);
    alert(`LocalStorage: ${local}\nSessionStorage: ${session}`);
}



let db;

let request = indexedDB.open("EscolaDB", 1);


request.onupgradeneeded = function(event) {
    db = event.target.result;
    if (!db.objectStoreNames.contains("alunos")) {
        db.createObjectStore("alunos", { keyPath: "id" });
    }
};


request.onsuccess = function(event) {
    db = event.target.result;
    console.log("Base de dados IndexedDB criada/aberta!");
    listarAlunos();
};

function adicionarAluno() {
    let idInput = document.getElementById("alunoId").value;
    let nomeInput = document.getElementById("alunoNome").value;
    let cursoInput = document.getElementById("alunoCurso").value;

    if (!idInput || !nomeInput || !cursoInput) {
        alert("Preenche todos os campos do aluno!");
        return;
    }

    let transaction = db.transaction(["alunos"], "readwrite");
    let store = transaction.objectStore("alunos");

    
    let aluno = { 
        id: parseInt(idInput), 
        nome: nomeInput, 
        curso: cursoInput 
    };

    
    let pedido = store.put(aluno);

    pedido.onsuccess = function() {
        console.log("Aluno guardado na IndexedDB");
        document.getElementById("alunoId").value = "";
        document.getElementById("alunoNome").value = "";
        document.getElementById("alunoCurso").value = "";
        listarAlunos(); 
    };
}

function listarAlunos() {
    let transaction = db.transaction(["alunos"], "readonly");
    let store = transaction.objectStore("alunos");
    let pedido = store.getAll();

    pedido.onsuccess = function() {
        let alunos = pedido.result;
        let tbody = document.getElementById("tabelaAlunos");
        tbody.innerHTML = ""; 

        alunos.forEach(aluno => {
            let linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.curso}</td>
            `;
            tbody.appendChild(linha);
        });
    };
}