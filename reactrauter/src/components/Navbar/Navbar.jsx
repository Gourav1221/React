import { Link } from "react-router-dom";
// import { Home } from "../Home/Home";
// import { Section } from "../Section/Section";
// import { Home } from "./components/Home";

import {Home} from "../Home";
import {LoginSignUp} from "../LoginSignUp";
import {Product} from "../Product";

export const Navbar = () => {
  return (
    <>
      <div className="navbar" style={{display: 'flex', justifyContent: 'space-evenly'}}>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}

        <button className="home"><Link to="/" element={<Home />}>Home</Link></button> 
        <button className="home"><Link to="/product" element={<Product />}>Product</Link></button> 
        <button className="home"><Link to="/loginsignup" element={<LoginSignUp />}>Login / sign up</Link></button> 
        {/* <button className="history"><Link to="/section/history" element={<Section/>}>History</Link></button> */}
        {/* <button className="Mystery"><Link to="/section/Mystery" element={<Section/>}>Mystery</Link></button> */}
        {/* <button className="Mythology"><Link to="/section/Mythology" element={<Section/>}>Mythology</Link></button> */}
        {/* <button className="Technology"><Link to="/section/Technology" element={<Section/>}>Technology</Link></button>  */}
      </div>
    </>
  );
};
