import { useContext, useEffect } from 'react'
import { cartContext } from '../../context/cartContext'
import './NavBar.css'
import {Link, useLocation} from 'react-router-dom'
import cart from '/assets/cart.png'




export default function NavBar() {

    let location = useLocation()
    useEffect (() => {
        window.scrollTo()
    }, [location])

    return (
        <nav className='NavBar'>
            <ul className="nav-menu">
                <h2 className="logo">
                    <li>
                        <Link to="/">
                            <img src='/assets/calmer.png' alt="Logo" />
                        </Link>
                    </li>
                </h2>

                <li className="nav-item">
                    <Link className="nav-link" to="/books">BOOKS</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/menu">MENU</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/about">ABOUT US</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/contact">CONTACT</Link>
                </li>

                <li className="cart-widget">
                    <CartWidget/>
                </li>

            </ul>
        </nav>
    ) 
}

function CartWidget () {
    const {countItems} = useContext (cartContext)
    return (
    <Link to='/cart'>
        <img className='CartImg' src={cart} alt="carrito de compras" />
        <span>{countItems()}</span>
    </Link>
    )
}




