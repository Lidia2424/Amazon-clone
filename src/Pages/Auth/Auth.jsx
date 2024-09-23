import React, { useState } from "react";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/Firebase";
import{signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const authHandler = (e) => {
    e.preventDefault()
    if (e.target.name == "signin") {

      //firebase Auth
      signInWithEmailAndPassword(auth, email, password).then((userInfo) => {
       console.log(userInfo)
      }).catch((err) => {
       console.log(err)
     })
    }else{
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
        }).catch((err) => {
          console.log(err);
        });
}
  };
  return (
    <section className={classes.login}>
      {/* logo */}

      <Link>
        <img src="../../assets/amazon logo black1.png" />
      </Link>

      {/* Signin Form  */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>

        <form action="">
          <div>
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type={"submit"}
            onClick={authHandler}
            name="signin"
            className={classes.signInBtn}
          >
            Sign in
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          interest-Based Ads Notice
        </p>
        {/* Sign-Up Btn */}
        <button
          type={"submit"}
          onClick={authHandler}
          name="signup"
          className={classes.registerBtn}
        >
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
};

export default Auth;
