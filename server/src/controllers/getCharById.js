const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character';

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`);

        if (data.id) {
            const character = {
                id,
                name: data.name,
                status: data.status,
                origin: data.origin,
                image: data.image,
                gender: data.gender,
                species: data.species
            };

            return res.status(200).json(character);
        };

        return res.status(404).send('Not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


module.exports = {
    getCharById
};


























// const axios = require('axios');

// const getCharById = (res, id) => {
    //   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({ data }) => {
    //       const character = {
//         id,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         origin: data.origin,
//         image: data.image,
//         status: data.status
//     }
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify(character));
//     })
//     .catch((error) => {
    //       res.writeHead(500, { 'Content-Type': 'text/plain' });
    //       res.end(error.message);
//     });
// };

// module.exports = getCharById ;
// const getCharById = (req, res) => {
//     const { id } = req.params;

//     axios(`${URL}/${id}`)
//     .then(({ data }) => {
//         if (data.id) {
//             const character = {
//                 id,
//                 name: data.name,
//                 status: data.status,
//                 origin: data.origin,
//                 image: data.image,
//                 gender: data.gender,
//                 species: data.species
//             };

//             return res.status(200).json(character);
//         };

//         return res.status(404).send('Not found');
//     })
//     .catch((error) => {
//         return res.status(500).send(error.message);
//     });
// };


// module.exports = {
//     getCharById
// };