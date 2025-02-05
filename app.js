// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];


function agregarAmigo() {
    let amigoInput = document.querySelector('#amigo').value.trim();
    
    if (amigoInput === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (!listaAmigos.includes(amigoInput)) {
        listaAmigos.push(amigoInput);    
    } else {
        alert("No puedes agregar dos veces a la misma persona");
    }

    document.querySelector('#amigo').value = "";
    actualizarLista();    
}

function actualizarLista() {
    let lista = document.querySelector(`#listaAmigos`);
    lista.innerHTML = "";
    for(let i = 0;i<listaAmigos.length;i++) {
        lista.innerHTML += `<li>${listaAmigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];
    let resultadoPantalla = document.querySelector("#resultado");
    resultadoPantalla.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong> </li>`;
    actualizarLista();
}

//todo actualizar lista limpiar
