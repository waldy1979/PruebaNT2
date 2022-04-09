/*.
Tarea en clase 28/3:
-hacer un array de al menos 25 objetos(personajes) que contengan como minimo, id, nombre, edad, una imagen, lugar de nacimiento y tipo.
-mostrar todos los objetos en cards de bootstrap cuando cargue la pagina.
-poder filtrar por tipo y que se muestren solo las cards filtradas.
-poder buscar por id y que se muestre la card.
-poder crear un objeto y mostrarlo por consola. SI LLEGAN
*/

const personajes = [
    {
        id: 1, 
        nombre: 'He-man',
        edad: 35, 
        imagen: 'https://static.wikia.nocookie.net/death-battle-en-espanol/images/4/4c/He-Man.png/revision/latest/scale-to-width-down/900?cb=20151005134503&path-prefix=es' , 
        lugarNacimeinto: 'Eternia', 
        tipo: 'Principal', 
    }, 
    {
        id: 2, 
        nombre: 'She-ra',
        edad: 35, 
        imagen: 'https://areajugones.sport.es/wp-content/uploads/2018/05/She-Ra1513163758851_original.jpg' , 
        lugarNacimeinto: 'Eternia', 
        tipo: 'Principal', 
    },
    {
        id: 3, 
        nombre: 'Skeletor',
        edad: 99, 
        imagen: 'https://upload.wikimedia.org/wikipedia/fi/b/bc/Skeletor.jpg' , 
        lugarNacimeinto: 'Eternia', 
        tipo: 'Principal', 
    },
    {
        id: 4, 
        nombre: 'Orko',
        edad: 120, 
        imagen: 'https://i.pinimg.com/564x/ed/77/8b/ed778b97a9d5fe8cfab459fe81636e3a.jpg' , 
        lugarNacimeinto: 'Trolla', 
        tipo: 'Secundario', 
    },
    {
        id: 5, 
        nombre: 'Adam',
        edad: 35, 
        imagen: 'https://m.media-amazon.com/images/M/MV5BNmFiMmUwNGMtZjYyNy00NjA2LTgwZjktNTkyZWEzNTg2YmUyXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_QL75_UX500_CR0,47,500,281_.jpg' , 
        lugarNacimeinto: 'Eternia', 
        tipo: 'Principal', 
    },
    {
        id: 6, 
        nombre: 'Lion-o',
        edad: 25, 
        imagen: 'https://i.pinimg.com/originals/3f/e1/eb/3fe1eb84a1553909f8fd8182ab5fbf80.jpg' , 
        lugarNacimeinto: 'Thundera', 
        tipo: 'Principal', 
    },
    {
        id: 7, 
        nombre: 'Pantro',
        edad: 40, 
        imagen: 'https://pbs.twimg.com/profile_images/486148235111587841/3zG2GJ6s_400x400.jpeg' , 
        lugarNacimeinto: 'Thundera', 
        tipo: 'Secundario', 
    },
    {
        id: 8, 
        nombre: 'Tigro',
        edad: 35, 
        imagen: 'https://i1.wp.com/cinicosdesinope.com/wp-content/uploads/2015/09/tigro-thundercats-personajes.jpg?fit=500%2C375&ssl=1' , 
        lugarNacimeinto: 'Thundera', 
        tipo: 'Secundario', 
    },
    {
        id: 9, 
        nombre: 'Cheetara',
        edad: 38, 
        imagen: 'https://static.wikia.nocookie.net/thundercats/images/0/0c/Cheetara_imagen_oficial.PNG/revision/latest?cb=20120107022248&path-prefix=es' , 
        lugarNacimeinto: 'Thundera', 
        tipo: 'Secundario', 
    },
    {
        id: 10, 
        nombre: 'Mum-ra',
        edad: 500, 
        imagen: 'https://static.wikia.nocookie.net/thundercats/images/2/29/Thundercats_intro_1377.jpg/revision/latest/scale-to-width-down/250?cb=20120703232757&path-prefix=es' , 
        lugarNacimeinto: 'Tercer planeta', 
        tipo: 'Principal', 
    },
    {
        id: 11, 
        nombre: 'Phineas',
        edad: 10, 
        imagen: 'https://static.wikia.nocookie.net/disney/images/5/52/Phineas_Flynn.png/revision/latest?cb=20111012150205&path-prefix=es' , 
        lugarNacimeinto: 'Area limitrofe', 
        tipo: 'Principal', 
    },
    {
        id: 12, 
        nombre: 'Ferb',
        edad: 10, 
        imagen: 'https://static.wikia.nocookie.net/disney/images/b/ba/Ferb_Fletcher.png/revision/latest?cb=20111012151121&path-prefix=es' , 
        lugarNacimeinto: 'Area limitrofe', 
        tipo: 'Principal', 
    },
    {
        id: 13, 
        nombre: 'Përry el ornitorrinco',
        edad: 20, 
        imagen: 'https://imagenes.20minutos.es/files/article_amp/uploads/imagenes/2012/04/30/58312.jpg' , 
        lugarNacimeinto: 'Zoo', 
        tipo: 'Principal', 
    },
    {
        id: 14, 
        nombre: 'Rick Hunter',
        edad: 22, 
        imagen: 'https://pbs.twimg.com/profile_images/1322200378184732673/q-zMtKbd_400x400.jpg' , 
        lugarNacimeinto: 'Japon', 
        tipo: 'Principal', 
    },
    {
        id: 15, 
        nombre: 'Lynn Minmay',
        edad: 22, 
        imagen: 'https://lastfm.freetls.fastly.net/i/u/ar0/1c16ee3881294560a7d12cc93f8e0756.jpg' , 
        lugarNacimeinto: 'Japon', 
        tipo: 'Principal', 
    },
    {
        id: 16, 
        nombre: 'Goku',
        edad: 40, 
        imagen: 'https://elcomercio.pe/resizer/pfVziOV4X8Vu9nwknDc-oNItlB8=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6Y2EDIISGFGVFANEVDCR5LCG34.jpg' , 
        lugarNacimeinto: 'Vegita', 
        tipo: 'Principal', 
    },
    {
        id: 17, 
        nombre: 'Vegeta',
        edad: 45, 
        imagen: 'https://depor.com/resizer/gy2QMnLgzFuQeenloFp4FO2GZMk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/EZUULO3CDNESBLCGA65W3KWPZY.jpg' , 
        lugarNacimeinto: 'Vegita', 
        tipo: 'Principal', 
    },
    {
        id: 18, 
        nombre: 'Gohan',
        edad: 10, 
        imagen: 'https://i.pinimg.com/originals/f0/9d/3e/f09d3e9a4976e5236d75df7f06d0c0cf.jpg' , 
        lugarNacimeinto: 'Tierra', 
        tipo: 'Principal', 
    },
    {
        id: 19, 
        nombre: 'Freezer',
        edad: 70, 
        imagen: 'https://depor.com/resizer/PXJJwQpK-CuCBkSiefW_lYnXBpQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3U6GVK55SREF5G7J6EUXQR2DNI.jpg' , 
        lugarNacimeinto: 'Coola', 
        tipo: 'Principal', 
    },
    {
        id: 20, 
        nombre: 'Bulma',
        edad: 30, 
        imagen: 'https://w0.peakpx.com/wallpaper/869/624/HD-wallpaper-bulma-dragon-ball-anime.jpg' , 
        lugarNacimeinto: 'Tierra', 
        tipo: 'Secundario', 
    },
    {
        id: 21, 
        nombre: 'Picolo',
        edad: 120, 
        imagen: 'https://pbs.twimg.com/profile_images/1009080165618585601/jOsrWT2g_400x400.jpg' , 
        lugarNacimeinto: 'Namekusei', 
        tipo: 'Principal', 
    },
    {
        id: 22, 
        nombre: 'Homero',
        edad: 45, 
        imagen: 'https://phantom-marca.unidadeditorial.es/0509cbd44e41f4ffdb98fc8b9867bfe0/resize/1320/f/jpg/assets/multimedia/imagenes/2021/05/12/16208494355539.jpg' , 
        lugarNacimeinto: 'Springfield', 
        tipo: 'Principal', 
    },
    {
        id: 23, 
        nombre: 'Marge',
        edad: 43, 
        imagen: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/marge-simpson-1569921773.jpg?crop=1xw:1xh;center,top&resize=1200:*' , 
        lugarNacimeinto: 'Springfield', 
        tipo: 'Principal', 
    },
    {
        id: 24, 
        nombre: 'Bart',
        edad: 10, 
        imagen: 'https://www.fayerwayer.com/resizer/i9d0XM3xKd4cSfDyUvH9_rK5C3I=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/BK22GQ32HVBHTE4H3BXHZILSOE.jpg' , 
        lugarNacimeinto: 'Springfield', 
        tipo: 'Principal', 
    },
    {
        id: 25, 
        nombre: 'Lisa',
        edad: 7, 
        imagen: 'http://assets.stickpng.com/images/5eb95c0917f3c600044a290b.png' , 
        lugarNacimeinto: 'Springfield', 
        tipo: 'Principal', 
    },
]

