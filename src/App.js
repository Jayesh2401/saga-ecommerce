import './App.css';
import { HashRouter , Routes, Route } from "react-router-dom";
import FormExample from './FormExample';
import Product from './Product';
import Main from './Main';
import AllHeadphone from './AllHeadphone';
import AddData from './AddData';
import Edit from './Edit';
import Addedproducts from './Addedproducts';


function App() {
  return (
    <>
      <HashRouter>
          <Routes>
            <Route path="/" element={<Main/>} />
            {/* <Route path="/" element={<AddData/>} /> */}
            {/* <Route path="/" element={<Edit/>} /> */}


            <Route path="/cart" element={<Addedproducts/>} />
            <Route path="/showroom" element={<AllHeadphone/>} />
            <Route path="/client"  element={<Edit/>}/>
            <Route path="/product" element={<Product/>} />
          </Routes>
      </HashRouter>
    </>
  );
}

export default App;
