<<<<<<< HEAD
const express = require('express')
const app = express()
const path = require('node:path');

//agregar archivos estaticos
app.use(express.static('asset'))

// rutas
// 1 - index
// 2 - usuarios
// Metodos HTTP: GET, POST, PUT, PATCH y DELETE(hay mas pero estos son los mas usados)

//funcion de respuesta
function respuesta(request, response){
    response.send('Hola Mundo, estoy probando el index.js con express!!!')
}
// aqui se pasa la funcion como parametro por lo que se omite al final los parentesis de la misma
// aqui se crea la tuta en nuestro servidor web
app.get('/', respuesta)
// crear una ruta que retorna un HTML
app.get('/index', function(request, response) { 
response.sendFile(path.join(__dirname, '/vistas/index.html'));
})

app.get('/tarjeta', function(request, response) { 
    response.sendFile(path.join(__dirname, '/vistas/tarjeta.html'));
})
// asignar el puerto en el que correra la app
app.listen('3000')
=======
const express = require('express')
const app = express()
const path = require('node:path');

//agregar archivos estaticos
app.use(express.static('asset'))

// rutas
// 1 - index
// 2 - usuarios
// Metodos HTTP: GET, POST, PUT, PATCH y DELETE(hay mas pero estos son los mas usados)

//funcion de respuesta
function respuesta(request, response){
    response.send('Hola Mundo, estoy probando el index.js con express!!!')
}
// aqui se pasa la funcion como parametro por lo que se omite al final los parentesis de la misma
// aqui se crea la tuta en nuestro servidor web
app.get('/', respuesta)
// crear una ruta que retorna un HTML
app.get('/index', function(request, response) { 
response.sendFile(path.join(__dirname, '/vistas/index.html'));
})

app.get('/tarjeta', function(request, response) { 
    response.sendFile(path.join(__dirname, '/vistas/tarjeta.html'));
})
// asignar el puerto en el que correra la app
app.listen('3000')
>>>>>>> 44ecd98002ff20feaf92dcbf2dbed882697ee66a
