"use client";
import { useState } from "react";
import Login from "../_components/login";
import Signup from "../_components/singup";

const restaurant = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="container">
      <h1>restaurant Login/Signup page</h1>
      {login ? <Login /> : <Signup />}

      <button onClick={() => setLogin(!login)} className="buttonLink">
        {login
          ? "Don't have an Account? SignUp"
          : "Already have Account? Login"}
      </button>
    </div>
  );
};

export default restaurant;
