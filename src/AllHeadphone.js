import React from "react";
import data from "./AllProduct";
import { FiPlusCircle } from 'react-icons/fi';
import { BsCart4 } from 'react-icons/bs';
import { useState } from "react";
import { ADDITEMTOCARTS } from "./Redux/user/userAction";
import { useDispatch} from "react-redux";
import { Button } from "react-bootstrap";
import AddData from "./AddData";
function AllHeadphone() {
  const Allproduct = data.products;
  const dispatch = useDispatch();
  const [counter , setCounter] = useState(0);

  const addtoCartHandler = async (e)=>{
        setCounter(counter+1)
        // const data = counter ;

        // dispatch(ADDITEMTOCARTS({}));
        console.log(e)

        // console.log(data)

  } 



  return (
    <div className="bg-warning mainScreen">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand bg-warning rounded" href="/">
            <img src="/image/Group.png" alt="logo" width="90" height="24" />
          </a>
            {/* <AddData/> */}
        <div>

          <BsCart4 className="rounded cartSize bg-warning" />
          <span className="counter rounded ">{counter}</span>
        </div>
        </div>
      </nav>

      <div className="container" >
        <div className="row">
        {Allproduct.map((e) => {
          return (
           
            <div className="card-deck ps-4 col-md-4 pt-5 productHover" key={e.id}>
            <div className="card">

                <span className="imageShow">
              <img className="card-img rounded show_img"  src={`${e.image}`} alt="Card image cap"/>

                </span>

              <div className="card-body ">
                <h5 className="card-title">{e.name}</h5>
                <div className="d-flex justify-content-between align-items-center" style={{width:"100%"}}>
                <pre className="m-0">Rs:<b>{e.price}</b></pre>
                
                <FiPlusCircle className="plusButton" onClick={(e)=>addtoCartHandler(e)}/>
                </div>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              {/* <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div> */}
            </div>
            </div>
          );
        })}
        </div>
      </div>
   
    </div>
  );
}

export default AllHeadphone;
