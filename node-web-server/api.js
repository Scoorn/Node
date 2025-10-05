let contador = 0;
let Experimentando = []; 
import { request } from 'http';
import { parser } from './parser.js';
export const home = async (request, response) => {

	
if (request.method === "GET"){
response.write("Es el metodo mas comun en los navegadores para solicitar o recuperar informacion");
response.end();
}

if(request.method === "PUT"){
    const numAleatorio = Math.floor(Math.random() * 10) + 1;
    response.write(JSON.stringify({"Es un metodo que se utiliza para actualizar o remplazar informacion":"\n Numero aleatorio ", numAleatorio}));
    response.end();
   
}
if(request.method === "POST"){
    let data = await parser(request);
    console.log(data)
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write("Es un metodo enviar informacion y tipicamente crear un nuevo recurso");
    response.end();
}
  
if (request.method === "DELETE") {
        function fibonacci(n) {
            if (n <= 1) return n;
            let a = 0, b = 1, temp;
            for (let i = 2; i <= n; i++) {
                temp = a + b;
                a = b;
                b = temp;
            }
            return b;
        }
        let resultado = fibonacci(contador);
        contador = contador + 1;

        response.write(JSON.stringify({
            "mensaje": "Este metodo para eliminar algun recurso en especifico",
            "numero_fibonacci": resultado}));
        response.end();
    }
}
export const products = async (request, response) => {
	if(request.method === "POST"){
    let data = await parser(request);
    
  
    Experimentando.push({
        id: Date.now(), 
        datos: data,
        fecha: new Date().toISOString()
    });
    
    response.write(JSON.stringify({
        mensaje: "Datos guardados exitosamente",
        totalGuardados: Experimentando.length,
        ultimoGuardado: data
    }));
    response.end();
}

if(request.method === "GET" ){
    response.write(JSON.stringify({
        cantidad: Experimentando.length,
        datos: Experimentando
    }));
    response.end();
}
}
	
export const rutanueva = async(request, response)=>{
    if(request.method === "PUT"){
        response.write("Ultimo paso aceptar metodos especificos");
        response.end();
    }
    else{

		response.writeHead(405); 
		response.end('METODO NO ENCONTRADO'); 
	
    }
}