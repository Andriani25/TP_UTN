TRABAJO PRÁCTICO CURSO UTN

¨Dejaré las credenciales subidas al github de Firestore, ya que vi tarde que es necesario realizar el trabajo práctico con MongoDB, y para evitar
problemas a la hora de evaluar.¨

1 - Para dar comienzo, asegurarse de estar posicionado dentro de la carpeta TP_UTN
2 - Utilizar el comando npm i para instalar todas las dependencias necesarias
3 - Lanzar el servidor con npm run dev, por defecto escuchará a http://localhost:3000
4 - Todas las rutas de los juegos estan protegidas por el middleware de auth, por lo cual necesita un token para acceder. Para conseguir uno deberán:
a: Crear un nuevo usuario ingresando a la ruta post http://localhost:3000/newUser con el siguiente formato de json en el body:

{
"userData": {
"name": X,
"email": X,
"cellPhone": X,
"password": X
}
}

b: Loguearse en ese usuario para recibir el token, ingresando a la ruta post http://localhost:3000/login con el siguiente formato de json en el body:

{
"userData": {
"email": X,
"password": X
}
}

Si todo coincide, les llegará la respuesta con el token, recuerden copiar el token sin las comillas ""

5 - Ahora que tienen su token, pueden utilizar las rutas de games, las cuales son:

a: Nuevo juego: POST http://localhost:3000/newGame
b: Eliminar juego: DELETE http://localhost:3000/deleteGame
c: Modificar datos del juego: PATCH http://localhost:3000/modifyGame
d: Obtener un juego: GET http://localhost:3000/Game/:name
e: Obtener una lista de juegos: GET http://localhost:3000/getAllGames

Formatos de JSON para interactuar:

a:
{
gameData:{
name: string,
genere: string,
developers: string,
rating: number
}
}

b:
{
gameName: name
}

c: Aqui pueden poner, o no, el total de valores. Lo que ustedes coloquen sera modificado
{
values:{
name: string,
genere: string,
developers: string,
rating: number
}
}

d: cambiar en la url el :name por el nombre del juego que quieren obtener, no es necesario un json al ser get.

e: Con la url y el token es suficiente, al ser get no necesita json.
