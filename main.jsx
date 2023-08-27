import React from "react";
import { ReactDOM } from "react";
const Main = () => {
    return ( 
        <>
        <main className="hero container">
          <div className="hero-content">
        <h1>YOUR FEEL DESERVE THE BEST</h1>
        <p>YOUR FEEL DESERVE THE BEST WE'RE HERE TO <br /> YOU WITH OUR SHOES.YOUR FEET DESERVE 
          THE BEST AND WE'RE TO,HELP YOU WITH OUR.SHOES</p>
          <div className="hero-btn">
            <button>Category</button>
            <button className="secodary-btn">Shop Now</button>
          </div>
          <div className="shop">
           <p>Available on </p>
           <div className="brand-image">
            <img src="images/mesho.png" alt="" />
            <img src="images/flipcad.jpeg" alt=""></img>
           </div>
          </div>
         </div>
          <div className="hero-image">
     <img src="images/image2.avif" alt="" />
          </div>
        </main>
       
        </>
     );
}
 
export default Main;