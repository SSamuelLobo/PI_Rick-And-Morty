const { User } = require("../DB_connection")


const login = async ( req , res ) => {
    const { email , password} = req.query ;

    if( !email || !password ) return res.status(400).send("Faltan Datos")

    const user = await User.findOne({where: { email: email }});

    if(!user) return res.status(404).send("Usuario no Encontrado")

    return user.password === password
    ? res.status(200).json({access: true})
    : res.status(403).send("Contraseña incorrect");
}



const createUser = async ( req , res ) => {
    const { email , password} = req.body ;

    const user = await User.findOrCreate({
        where: {email:email, password:password},
    });
        
    return res.status(200).json(user)
}

module.exports = {
    login,
    createUser
};














// const users = require("../Utils/users.js")


// const login = ( req , res ) => {
//     const { email , password} = req.query ;

//     if(email && password) {
//         const user = users.find((user) => user.email === email && user.password === password);
//         if(user){
//             return res.status(200).json({"access": true});//el"""esta raro
//         }
//         return res.status(404).json({"access": false})
//     }
//     return res.status(400).json({ error: 'Falta el email y/o la contraseña en la consulta.' });
// }

// module.exports = {
//     login 
// };

