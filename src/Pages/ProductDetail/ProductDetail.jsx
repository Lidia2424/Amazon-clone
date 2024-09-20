import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayOut from "../../components/LayOut/LayOut";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : product ? (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      ) : (
        <p>Product not found</p>
      )}
    </LayOut>
  );
};

export default ProductDetail;
