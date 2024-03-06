import Link from "next/link";
import React from "react";

const RestaurantHeader = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          style={{ width: 60 }}
          src="https://img.freepik.com/free-vector/gradient-restaurant-logo-design_23-2151257032.jpg?w=740&t=st=1709711088~exp=1709711688~hmac=bc26d9854b2f747355cecec62a099fddcb2b75bed45679cdd29644f5a84886bb"
        />
      </div>
      <h2 style={{ marginLeft: "10px" }}>My Resto</h2>
      <ul className="list">
        <li>
          <Link className="link" href="/">
            Home
          </Link>
        </li>
        <li className="listItem">
          <Link className="link" href="/">
            Login?SignUp
          </Link>
        </li>
        <li className="listItem">
          <Link className="link" href="/">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantHeader;
