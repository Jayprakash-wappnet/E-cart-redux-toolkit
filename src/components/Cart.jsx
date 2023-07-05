// Cart.js
import { useSelector } from "react-redux";
import SingleProduct from "./SingleProduct";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const total = cart.reduce((acc, curr) => acc + Number(curr.price), 0);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: {total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