const mostrarPersonajes = () => {
    console.log("Lo primero en ejecutar");
    //var mostrar = document.getElementById("cards").innerHTML;
    document.getElementById("cards").innerHTML = '';
    personajes.forEach((personaje) => {
        const card = armarCard(personaje);
        // const card = `
        // <div class="card" style="width: 18rem;">
        //     <img src="${personaje.imagen}" class="card-img-top" alt="tpClase3.js">
        //     <div class="card-body">
        //       <h5 class="card-title">${personaje.nombre}</h5>
        //       <p class="card-text">${personaje.edad}</p>
        //       <p class="card-text">${personaje.lugarNacimeinto}</p>
        //       <p class="card-text">${personaje.lugarNacimeinto}</p>
        //     </div>
        // </div> `;
        
        document.getElementById("cards").insertAdjacentHTML('beforeend', card);
    }) 
  }

const armarCard = (personaje) => {
    const card = `
        <div class="card" style="width: 18rem;">
            <img src="${personaje.imagen}" class="card-img-top" alt="tpClase3.js">
            <div class="card-body">
              <h5 class="card-title">${personaje.nombre}</h5>
              <p class="card-text">id: ${personaje.id}</p>
              <p class="card-text">Edad:  ${personaje.edad}</p>
              <p class="card-text">Lugar de nac,: ${personaje.lugarNacimeinto}</p>
              <p class="card-text">Tipo personaje: ${personaje.tipo}</p>
            </div>
        </div> `;
        return card;
}


