import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {
  USERDATAS,
  ADDITEMTOCARTS,
  REMOVEITEMTOCARTS,
} from "./Redux/user/userAction";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";

function AddData() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setProimage] = useState();
  const [category, setCategory] = useState("");
  // const [stock, setStock] = useState();
  const [allData, setAlldata] = useState([]);

  const reduxData = useSelector((state) => state?.dataCame) || [];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

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
    let id = Math.floor(Math.random() * 100 + 1);
    let counter = 0;
    e.preventDefault();
    dispatch(
      USERDATAS([...reduxData, { id, counter, name, price, image, category }])
    );
    // dispatch(ADDITEMTOCARTS(0))
    setName("");
    setPrice(0);
    setCategory("");
    // setStock();
    document.getElementById("uploadImageId").value = "";
    handleClose();
  };
  return (
    <>
      <Button style={{backgroundColor:"#d6c4e6" ,color:"black"}} onClick={handleShow}>
        Add Products
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form className="pt-4  rounded" onSubmit={(e) => SubmitHandler(e)}>
          <Form.Group>
            <Form.Label className="ml-5">Enter Your Product</Form.Label>
            <Form.Control
              required
              type="text"
              value={name}
              placeholder="Product Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="ml-5">Category of product</Form.Label>
            <Form.Control
              required
              type="text"
              value={category}
              placeholder="Product Name"
              onChange={(e) => setCategory(e.target.value)}
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
          {/* <Form.Group className="pt-2">
          <Form.Label>stock of product</Form.Label>
          <Form.Control
            required
            type="number"
            value={stock}
            min={0}
            placeholder="Product Price"
            onChange={(e) => setStock(e.target.value)}
          />
        </Form.Group> */}
          <Form.Group>
            <Form.Label>Select Your Product</Form.Label>
            <Form.Control
              required
              type="file"
              id="uploadImageId"
              // value={image}
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
      </Modal>
    </>
  );
}

export default AddData;
