import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrAction, decrAction } from "../redux/Counter/counter.action";

let Counter = () => {
  let dispatch = useDispatch();
  let counter = useSelector((state) => {
    return state.counter;
  });
  let incrHandler = () => {
    //dispatch an redux action
    dispatch(incrAction());
  };
  let decrHandler = () => {
    //dispatch an redux action
    dispatch(decrAction());
  };
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Counter: {counter.counter}</h4>
              </div>
              <div className="card-body">
                <button className="btn btn-primary mr-5" onClick={incrHandler}>
                  Incr
                </button>
                <button className="btn btn-warning" onClick={decrHandler}>
                  Decr
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
