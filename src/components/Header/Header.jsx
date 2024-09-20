import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import logo from "../../assets/amazon logo.png";
import flag from "../../assets/US flag.png";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {
  const [{ basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={classes.fixed}>
      <div className={classes.header_container}>
        {/* logo section*/}
        <div className={classes.logo_container}>
          <Link to="/">
            <img src={logo} alt="amazon logo" />
          </Link>

          {/* delivery */}
          <div className={classes.delivery}>
            <span>
              {/* icon */}
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to </p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        {/* search section*/}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          {/* icon */}
          <IoSearch size={25} />
        </div>
        {/* other section*/}

        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img src={flag} alt="" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>

          {/* three components */}
          <Link to="/signin">
            <p>Hello, sign in</p>
            <span>Account & Lists</span>
          </Link>

          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          {/* cart */}
          <Link to="/cart" className={classes.cart}>
            {/* icon */}
            <BiCart size={35} />
            <span>{totalItem}</span>
            <p>Cart</p>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
};

export default Header;
