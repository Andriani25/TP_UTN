/*

TP Viejo, lo dejo aca por si necesito hacerlo despues en otro momento:

// TP, ACTIVIDAD 1

// a: Creo la interfaz con nombre, email con el tipo string y el telefono con el tipo number. Agregremos una id unica elegida por el usuario. Para la id haremos una función de números random
// junto a una lista de numeros utilizados. Obviamente no es una forma correcta de guardar ni almacenar informacion de usuarios pero esto sirve con los fines de poner en practica lo aprendido con Typescript

let arrayIds: number[] = []

function randomNumber(){

let randomNum = Math.floor((Math.random() * 100) + 1) // Esta funcion dara un numero entre 1-100

let findMatch = arrayIds.find((e: number) => e === randomNum)

if(findMatch){
    
    let anotherNumber = 

}

arrayIds.push(randomNum)

return randomNum

}

interface Usuario {
    nombre: string,
    email: string,
    telefono: number
    id: string
}

// b: Creo un UsuarioParcial solamente con nombre y email, comprobando que todos los datos quedan parcial

const UsuarioParcial: Partial<Usuario> = {
    nombre: 'Leandro',
    email: 'andriani.leandro25@gmail.com'
}

// c: Creo un UsuarioCompleto, primero haciendo uno de prueba para comprobar que realmente el tipo se genera con todos los datos en requerido

const UsuarioCompletoTest: Required<Usuario> = {
    nombre: 'Leandro',
    email: 'andriani.leandro25@gmail.com'
}

const UsuarioCompleto: Required<Usuario> = {
    nombre: 'Leandro',
    email: 'andriani.leandro25@gmail.com',
    telefono: 3815764161
    id: 
}

// ACTIVIDAD 2

// a: Creo la funcion, especificando que la propiedad que tiene que ser enviada es de tipo Usuario de forma Required, y creo la lista de usuarios, asignandole que sea un array de usuarios

let userList: Required<Usuario[]> = []

const crearUsuario = function(user: Required<Usuario>) {

 

userList.push(user)

console.log(userList)

return userList

}

crearUsuario(UsuarioCompleto)

// b: Utilizaremos el mail como ID, aunque debería tener otra propiedad. Pero para mantener la estructura anteriormente requerida en el punto 1A
// lo haremos de esa forma. EL mail al ser personal no debería causar problemas.

const actualizarUsuario = function (emailProp: string, key: string, newValue: string) {

  const findUser = userList.find((e: Usuario) => (e .email=== emailProp))

  if(!findUser){
    return console.log("No user matched!")
  }

  key === "telefono" ? {

  

  }



}

*/