const { Favorite } = require("../DB_connection")


const postFav = async (req, res) => {
    const { name , origin , status , image , species , gender } = req.body;


    if( !name || !origin || !status || !image || !species || !gender ) return res.status(400).send("Faltan Datos")

    await Favorite.findOrCreate({
        where: {name , origin , status , image , species , gender},
    })

    const myFavorites = await Favorite.findAll();

    return res.status(200).json(myFavorites);
};


// const postFav = (req, res) => {
//     const character = req.body;
//     const characterRepeated = myFavorites.find((favorite) => {
//         return favorite.id == character.id
//     });

//     if (!characterRepeated) myFavorites.push(character); // 4

//     return res.status(200).json(myFavorites);
// };


const deleteFav = async (req, res) => {
    const { id } = req.params;
    await Favorite.destroy({where: {id: id}});

    const myFavorites = await Favorite.findAll();

    return res.status(200).json(myFavorites);
};

// const deleteFav = (req, res) => {
//     const { id } = req.params;

//     myFavorites = myFavorites.filter((favorite) => {
//         return favorite.id != id
//     });

//     return res.status(200).json(myFavorites);
// };

const deleteAllFav = (req, res) => {
    myFavorites.splice(0, myFavorites.length);
    return res.status(200).json(null);
};

module.exports = {
    postFav, deleteFav , deleteAllFav
};