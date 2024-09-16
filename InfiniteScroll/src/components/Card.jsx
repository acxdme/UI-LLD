import {useState,useEffect} from "react";
import "../App.css"
const Card = ({info}) =>{
    // console.log(info);

    return (
       <div className="ImageBox">
           <img src={`${info.url}`}  className="cardImage"/>
       </div>
    )

}

export default Card;