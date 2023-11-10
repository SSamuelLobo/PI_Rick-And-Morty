const validate = ( userData ) =>{

    const errors = {}

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (userData.email==="") {
        errors.email = "El email no puede estar vacío.";

      } else if (userData.email.length > 35) {
        errors.email = "El email no puede tener más de 35 caracteres.";

      } else if (!emailRegex.test(userData.email)) {
        errors.email = "No es un email valido.";
      }

    const passwordRegex = /^.{6,10}$/;
    const passwordRegexnumber = /^(?=.*\d).{6,10}$/;

    if (!userData.password) {
        errors.password =  "La contraseña no puede estar vacía.";

      } else if (!passwordRegex.test(userData.password)) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres ";

      } else if (!passwordRegexnumber.test(userData.password)) {
        errors.password = "La contraseña debe tener al menos un número.";
      }
      
    return errors;
}


export default validate ;