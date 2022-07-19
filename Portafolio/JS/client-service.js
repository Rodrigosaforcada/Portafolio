/*const http = new XMLHttpRequest();

// Abrir http (método, url)

// CRUD     - Métodos HTTP
// Create   - POST
// Read     - GET
// Update   - PUT/PATCH
// Delete   - DELETE    

http.open("GET", "http://localhost:3000/perfil");

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);
    console.log(data);
}*/

//Fetch API
const listaClientes = () => {
    return fetch("http://localhost:3000/perfil").then((respuesta) => {
        return respuesta.json();
    });
};

listaClientes()
    .then((data) => {
        data.forEach((perfil) => {
            console.log(perfil.nombre + " " + perfil.apellido);
        });
    })
    .catch((error) => alert("Ocurrió un error: " + error));