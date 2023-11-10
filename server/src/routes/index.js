/* controllers */
const { login } = require('../controllers/login');
const { getCharById } = require('../controllers/getCharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites');

/* express config */
const express = require('express');
const router = express.Router();


/* routes */
router.get('/character/:id', getCharById);

router.get('/login', login);

router.post('/fav', postFav);

router.delete('/fav/:id', deleteFav);


module.exports = {
    router
};




// const express = require('express');
// const router = express.Router();
// const getCharById = require('../controllers/getCharById');
// const login = require('../controllers/login');
// const { postFav, deleteFav } = require('../controllers/handleFavorites');

// // Rutas
// router.get('/character/:id', getCharById);
// router.get('/login', login);
// router.post('/fav', postFav);
// router.delete('/fav/:id', deleteFav);

// module.exports = router;
