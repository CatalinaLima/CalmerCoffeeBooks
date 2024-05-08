import { useParams, useLocation } from "react-router-dom";
//import Flex from "../Flex/Flex";
import './OrderConfirm.css';
//import { cartContext } from "../../context/cartContext";
import { useEffect } from "react";

function OrderConfirm() {
  const { orderid } = useParams();
  const location = useLocation()
  const order = location.state?.order;

  useEffect(() => {
    // You can now access the order details in the order variable
    console.log("Order details:", order);
  }, [order]);

  return (
    <div>
        <div className="order">
          <div className="orderResume">
            <h1>GRACIAS POR TU COMPRA!</h1>
            <p>Este es tu comprobante de la orden: {orderid}</p>
            {/* Iterate over items in the order */}
            {order?.items.map((item) => (
              <div className="cardoc" key={item.id}>
                <img className="imgoc" src={item.image} alt="" />
                <p className="titleoc">{item.title}</p>
                <small className="smalloc">Cantidad: {item.count}</small>
                {/* Add any other information you want to display */}
              </div>
            ))}
          </div>
        </div>
        <div className="entrega">
          <h2 className="entrega2">NOS ESTAREMOS COMUNICANDO CONTIGO PARA LA ENTREGA!</h2>
        </div>
    </div>
  );
}

export default OrderConfirm;

