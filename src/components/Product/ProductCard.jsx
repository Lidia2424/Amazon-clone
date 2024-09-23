import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import Rating from "@mui/material/Rating";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/Action.type";

const ProductCard = ({ product, flex, renderDesc,renderAdd }) => {
  const { image, title, id, rating, price, description } = product;
 
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  }
  return (
    <div
      className={`${classes.card_container}  ${classes.detail_product} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={`products/${id}`}
          className={`${classes.img_container}`}
        />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}> {description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />
          {/* count */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price */}
          <span className={classes.price}>
            <CurrencyFormat amount={price} />
          </span>
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
