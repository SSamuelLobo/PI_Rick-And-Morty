import React from "react";
import perfil from "../../assets/perfil.jpg"

const About = () =>{
    return (
        <div>
            <img src= {perfil} alt="Samuel Lobo" width="300px" />
            <h3>Nombre: Samuel Lobo</h3>
            <h3>Edad: 21 años</h3>
            <h3>Localidad: Venezuela; Bolivar-Puerto Ordaz</h3>
            <h3>Carrera: Estudiante de Ingeniería Mecanica </h3>
            <h3>Descripción:</h3>
            <p>Soy una persona aventurera apasionada por la programacion y la creacion de nuevas soluciones,
                dispuesto aprender nuevas cosas y explorar nuevos horizontes</p>
        </div>
    )
}

export default About;