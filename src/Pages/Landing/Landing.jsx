import React from "react";
import Category from "../../components/Category/category";
import Product from "../../components/Product/Product";
import LayOut from "../../components/LayOut/LayOut";
import CarouselEffect from"../../components/Carousel/CarouselEffect";

const Landing = () => {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
    </LayOut>
  );
};

export default Landing;
