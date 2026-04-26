
const listaHTML = document.getElementById("lista-disciplinas");


fetch('disciplinas.json')
    .then(resposta => resposta.json()) 
    .then(dadosJSON => {
        dadosJSON.disciplinas.forEach(disciplina => {
            let item = document.createElement("li");
            
            item.innerHTML = `<strong>${disciplina.designacao}</strong> 
                              <br> Docente Teórica: ${disciplina.teorica.nome} 
                              <br> Docente Prática: ${disciplina.pratica.nome}`;
            
            listaHTML.appendChild(item);
        });
    })
    .catch(erro => {
        
        console.error("Erro ao carregar o ficheiro JSON:", erro);
        listaHTML.innerHTML = "<li>Erro ao carregar as disciplinas. Verifique a consola.</li>";
    });