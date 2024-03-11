"use client";
import { useState } from "react";
import Login from "../_components/login";
import Signup from "../_components/singup";
import RestaurantHeader from "../_components/RestaurantHeader";
import "./style.css";
import Footer from "../_components/Footer";
const restaurant = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="mainContainer">
      <RestaurantHeader />
      <div className="container">
        <h1>restaurant Login/Signup page</h1>
        {login ? <Login /> : <Signup />}

        <button onClick={() => setLogin(!login)} className="buttonLink">
          {login
            ? "Don't have an Account? SignUp"
            : "Already have Account? Login"}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default restaurant;
