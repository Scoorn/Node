🚀 Servidor Web Node.js - Guía de Rutas
📋 Prerrequisitos
Node.js instalado

Postman o similar para testing

🏃 Cómo ejecutar
bash
node server.js
El servidor correrá en: http://localhost:3000

🌐 RUTAS DISPONIBLES
GET /
Descripción: Ruta principal

Respuesta: Mensaje informativo sobre método GET

PUT /
Descripción: Ruta principal con número aleatorio

Respuesta: JSON con mensaje y número aleatorio (1-10)

POST /
Descripción: Ruta principal para recibir data

Body: JSON opcional

Respuesta: Mensaje sobre método POST

DELETE /
Descripción: Secuencia Fibonacci incremental

Respuesta: JSON con número Fibonacci (incrementa con cada request)

POST /products
Descripción: Almacena productos en memoria

Body: JSON con datos del producto

Respuesta: Confirmación de guardado

GET /products
Descripción: Muestra todos los productos almacenados

Respuesta: JSON con array de productos

PUT /rutanueva
Descripción: Ruta que solo acepta PUT

Respuesta: Mensaje de confirmación

Otros métodos: Devuelve error 405

🧪 EXPERIMENTOS SUGERIDOS
Probar diferentes métodos HTTP en cada ruta

Enviar JSON variados a POST /products

Probar la secuencia Fibonacci con múltiples DELETE

Verificar manejo de errores con métodos no permitidos

📝 NOTAS
Los datos en /products se pierden al reiniciar el servidor

El contador Fibonacci es global y persiste mientras el servidor corre

Usa Postman para enviar JSON en el body de las requests
