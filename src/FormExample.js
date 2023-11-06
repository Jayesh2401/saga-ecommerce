import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { USERDATAS ,REMOVEITEMTOCARTS} from "./Redux/user/userAction";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";

function FormExample() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(0);
  const [proimage, setProimage] = useState();
  const [allData, setAlldata] = useState([]);
  const reduxData = useSelector((state) => state?.datacame) || [];
  const length = reduxData.length || 0;
  console.log(length, "reduxdata");
  const dispatch = useDispatch();
  //   var data = [];

  const onchange = (e) => {
    var files = e.target.files;
    for (var i = 0, f; (f = files[i]); i++) {
      var reader = new FileReader();

      reader.onload = function (e) {
        setProimage(e.target.result);
      };
      reader.readAsDataURL(f);
    }
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    // data = [
    //   ...data,
    //   {
    //     product,
    //     price,
    //     proimage,
    //   },
    // ];

    dispatch(USERDATAS([...reduxData, { product, price, proimage }]));
    // setAlldata(data)

    // setAlldata((prev) =>[
    //     ...prev , {
    //         product,
    //         price,
    //         proimage
    //     }
    // ])

    setProduct("");
    setPrice(0);

    document.getElementById("uploadImageId").value = "";
  };

  const removeData = (e) => {
    // dispatch(REMOVEDATAS());
    dispatch(REMOVEITEMTOCARTS())
    setAlldata([]);
  };

  console.log(allData, "rger");

  return (
    <div className="d-flex ">
      {length === 0 ? (
        <div className="img_cart">
            <img className="cartimg" src="image/cart.png" alt="cart"/>
            <div className="back">

            </div>
        </div>
      ) : (
        <div
          className="border border-secondary position-relative  rounded"
          style={{ width: "25px", height:"25px" ,background: "grey" }}
        >
          <Link to="/product" className="" >
            <BsCartPlus style={{ color: "white" }} />
          </Link>
        </div>
      )}

      <Form
        className="pt-4 border border-primary rounded"
        onSubmit={(e) => SubmitHandler(e)}
      >
        <Form.Group>
          <Form.Label className="ml-5">Enter Your Product</Form.Label>
          <Form.Control
            required
            type="text"
            value={product}
            placeholder="Product Name"
            onChange={(e) => setProduct(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="pt-2">
          <Form.Label>Price Of product</Form.Label>
          <Form.Control
            required
            type="number"
            value={price}
            min={0}
            placeholder="Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Select Your Product</Form.Label>
          <Form.Control
            required
            type="file"
            id="uploadImageId"
            // value={proimage}
            placeholder="Select Product"
            onChange={(e) => onchange(e)}
          />
        </Form.Group>
        <div className="col text-center">
          <Button type="submit" className="mb-1 mt-3">
            Submit Form
          </Button>
        </div>
      </Form>
      <div>
        <Button
          className="btn btn-danger"
          type="button"
          style={{ marginTop: "2rem" }}
          onClick={(e) => removeData(e)}
        >
          Remove redux
        </Button>
      </div>
    </div>
  );
}

export default FormExample;
