import React from "react";
import { useSelector } from "react-redux";
import faker from "faker";
import SingleProduct from "./SingleProduct";

faker.seed(100);

const productArray = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price()
}));

const Home = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="productContainer">
      {productArray.map((prod) => (
        <SingleProduct key={prod.id} prod={prod} cart={cart} />
      ))}
    </div>
  );
};

export default Home;
