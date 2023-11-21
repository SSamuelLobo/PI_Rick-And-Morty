import { useEffect, useState } from "react";
import  validate  from "./validation"
import "./validation.css"
import "./form.css"

/*Image */
import portada from "../../assets/portada.jpg";
import FondoAbout from "../../assets/FondoAbout.jpg";


const Form = ({login}) =>{

    const [ userData , setUserData ] = useState({
        email: "" ,
        password: ""
    })

    const [ errors , setErrors ] = useState({})

    const handleInPutChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value 
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    useEffect(() =>{
        if(userData.email !=="" || userData.password !== ""){
            const userValidated = validate(userData) //se ejecuta mientras que observa como va cambiando la funcion
            setErrors(userValidated)
        }

    }, [userData])


    
    return (
        
        <div className="form-container">

{/* ------------------------------------------------imagenes de fondo---------------------------------------------------------------- */}
            <img className="form-container__portada" src={portada} alt="RickAndMorty"/>
            <img className="form-container__FondoAbout" src={FondoAbout} alt="Ladrillos Negros"/>


{/* -----------------------------------------------------------Titulo---------------------------------------------------------------- */}
            <h1 className="form-container__h1">Rick and Morty</h1>



{/* -----------------------------------------------------------FORM---------------------------------------------------------------- */}
            <form className="form-container__form" onSubmit={handleSubmit}>
                <h2 className="form-container__form__h2">Login</h2>


{/* -----------------------------------------------------------email---------------------------------------------------------------- */}
                    <div className="form-container__form__container-email">

                        <input
                        required
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInPutChange}
                        className={errors.email && "warning"}
                        autoComplete="off" 
                        />
                        

                        <label htmlFor="email" className="form-container__form__container-email__label">
                            <span className="form-container__form__container-email__label__span">Email</span> 
                        </label>


                    </div>

                    {errors.email && <p className="danger">{errors.email}</p>}
                        

            <hr style={{ borderStyle: "none" }} />
            <hr style={{ borderStyle: "none" }} />


{/* -----------------------------------------------------------Password---------------------------------------------------------------- */}
                    <div className="form-container__form__container-password">

                        <input
                        required
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInPutChange}
                        className={errors.password && "warning"}
                        />


                        <label htmlFor="password" className="form-container__form__container-password__label">
                            <span className="form-container__form__container-password__label__span">Password</span>
                        </label>

                    </div>

                    {errors.password && <p className="danger">{errors.password}</p>}
                    

            <hr style={{ borderStyle: "none" }} />
            <hr style={{ borderStyle: "none" }} />


{/* -----------------------------------------------------------Boton de Envio---------------------------------------------------------------- */}
        <button className="form-container__form__button" type="submit" disabled={Object.keys(errors).length > 0}>Submit</button>

        </form>  

    </div>
    )
}

export default Form ;