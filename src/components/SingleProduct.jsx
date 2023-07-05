// SingleProduct.jsx
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../redux-toolkit/CartSlice";

const SingleProduct = ({ prod }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(prod));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeToCart(prod));
  };

  return (
    <div className="products">
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹ {prod.price.substring(0, 3)}</span>
      </div>

      {cart.some((item) => item.id === prod.id) ? (
        <button className="add remove" onClick={handleRemoveFromCart}>
          Remove from Cart
        </button>
      ) : (
        <button className="add" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
