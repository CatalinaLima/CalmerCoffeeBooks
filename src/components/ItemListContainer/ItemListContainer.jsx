import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import {getCategoryData, getData} from '../../services/firebase'
import ItemListSearch from "./ItemListSearch"
import './ItemListContainer.css'
import Categories from "./Categories"




function ItemListContainer () {
    let [isLoading, setIsLoading] = useState (true)
    let [products, setProducts] = useState ([]);
    const {categoryid} = useParams()
    
    //Aca diferenciamos si lo que pedimos es con categoria o solo datos

    const fechData = categoryid === undefined? getData : getCategoryData 

    useEffect( () => {
        fechData(categoryid)
            .then((respuesta) => setProducts(respuesta))
            .finally(() => {
                setIsLoading(false)
            })
        }, [categoryid]) //agregar la otra variable parfa el efecto : category

    return (
        <div>
            <Categories/>
            <ItemListSearch isLoading={isLoading} products={products} />
        </div>
    )
}

export default ItemListContainer