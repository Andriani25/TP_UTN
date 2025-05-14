"use strict";
// TP, ACTIVIDAD 1
// b: Creo un UsuarioParcial solamente con nombre y email, comprobando que todos los datos quedan parcial
const UsuarioParcial = {
    nombre: 'Leandro',
    email: 'andriani.leandro25@gmail.com'
};
// c: Creo un UsuarioCompleto, primero haciendo uno de prueba para comprobar que realmente el tipo se genera con todos los datos en requerido
const UsuarioCompletoTest = {
    nombre: 'Leandro',
    email: 'andriani.leandro25@gmail.com'
};
const UsuarioCompleto = {
    nombre: 'Leandro',
    email: 'andriani.leandro25@gmail.com',
    telefono: 3815764161
};
// ACTIVIDAD 2
// a: Creo la funcion, especificando que la propiedad que tiene que ser enviada es de tipo Usuario de forma Required, y creo la lista de usuarios, asignandole que sea un array de usuarios
let userList = [];
const crearUsuario = function (user) {
    userList.push(user);
    console.log(userList);
    return userList;
};
crearUsuario(UsuarioCompleto);
