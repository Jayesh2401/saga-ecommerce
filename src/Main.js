import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const [toggles, setToggle] = useState(false);
  const navigate = useNavigate();

  const ProductHandler = () => {
    navigate("/showroom");
  };

  const SellerHandler = () => {
    navigate("/client");
  };

  return (
    <div className="container-fluid img_wel ">
      <div className="d-flex ">
        <div className="centyer">
          <h1 className="">Welcome To Headset market</h1>
          <pre className="">
            Its always upon <b>us</b> what <b>we</b> choose{" "}
          </pre>
          <h3>So, what are you here?</h3>
          <div className="form-check form-switch">
            <label>
              {toggles ? (
                <h2
                  style={{
                    position: "relative",
                    right: "100px",
                    opacity: "0.3",
                  }}
                >
                  USER
                </h2>
              ) : (
                <h2 style={{ position: "relative", right: "100px" }}>USER</h2>
              )}
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              id="mySwitch"
              name="darkmode"
              style={{ zIndex: "999" }}
              //   value={toggles}
              onChange={(e) => setToggle(e.target.checked)}
            />
            {toggles ? (
              <h2
                style={{
                  position: "relative",
                  bottom: "45px",
                  left: "60px",
                }}
              >
                SELLER
              </h2>
            ) : (
              <h2
                style={{
                  position: "relative",
                  bottom: "45px",
                  left: "60px",
                  opacity: "0.3",
                }}
              >
                SELLER
              </h2>
            )}
          </div>
          {toggles ? (
            <>
              <div>
                <pre>Hii, thanks for taking step forward!!</pre>
                <pre>
                  Wish we gonna go far <b>Together</b> and <b>Grow</b>
                </pre>

                <h6>Please click below to add your products</h6>
                <button
                  className="rounded user_product"
                  onClick={() => SellerHandler()}
                >
                  Add Products
                </button>
              </div>

              <div className="para">
                <h5>
                  Be the Owner of our own <b className="text-success">Will </b>;
                </h5>
                {/* <h3>
                  your <b className="text-primary">Day</b>,
                </h3>
                <h1>
                  Even your<b className="text-danger"> Life</b>
                </h1> */}
              </div>
            </>
          ) : (
            <>
              <div>
                <pre>Please click to view products</pre>
                <button
                  className="rounded user_product"
                  onClick={() => ProductHandler()}
                >
                  View products
                </button>
              </div>

              <div className="para">
                <h5>
                  what you hear can change your{" "}
                  <b className="text-success">mood </b>;
                </h5>
                <h3>
                  your <b className="text-primary">Day</b>,
                </h3>
                <h1>
                  Even your<b className="text-danger"> Life</b>
                </h1>
              </div>
            </>
          )}
        </div>
        <div className="sideTitle">
          <h2 className="headphone">
            Create Your own way <br />
          </h2>
          <p className="headphone">Technology makes our work easy right!!!</p>
          <pre className="headphone ">
            Use them for someone <b>GOODNESS</b>{" "}
          </pre>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6 text-center"> */}
      {/* <img src="image/welcome.jpg" className="rounded welcome" alt=""/> */}
      {/* </div>
        <div className="col-sm-6 col-md-6 col-lg-6">hi</div> */}
      {/* </div> */}
    </div>
  );
}

export default Main;
