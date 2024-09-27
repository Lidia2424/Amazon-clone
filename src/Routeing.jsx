import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Auth from "./Pages/Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRout from "./components/ProtectedRout/ProtectedRout";

const Routeing = () => {
  const stripePromise = loadStripe(
    "pk_test_51Q22OhB9y2FMx9aWvv0YXf9zbUQDeaKw9qgLYa1kE1xdtkrQ5fKGelfKujzL1Fm0jiZ2uxKlhXkv64MIRCTwKyAs003D9ZLNS3"
  );
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route
          path="/payment"
          element={
            <ProtectedRout msg={"You must log in to pay"} redirect={"/payment"}>
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRout>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <ProtectedRout
              msg={"You must log in to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRout>
          }
        ></Route>

        <Route path="/category/:categoryName" element={<Results />}></Route>
        <Route path="/products/:productId" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
};

export default Routeing;
