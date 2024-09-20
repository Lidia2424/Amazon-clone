import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";
import Loader from "../Loader/Loader";

const Product = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);

        console.log(err);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.products_container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard
                product={singleProduct}
                key={singleProduct.id}
                renderAdd={true}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Product;
