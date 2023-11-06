import React, { useState ,useEffect} from 'react'
import { BsCart4 } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import {
  USERDATAS,
  ADDITEMTOCARTS,
  FINALCARTVIEWS,
} from "./Redux/user/userAction";
import { Link, useNavigate } from 'react-router-dom';
import AddData from './AddData';
import Product from './Product';
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
function Edit() {

  const navigate = useNavigate()
  const reduxData = useSelector((state) => state.dataCame) || [];
  const counts = useSelector((state)=>state.finalProducts) || 0;
  const [count , setCount] =useState([])
    const counterData = useSelector((state)=> state.itemAdded) || 0;
    // const count = reduxData.filter(e => e.counter)
    // let count = 0;
        const dispatch = useDispatch();

        useEffect(() => {
          setCount(counts)
        }, [counts])
        
       console.log(count)
        

  const addtoCartHandler = (e) => {
    e.counter += 1;
    dispatch(USERDATAS([...reduxData]));
    dispatch(ADDITEMTOCARTS(counterData + 1));
  };

  const removetoCartHandler = (e) => {
    if (e.counter >= 1) {
      dispatch(ADDITEMTOCARTS(counterData - 1));
      e.counter -= 1;
      dispatch(USERDATAS([...reduxData]));
      }
  };


  const addtoCart = () =>{
    const  count = reduxData.filter(e => e.counter)
    dispatch(FINALCARTVIEWS(count));
    // setCount(reduxData.filter(e => e.counter).length)
}

    const Data = ()=>{
        // navigate('/cart' , { state: { data : count} })
        navigate('/cart' )

    }

  return (
    <div className=" container-fluid p-0 mainScreen">
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand bg-warning rounded" to="/">
          <img src="/image/Group.png" alt="logo" width="90" height="24" />
        </Link>
          <AddData/>
      <div onClick={()=>Data()}>
        <BsCart4 className="rounded cartSize bg-warning" />
        <span className="counter rounded ">{count.length}</span>
      </div>
      </div>
    </nav>

    {/* <Product/> */}

    <div className="container-fluid" style={{minHeight: "743px" ,backgroundColor: "bisque"}}>
        <div className="row">
          {reduxData.map((e, index) => {
            return (
              <div
                className="card-deck ps-4 col-md-3 col-sm-6 col-xs-2 pt-5 productHover"
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
                      <h5><b>₹: {e.price}</b></h5>
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

                    <div className="text-center" >
                      <button className="rounded-2" style={{
  backgroundColor: "#d6c4e6"

                      }}onClick={()=>addtoCart()}>Add to Cart</button>
                    </div>

                    <div>
                            
                    </div>
                    {/* <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  )
}

export default Edit