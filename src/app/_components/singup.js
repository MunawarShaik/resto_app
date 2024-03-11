import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const router = useRouter();
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setPasswordError(true);
      return false;
    } else {
      setPasswordError(false);
    }
    if (
      !email ||
      !password ||
      !confirmPassword ||
      !name ||
      !city ||
      !address ||
      !contact
    ) {
      setError(true);
      return false;
    } else {
      setError(false);
    }

    // console.log(email, password, confirmPassword, name, city, address, contact);
    let response = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({ email, password, name, city, address, contact }),
    });
    response = await response.json();
    console.log("before if block", response);
    if (response.success) {
      console.log("in If Block", response);
      const { result } = response;
      console.log("Result", result);
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      router.push("/restaurant/dashboard");
    }
  };
  return (
    <>
      <h1>SignUp</h1>
      <div>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Enter email id"
            className="inputField"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && !email && <span className="inputError">Enter email</span>}
        </div>
        <div className="inputWrapper">
          <input
            type="password"
            className="inputField"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <span className="inputError">
              password and confirm password not match!
            </span>
          )}
          {error && !password && (
            <span className="inputError">Enter password</span>
          )}
        </div>
        <div className="inputWrapper">
          <input
            type="password"
            className="inputField"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {passwordError && (
            <span className="inputError">
              password and confirm password not match!
            </span>
          )}
          {error && !confirmPassword && (
            <span className="inputError">Enter Conform password</span>
          )}
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            className="inputField"
            placeholder="Enter Restaurant Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && !name && (
            <span className="inputError">Enter Restaurant name</span>
          )}
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            className="inputField"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {error && !city && <span className="inputError">Enter city </span>}
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            className="inputField"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {error && !address && (
            <span className="inputError">Enter Address </span>
          )}
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            className="inputField"
            placeholder="Enter Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          {error && !contact && (
            <span className="inputError">Enter Contact number</span>
          )}
        </div>
        <div className="inputWrapper">
          <button onClick={handleSignup} className="button">
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
