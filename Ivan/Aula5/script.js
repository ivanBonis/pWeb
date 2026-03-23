var nome = "Ivan";
console.log(nome);

// Aceder button btnClicar
const btnClicar = document.querySelector("#btnClicar");
console.log(btnClicar);

// Criar um evento para o botao
btnClicar.addEventListener('click', function () {
    alert("Butao pressionado");
});
