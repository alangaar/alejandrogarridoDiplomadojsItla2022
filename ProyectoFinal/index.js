const express = require('express')
const app = express()
const path = require('node:path');

// archivos estaticos
app.use(express.static('asset/'))


// rutas para HTML
app.get('/', function(request, response) { 
response.sendFile(path.join(__dirname, '/vistas/index.html'));
}) 

app.get('/tarjeta', function(request, response) { 
    response.sendFile(path.join(__dirname, '/vistas/tarjeta.html'));
})

app.get('/contacto', function(request, response) { 
    response.sendFile(path.join(__dirname, '/vistas/contacto.html'));
})

// asignacion el puerto en el que correra la app
app.listen(3000, function() {
    console.log('Servidor escuchando en el puerto 3000');
  });