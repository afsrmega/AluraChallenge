// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigosSorteo = [];
let posicionesSorteadas = [];

let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras y espacios

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    let campo = nombreAmigo.trim(); // Corta los espacios vacíos

    //si al quitar los espacios vacíos no quedan caracteres no es válido, porque son solo espacios o no hay nada
    if(campo.length === 0){
        alert("El campo no puede estar vacío o contener solo espacios."); 
        limpiarCaja();

    }
    //si tiene caracteres especiales, no es válido
    else if(!regex.test(campo)){
        alert("El campo solo puede contener letras y espacios. No se permiten números ni caracteres especiales.");
        limpiarCaja();

    }
    //revisa el amigo en el arreglo, para no repetir
    else if(amigosSorteo.includes(" " + nombreAmigo)){
        alert("El amigo ya existe");
        limpiarCaja();


    }
    else {
            

        //agrega el nombre, y agrega un espacio para mostrar en pantalla de manera más organizada por eso se revisa con espacio al validar la entrada
        console.log(nombreAmigo);
        amigosSorteo.push(" " + nombreAmigo);
        asignarTextoElemento('listaAmigos', amigosSorteo);
        limpiarCaja();
        if(posicionesSorteadas.length == amigosSorteo.length-1){
            posicionesSorteadas = [];
               }
           
        // se vacían las posiciones sorteadas, si solo queda la nueva opción agregada por sortear, para que no sea predecible, es -1 porque se acaba de agregar uno
            
    }
    

 
return;
}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function sortearAmigo() {
    let numeroAmigo =  Math.floor(Math.random()*(amigosSorteo.length));
    console.log(numeroAmigo);
    console.log("possort" + posicionesSorteadas.length);
    console.log("posamig" + amigosSorteo.length);


if(posicionesSorteadas.length == amigosSorteo.length){

    alert("Se sortearon todos los amigos posibles");
    return;

}
else{

    if(posicionesSorteadas.includes(numeroAmigo)){
    return sortearAmigo();

    }
    else{
    alert("el amigo secreto es:" + amigosSorteo[numeroAmigo]);
    posicionesSorteadas.push(numeroAmigo);
    return;


    }
}
    //Si ya sorteamos todos los números,, sortear si solo hay un amigo_pregunta
}


function limpiarCaja() {
    document.getElementById('amigo').value = '';
}