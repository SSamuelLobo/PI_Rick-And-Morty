/* server config */
const { server } = require('./app');
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});















// const http = require("http");
// const getCharById = require("./controllers/getCharById")

// http.createServer((request, response) => {
//   response.setHeader('Access-Control-Allow-Origin', '*');

//   if (request.url.includes("/rickandmorty/character/")) {
//     const parts = request.url.split('/');
//     const id = parseInt(parts[parts.length - 1]);
//     getCharById(response, id);
//   }
// }).listen(3001);