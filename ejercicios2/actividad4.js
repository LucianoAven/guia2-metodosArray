// Dado un array de personas, donde cada objeto tiene las propiedades nombre y edad, 
// crea una función que utilice map para generar un nuevo array con los nombres de las 
// personas en mayúsculas, luego utilice filter para filtrar solo las personas 
// mayores de 18 años, y finalmente utilice find para encontrar la primera persona 
// que tenga exactamente 25 años.

let personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 40 },
  { nombre: "Ana", edad: 35 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Sofía", edad: 28 },
  { nombre: "Carlos", edad: 45 },
  { nombre: "Laura", edad: 33 },
  { nombre: "David", edad: 14 },
  { nombre: "Elena", edad: 27 }
];

function usarMapFilterFind(array) {
    nombresMayusculas = array.map(elemento => elemento.nombre = elemento.nombre.toUpperCase())
    console.log(nombresMayusculas)
    mayoresEdad = array.filter(elemento => elemento.edad >= 18)
    console.log("\nPersonas mayores de edad:")
    for (x = 0; x < mayoresEdad.length; x++) {
        console.log(mayoresEdad[x])
    };
    personaEdad25 = mayoresEdad.find(elemento => elemento.edad = 25) 
    console.log("\nPersona con 25 años:")
    return personaEdad25
};

console.log(usarMapFilterFind(personas))

