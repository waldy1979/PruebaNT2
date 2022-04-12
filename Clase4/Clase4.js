let pages = null;
const start = async (url = 'https://rickandmortyapi.com/api/character') => {
    try{
        const response = await fetch(url);
        const {info, results} = await response.json();
        pages = {next : info.next, prev : info.prev};
        console.log(results);
        document.getElementById("cards").innerHTML = '';
        results.forEach((character) => {
            mostrarCaja(character);
        // const card = `
        //     <div class = "col-4 mt-4">
        //     <div class="card" style="width: 18rem;">
        //     <img src="${character.image}" class="card-img-top" alt="...">
        //     <div class="card-body">
        //       <h5 class="card-title">${character.name}</h5>
        //       <p class="card-text">Origen : ${character.origin.name}.</p>
        //       <p class="card-text">Estado : ${character.status}.</p>
        //       <p class="card-text">Especie : ${character.species}.</p>
        //     </div>
        //     </div>
        //     </div>`;
        // document.getElementById('cards').insertAdjacentHTML('beforeend', card);
        })
        document.getElementById('prev').disabled = !pages.prev;
        document.getElementById('next').disabled = !pages.next;
    }
    catch(err){
        console.error(err);
    }
}

const buscarPorEstado = async () => {
    try {
        const select = document.getElementById('estado');
        const status = select.options[select.selectedIndex].text;
        const response = await fetch(`https://rickandmortyapi.com/api/character?status=${status}`);
        const {info, results} = await response.json();
        document.getElementById("cards").innerHTML = '';
        results.forEach((character) => {
            mostrarCaja(character);
        })
    } catch(err){
        console.error(err);
    }
    // const select = document.getElementById('estado');
    // const estado = select.options[select.selectedIndex].text;
    // document.getElementById("cards").innerHTML = '';
    // results.forEach((character) => {
    //     if (estado == character.estado){
    //         mostrarCaja(character);
    //     }
    // })   
}


const searchByName = async () => {
    try {
        const name = document.getElementById('name').value;
        const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`);
        const {info, results} = await response.json();
        document.getElementById("cards").innerHTML = '';
        results.forEach((character) => {
            mostrarCaja(character);
        })
    } catch(err){
        console.error(err);
    }

}

const mostrarCaja = (character) => {
    const card = `
        <div class = "col-4 mt-4">
            <div class="card" style="width: 18rem;">
            <img src="${character.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">Origen : ${character.origin.name}.</p>
                <p class="card-text">Estado : ${character.status}.</p>
                <p class="card-text">Especie : ${character.species}.</p>
                </div>
            </div>
        </div>`;
    document.getElementById('cards').insertAdjacentHTML('beforeend', card);
}

const prevv = () => {
    start(pages.prev);
}
 
const nextt = () => {
    start(pages.next);
}

window.onload = start();
