const personajes = [
    {
        id: 1,
        nombre: "Michael Knight",
        anio: 1986,
        tipo: "Serie",
    },
    {
        id: 2,
        nombre: "Clark Kent",
        anio: 1980,
        tipo: "Pelicula",
    },
    {
        id: 3,
        nombre: "Stringfellow Howke",
        anio: 1990,
        tipo: "Serie",
    },

];

console.log(personajes);
  
const buscarId = () => {
    const id = document.getElementById("id").value;
    const pers = personajes.find(personajes => personajes.id == id);
    console.log(pers);
}

const nombres = personajes.map(personajes => personajes.nombre);
console.log(nombres);

const promedio = personajes.reduce((valAnterior, valActual) => valAnterior + valActual.anio, 0) / personajes.length;
console.log(promedio);

const persSeries = personajes.filter(personajes => personajes.tipo === "Serie");
console.log(persSeries);