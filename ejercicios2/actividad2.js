// Dado un array de números, crea una función que utilice filter para filtrar 
// solo los números pares y devolver un nuevo array con esos números.

function filtrarPares(array) {
    numeroPares = array.filter(elemento => elemento % 2 === 0)
    return numeroPares
}

let lista = [1, 2, 3, 4, 5]

console.log(filtrarPares(lista))