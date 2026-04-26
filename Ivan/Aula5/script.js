var nome = "Ivan";

// Aceder button btnClicar
const btnClicar = document.querySelector("#btnClicar");

const caixaTexto = document.querySelector("#caixaTexto");

const titulo1 = document.querySelector("#titulo1");

const lista = document.querySelector("#lista");

// Criar um evento para o botao
btnClicar.addEventListener('click', function () {
    titulo1.textContent = "Olá, mundo!";
    titulo1.style.backgroundColor = "red";
});

caixaTexto.addEventListener('keydown', function (evt) {
    if (evt.key === "ArrowRight") {
        console.log(caixaTexto.value);
    }
});

lista.addEventListener('click', function (evt) {
    evt.target.remove();
});

