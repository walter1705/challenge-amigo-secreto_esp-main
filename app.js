// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];


function agregarAmigo() {
    let amigoInput = document.querySelector('$amigo').value.trim();
    
    if (amigoInput === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigoInput = "";
    actualizarLista();    
}

function actualizarLista() {
    let lista = document.querySelector(`$listaAmigos`);
    lista.innerHTML = "";
    for(let i = 0;i<listaAmigos.length;i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultadoPantalla = document.getElementById("resultado");
    resultadoPantalla.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong> </li>`;
}
