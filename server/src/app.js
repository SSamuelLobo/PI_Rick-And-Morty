/* server config */
const express = require('express');
const server = express();


/* routers */
const { router } = require('./routes/index');

/* middlewares */
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});
server.use(express.json());
/* Este middleware agrega a todas las rutas dentro del router '/rickandmorty'. Entonces, por ejemplo: si tengo una ruta en el router que es tipo GET y dije que se llama '/login', con este middleware ahora pasa a llamarse: '/rickandmorty/login */
server.use('/rickandmorty', router);

module.exports = {
    server
}