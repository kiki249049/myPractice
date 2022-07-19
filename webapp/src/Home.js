import React from "react";
import "./Home.css"
import Product from "./Product";

function Home(){
  return (
    <div className="Home">
      <div className="Home-container">
        <img className="home_image" src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg" alt=""/>
        <div className="home_row">
          <Product></Product>
        </div>
        <div className="home_row">
          <Product></Product>
        </div>
        <div className="home_row">
          <Product></Product>
        </div>
      </div>
    </div>
  )
}


export default Home