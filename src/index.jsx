import React,{useEffect}from "react";
import backgroundImage from "./logos/FlavourFiend.jpg";
import { useNavigate } from "react-router-dom";
const IndexPage = () => {
  const navigate =useNavigate();
  useEffect(() =>{
    const timer =setTimeout(() =>{
      navigate("/next");
    },7000)
    return () => clearTimeout(timer);
  },[navigate]);

  return(
    <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw", // Full viewport width
      height: "100vh", // Full viewport height
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover", // Ensures the image covers the screen
      backgroundPosition: "center", // Centers the image
      backgroundRepeat: "no-repeat", // Prevents tiling
    }}
    />
  );
  }

export default IndexPage;
