import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { db } from "../../Utility/Firebase";
import { DataContext } from "../../components/DataProvider/DataProvider";
import classes from "./orders.module.css";
import ProductCard from "../../components/Product/ProductCard";
const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  });
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders</h2>
          {/* If no orders are found, display a message */}
          {orders?.length === 0 && (
            <div style={{padding:"20Px"}}>
              <p>You don't have any orders yet.</p>
            </div>
          )}
          {/* ordered items  */}

          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID:{eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    return (
                      <ProductCard flex={true} product={order} key={order.id} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
};

export default Orders;
