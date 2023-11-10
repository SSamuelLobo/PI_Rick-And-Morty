const users = require("../Utils/users.js")


const login = ( req , res ) => {
    const { email , password} = req.query ;

    if(email && password) {
        const user = users.find((user) => user.email === email && user.password === password);
        if(user){
            return res.status(200).json({"access": true});//el"""esta raro
        }
        return res.status(404).json({"access": false})
    }
    return res.status(400).json({ error: 'Falta el email y/o la contraseña en la consulta.' });
}

module.exports = {
    login 
};

