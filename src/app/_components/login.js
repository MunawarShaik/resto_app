import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    console.log(email, password);

    if (!email || !password) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
  };
  return (
    <>
      <h1>Login</h1>
      <div>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Enter email id"
            className="inputField"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && !email && (
            <span className="inputError">Enter valid email</span>
          )}
        </div>
        <div className="inputWrapper">
          <input
            type="password"
            className="inputField"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && !password && (
            <span className="inputError">Enter valid password</span>
          )}
        </div>
        <div className="inputWrapper">
          <button className="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
