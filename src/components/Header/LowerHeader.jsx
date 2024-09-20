import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import classes from "./header.module.css";

const LowerHeader = () => {
    return (
      <div>
        <div className={classes.lower_container}>
          <div>
            <ul>
              <li>
                <GiHamburgerMenu />
                <p>All</p>
              </li>
              <li>Today's Deals</li>
              <li>Consumer Service</li>
              <li>Registry</li>
              <li>Gift Cards</li>
              <li>Sell</li>
            </ul>
          </div>

          <div className={classes.Gaming_container}>Shop the Gaming Store</div>
        </div>
      </div>
    );
};

export default LowerHeader;
