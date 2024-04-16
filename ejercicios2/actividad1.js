// Dado un array de números, crea una función que utilice map para duplicar 
// cada número en el array y devolver un nuevo array con los resultados.

function duplicarMap(array) {
    let duplicar = array.map(elemento => elemento + "" + elemento )
    return duplicar
}

let lista = [1, 2, 3, 4, 5]

console.log(duplicarMap(lista))
