import React, { useRef } from "react";
let Login = () => {
  let buttonRef = useRef(null);
  let h1Ref = useRef(null);
  let clickHandler = (event) => {
    console.log(buttonRef.current);
    event.preventDefault();
    buttonRef.current.disabled = false;
    h1Ref.current.innerHTML = "Hello";
    console.log(h1Ref.current);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <form action="">
              <div className="form-group">
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={clickHandler}
                />
                Terms & Conditions
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="login"
                  ref={buttonRef}
                  className="btn btn-primary"
                  disabled
                />
              </div>
            </form>
            <h4 ref={h1Ref}>HEllo, Good Morning</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
