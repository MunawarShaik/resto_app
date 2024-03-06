const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <div>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Enter email id"
            className="inputField"
          />
        </div>
        <div className="inputWrapper">
          <input
            type="password"
            className="inputField"
            placeholder="Enter password"
          />
        </div>
        <div className="inputWrapper">
          <button className="button">Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
