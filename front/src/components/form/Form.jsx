import { useEffect, useState } from "react";
import  validate  from "./validation"
import "./validation.css"
import "./form.css"


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

                <h1 className="form-titulo">Rick and Morty</h1>

                <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-palabras">Login</h2>
                <label htmlFor="email" className="form-palabras">Email</label>
                <br />
                <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInPutChange}
                className={errors.email && "warning"}
                />
                {errors.email && <p className="danger">{errors.email}</p>}

                <hr style={{ borderStyle: "none" }} />
                <hr style={{ borderStyle: "none" }} />
  
                <label htmlFor="password" className="form-palabras">Password</label>
                <br />
                <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInPutChange}
                className={errors.password && "warning"}
                />
                {errors.password && <p className="danger">{errors.password}</p>}
  
                <hr style={{ borderStyle: "none" }} />
                <hr style={{ borderStyle: "none" }} />
  
                <button type="submit">Submit</button>

                </form>  

            </div>
    )
}

export default Form ;