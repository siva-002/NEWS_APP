import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {useParams} from "react-router-dom"
const Home = () => {
    const {page}=useParams()
    const [newsname,setnewsname]=useState(page)
    useEffect(()=>{
     setnewsname(page)
     console.log(page)
    },[page])
  return (
    <div className="col-md-8 offset-md-2  mt-1" style={{position:"relative"}}>
      <h4 className="text-center badge text-bg-primary " style={{position:"absolute",right:"50px",top:"10px"}}>
        {newsname?newsname.toUpperCase(): "TECHNOLOGY"}
      </h4>
      <Navbar />
    </div>
  );
};

export default Home;
