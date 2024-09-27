import { useContext, useEffect, useState } from "react";
import "./App.css";
import Routeing from "./Routeing";
import { DataContext } from "./components/DataProvider/DataProvider";
import { Type } from "./Utility/Action.type";
import { auth } from "./Utility/Firebase";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Routeing />
    </>
  );
}

export default App;
