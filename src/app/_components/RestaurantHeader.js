"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const RestaurantHeader = () => {
  const [details, setDetails] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data && pathName == "/restaurant/dashboard") {
      router.push("/restaurant");
    } else if (data && pathName == "/restaurant") {
      router.push("/restaurant/dashboard");
    } else {
      setDetails(JSON.parse(data));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("restaurantUser");
    router.push("/restaurant");
  };

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
        {details && details.name ? (
          <>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
            <li className="listItem">
              <Link className="link" href="/">
                Profile
              </Link>
            </li>
          </>
        ) : (
          <li className="listItem">
            <Link className="link" href="/">
              Login?SignUp
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantHeader;
