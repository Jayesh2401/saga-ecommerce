import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddData from "./AddData";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { ADDITEMTOCARTS,FINALCARTVIEWS, USERDATAS } from "./Redux/user/userAction";
import { useDispatch, useSelector } from "react-redux";
function Addedproducts() {
  const location = useLocation();
  const Cart = location?.state?.data ||[];
  const counterData = useSelector((state) => state?.itemAdded) || 0;
  const finalProducts = useSelector((state) => state?.finalProducts) || [];
  const reduxData = useSelector((state) => state.dataCame);
  const  count = reduxData.filter(e => e.counter)

  console.log(Cart);
  const dispatch = useDispatch();

  const addtoCartHandler = (e) => {
    e.counter += 1;
    // dispatch((FINALCARTVIEWS([...finalProducts])))
    dispatch(USERDATAS([...reduxData]));
    dispatch(ADDITEMTOCARTS(counterData + 1));
  };


  const removetoCartHandler = (e) => {

    if (e.counter >= 0) {
      dispatch(ADDITEMTOCARTS(counterData - 1));
      e.counter -= 1;
      dispatch(USERDATAS([...reduxData]));
      dispatch(FINALCARTVIEWS([...finalProducts]))
    }else{
    }
  };


  const cartHandler = () => {
    // e.counter;
    // dispatch((FINALCARTVIEWS([...finalProducts])))
    // dispatch(USERDATAS([...reduxData]));
    // dispatch(ADDITEMTOCARTS(counterData + 1));
    const  count = reduxData.filter(e => e.counter)
    dispatch(FINALCARTVIEWS(count));
  };


  let sum = 0;

// const   total = Cart.reduce((a, [{counter} ]) => a + counter, 0);
// console.log(total)
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand bg-warning rounded" onClick={()=>cartHandler()} to="/">
            <img src="/image/Group.png" alt="logo" width="90" height="24" />
          </Link>
          {/* <div>
            <BsCart4 className="rounded cartSize bg-warning" />
            <span className="counter rounded ">{Cart.length}</span>
          </div> */}
        </div>
      </nav>

      <div className="d-flex">
        <div className="w-50">
          {finalProducts.length === 0 ? (
            <h2>Please Add Items to view your cart</h2>
          ) : (
            finalProducts.map((e) => {

                const total = e.counter * e.price ;

                sum += e.counter * e.price;
                console.log(e)
                // const datas = (prev)=> prev + total  ;
                // console.log(datas,"daat");
                // return(
              return e.counter === 0 ? (
                ""
              ) : (
                <Card style={{ width: "30rem" }} key={e.id} className="mb-2">
                  <Card.Header className="text-center">
                    <b>{e.name}</b>
                    &nbsp;&nbsp;&nbsp;&nbsp;<b> Rs : {e.price}</b>
                  </Card.Header>

                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-center">
                      {" "}
                      <Card.Img variant="left" width="100" src={`${e.image}`} />
                      <Card.Text>{e.category}</Card.Text>
                      <div
                        className="d-flex justify-content-evenly"
                        style={{ width: "30%", height: "25px" }}
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
                      <br />
                    </Card.Title>
                  </Card.Body>
                </Card>
              );
            })
          )}
        </div>
        <div className="w-50 fugg">
          <Card style={{ width: "30rem" }} className="mb-2">
          <h2>     Total amount : {sum} </h2>
          </Card>
        </div>
      </div>
        {
            sum === 0 ? 
            (
                <div>
                <h2>Please visit cart to add items</h2>
                <h5><Link to='/' onClick={()=>cartHandler()}>Cart</Link></h5>
                </div>
            )
            :
            ("")
        }
    </div>
  );
}

export default Addedproducts;
