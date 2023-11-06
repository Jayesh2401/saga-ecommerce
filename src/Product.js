import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  USERDATAS,
  ADDITEMTOCARTS,
  REMOVEITEMTOCARTS,
} from "./Redux/user/userAction";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

function Product() {
  const reduxData = useSelector((state) => state?.dataCame) || [];
  const counterData = useSelector((state) => state?.itemAdded) || 0;
  const dispatch = useDispatch();

  const addtoCartHandler = (e) => {
    e.counter += 1;
    dispatch(USERDATAS([...reduxData]));
    // dispatch(ADDITEMTOCARTS(counterData + 1));
  };

  const removetoCartHandler = (e) => {
    if (e.counter >= 1) {
      dispatch(ADDITEMTOCARTS(counterData - 1));
      e.counter -= 1;
      // dispatch(USERDATAS([...reduxData]));
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {reduxData.map((e, index) => {
            return (
              <div
                className="card-deck ps-4 col-md-4 pt-5 productHover"
                key={index}
              >
                <div className="card">
                  <span className="imageShow">
                    <img
                      className="card-img rounded show_img"
                      src={`${e.image}`}
                      alt="Card image cap"
                    />
                  </span>

                  <div className="card-body ">
                    <h5 className="card-title">{e.name}</h5>
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{ width: "100%" }}
                    >
                      <pre className="m-0">
                        Rs:<b>{e.price}</b>
                      </pre>
                      <div
                        className="d-flex justify-content-evenly"
                        style={{ width: "30%" }}
                      >
                        <FiMinusCircle
                          style={
                            e.counter === 0
                              ? { opacity: "0.5" }
                              : { opacity: "1" }
                          }
                          onClick={() => {
                            removetoCartHandler(e);
                          }}
                          className="plusButton"
                        />
                        <h4>{e.counter}</h4>
                        <FiPlusCircle
                          className="plusButton"
                          onClick={() => {
                            addtoCartHandler(e);
                          }}
                        />
                      </div>
                    </div>

                    <div>
                            
                    </div>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
