import { Link } from "react-router-dom"
import "./button.css"

const Button = ({ link , text }) =>{
    return(
        <Link to={link}>
            <li>
                <a> {/*hice un cambio importante aca */}
                {text}
                </a>
            </li>
        </Link>
    )
}


export default Button ;