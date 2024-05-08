import Button from "../Button/Button"
import ItemCount from "../ItemCount/ItemCount"
import './Item.css'
import { useState } from "react";
import {Link} from 'react-router-dom'

function CardDescription ({price, category, discount}) {
    const classNamePrice = discount > 25 ? "item-card_price-tag_offer" :  "item-card_price-tag"
    //npm classNames
    return(
        <div className="item-card_detail">
            {/* {discount && <small>Descuento: {discount} % </small>} */}
            <h4 className= {classNamePrice} >${price}</h4>
            <small>{category}</small>
        </div>
    )
}

function Item ({title, image, price, category, color, id, discount, stock}) {

    const stylesButton = {
        backgroundColor: stock ===0 ? 'red' : 'inherit'
    }

    return(
    //id dinamico
    <Link to = {`/product/${id}`} > 
        <div className="item-card">
            <div className="item-card_img">
                <img src={image} alt="imagen"></img>
            </div>
            <div className="item-card_header">
                <h2 className="item_title">{title}</h2>
                {/* <small>{category}</small> */}
            </div>
            <CardDescription discount={discount} price={price}/>
            {/* <ItemCount stock = {5} /> */}
        </div>
    </Link>
)}

export default Item 