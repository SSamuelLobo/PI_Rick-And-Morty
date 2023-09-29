import { useEffect, useState } from "react";
import  validate  from "./validation"
import "./validation.css"


const Form = ({login}) =>{

    const [ userData , setUserData ] = useState({
        email: "" ,
        password: ""
    })

    const [ errors , setErrors ] = useState({})

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value 
        })

        ;
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

        <form onSubmit={handleSubmit} >
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" name="email" value={userData.email} onChange={handleChange} className={errors.email && 'warning'} />
            {errors.email && <p className='danger'>{errors.email}</p>}
            

            <hr style = { { borderStyle : "none" } }/>

            <label htmlFor="password">Password</label>
            <br />
            <input type="text" name="password" value={userData.password} onChange={handleChange} className={errors.password && 'warning'}/>
            {errors.password && <p className='danger'>{errors.password}</p>}

            <hr style = { { borderStyle : "none" } }/>

            <button type="submit" >Submit</button>
            
        </form>
    )
}

export default Form ;