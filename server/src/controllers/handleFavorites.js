let myFavorites = []; // [1, 2, 3, 4] copia del servidor

const postFav = (req, res) => {
    const character = req.body;
    const characterRepeated = myFavorites.find((favorite) => {
        return favorite.id == character.id
    });

    if (!characterRepeated) myFavorites.push(character); // 4

    return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
    const { id } = req.params;

    myFavorites = myFavorites.filter((favorite) => {
        return favorite.id != id
    });

    return res.status(200).json(myFavorites);
};

module.exports = {
    postFav, deleteFav
};