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
        <nav className='NavBar1'>
            <ul className="nav-menu1">
                <h2 className="logo1">
                    <li>
                        <Link to="/">
                            <img src='/assets/calmer.png' alt="Logo" />
                        </Link>
                    </li>
                </h2>

                <li className="nav-item1">
                    <Link className="nav-link1" to="/books">BOOKS</Link>
                </li>

                <li className="nav-item1">
                    <Link className="nav-link1" to="/menu">MENU</Link>
                </li>

                <li className="nav-item1">
                    <Link className="nav-link1" to="/about">ABOUT US</Link>
                </li>

                <li className="nav-item1">
                    <Link className="nav-link1" to="/contact">CONTACT</Link>
                </li>

                <li className="cart-widget1">
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
        <img className='CartImg1' src={cart} alt="carrito de compras" />
        <span>{countItems()}</span>
    </Link>
    )
}




