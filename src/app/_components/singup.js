const Signup = () => {
  return (
    <>
      <h1>SignUp</h1>
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
          <input
            type="password"
            className="inputField"
            placeholder="Confirm password"
          />
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            className="inputField"
            placeholder="Enter Restaurant Name"
          />
        </div>
        <div className="inputWrapper">
          <input type="text" className="inputField" placeholder="Enter City" />
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            className="inputField"
            placeholder="Enter Contact Number"
          />
        </div>
        <div className="inputWrapper">
          <button className="button">Signup</button>
        </div>
      </div>
    </>
  );
};

export default Signup;