window.onload = mostrarPersonajes();


const searchById = () => {
    const id = parseInt(document.getElementById("id").value);
    const personaje = personajes.find(personaje => id === personaje.id);
    const card= armarCard(personaje);
    document.getElementById("cards").innerHTML = '';
    document.getElementById("cards").insertAdjacentHTML('beforeend', card);
}


const buscarPorTipo = () => {
    document.getElementById("cards").innerHTML = '';
    personajes.forEach((personaje) => {
        const tipo = document.getElementById("tipo").value;
        if (tipo === personaje.tipo){
            const card = armarCard(personaje);
            document.getElementById("cards").insertAdjacentHTML('beforeend', card);
        }
    })
}



/* 
const searchById = () => {
    const id = parseInt(document.getElementById('id').value);
    const personaje = personajes.find(personaje => personaje.id == id);
    const row = `<p>${personaje.nombre}</p>`;
    document.getElementById("row").innerHTML = '';
    document.getElementById("row").insertAdjacentHTML('beforeend', row);
    alert(personaje.nombre);
}

const primera = () => {
    console.log("me ejecuto cuando se carga la pagina");
    
    console.log(personajes);

    const names = personajes.map(personaje => personaje.nombre);
    console.log(names);

    const promedio = (personajes.reduce((valAnterior, valActual) => valAnterior + valActual.edad, 0))/personajes.length;
    console.log(promedio);

    const principales = personajes.filter(personaje => personaje.tipo === 'principal');
    console.log(principales);
}

window.onload = primera();

 */
