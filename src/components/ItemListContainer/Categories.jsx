import './Categories.css'
import {NavLink} from 'react-router-dom'


export default function Categories() {


    return (
        <nav className="categories">
            <ul className="nav-menu-cat">
                <li className="nav-item-cat">
                    <NavLink className="nav-link-cat" to="/category/ficcion">
                        Ficcion
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link-cat" to="/category/cienciaficcion">
                        Ciencia Ficcion
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link-cat" to="/category/romance">
                        Romance
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link-cat" to="/category/drama">
                        Drama
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link-cat" to="/category/clasico">
                        Clasico
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link-cat" to="/category/fantasia">
                        Fantasia
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link-cat" to="/category/historia">
                        Historia
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link-cat" to="/category/home">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link-cat" to="/category/espiritualidad">
                        Espitirualidad
                    </NavLink>
                </li>
            </ul>
        </nav>
        );
    }