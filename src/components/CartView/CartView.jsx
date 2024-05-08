import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
//import Button from "../Button/Button";
import "./CartView.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { createOrderWithStockUpdate } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

function CartContainer() {
  const { cart, removeItem, countTotalPrice, clear } = useContext(cartContext);
  const navigateTo = useNavigate();

  async function handleConfirm(userData) {
    const order = {
      items: cart,
      buyer: userData,
      date: new Date(),
      price: countTotalPrice(),
    };

    try {
      const id = await createOrderWithStockUpdate(order);
      console.log("respuesta", id);
      clear();

      // navigateTo(`/order-confirmation/${id}`);
      navigateTo(`/order-confirmation/${id}`, { state: { order } });

    } catch (error) {
      alert(error);
    }
  }

  const handleCancel = (itemId) => {
    removeItem(itemId, 1); 
};


  return (
    <>
      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="products_row" >
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="cartList_row_img">
                <img height={70} src={item.image} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>$ {item.price}</td>
              <td>{item.count}</td>
              <td className="cartList_row_button" >
                <button className="remove_button" onClick={() => handleCancel(item.id)}>
                  X
                </button>
              </td>
              <th>$ {(item.price * item.count).toFixed(2)}</th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cartList_detail">
        <h4>El total de tu compra es de $ {countTotalPrice()} </h4>
        <CheckoutForm onConfirm={handleConfirm} />
      </div>
    </>
  );
}

export default CartContainer;







