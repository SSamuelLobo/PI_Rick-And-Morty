import React, { useState, useEffect } from "react";
import perfil1 from "../../assets/perfil1.jpg";
import perfil2 from "../../assets/perfil2.jpg";
import perfil3 from "../../assets/perfil3.jpg";
import "./about.css"

const About = () =>{

    const [currentImage, setCurrentImage] = useState(0);
    const images = [perfil1, perfil2, perfil3];

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

    return (
        <div className="container-about">
            <h1 className="container-about__h1-About-me">About</h1>
            <div className="container-about__dates">
                <img className="container-about__img" src={images[currentImage]} alt="Samuel Lobo" width="350px" />
                <div className="container-about__dates__h3-p">
                    <h3 className="container-about__dates__h3-p__name">Samuel Lobo</h3>
                    <h3>Age: 21 años</h3>
                    <h3>From: Venezuela </h3>
                    <h3>Estudiante de Ingeniería Mecánica </h3>
                    <h3>Description:</h3>
                    <p className="container-about__dates__h3-p__description">Soy una persona aventurera apasionada por la programacion y la creacion de nuevas soluciones,
                    dispuesto aprender nuevas cosas y explorar nuevos horizontes</p>
                </div>
            </div>
            <div className="bandera">
                <div className="amarillo"></div>
                <div className="estrellas">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                    <div className="four"></div>
                    <div className="five"></div>
                    <div className="six"></div>
                    <div className="seven"></div>
                    <div className="eight"></div>
                </div>
                
                <div className="azul"></div>
                <div className="rojo"></div>
            </div>
        </div>
    )
}

export default About;