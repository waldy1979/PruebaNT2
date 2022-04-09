// let num1 = parseInt(prompt("Ingrese numero 1"));
// console.log(num1);
// let operador = prompt("Ingrese operacion a realizar");
// console.log(operador);
// let num2 = parseInt(prompt("Ingrese numero 2"));
// console.log(num2);

function cuenta(operador, num1, num2) {
    //debugger;
    let resultado = 0;
    switch(operador) {
        case '+':



          resultado = num1 + num2;
          alert("El resultado de la suma es: " + resultado);
          break;
        case "-":
          resultado = num1 - num2
          alert("El resultado de la resta es: " + resultado);
          break;
        case "*":
          resultado = num1 * num2
          alert("El resultado de la multiplicacion es: " + resultado);
          break;
        case "/":
            if (num2 != 0) {
                resultado = num1 / num2;
                alert("El resultado de la division es: " + resultado);
            } else {
                alert("Numero no valido");
            }      
          break;        
        default:
          break;   
      }

      
}

//cuenta(operador, num1, num2);

const usuarios = [
    {
        id: 1,
        user: "Martin",
        pass: "1234",
    },
    {
        id: 2,
        user: "Mariela",
        pass: "1234",
    }
];


const login = () => {
    console.log("Se ejecuta login");
    const username = document.getElementById("username").value;
    const pass = document.getElementById("pass").value;
    console.log(username, pass);

    
    //opcinn while
    // let i = 0;
    // let logged = false;
    // while (i < usuarios.length && logged === false){
    //     if (username === usuarios[i].user && pass === usuarios[i].pass){
    //         logged = true;
    //     } else {
    //         i++;
    //     }
    // }


    // opcion foreach
    // usuarios.foreach(usuarios => {
    //     usuarios.user === username && usuarios.pass === pass ? logged = true : null;
    // });
            
    //opcion find
    const logged = usuarios.find(usuario => usuario.user === username && usuario.pass === pass);
    
    logged ? console.log("Logueo exitoso!!!") : console.log("Usuario o pass erroneos")
};

