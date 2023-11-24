import React, {useState} from "react";
import IMAGE_HEART_EMPTY from "../assets/heart_empty.png";
import IMAGE_HEART_FILLED from "../assets/heart_filled.png";
import "../css/HeartButtonStyle.css";

function HeartButton({label, onChange}){
  const [toggle, setToggle] = useState(false);

  const handleClick = (e) => {
    setToggle(prev => !prev);
    onChange?.call(null, toggle);
  }

  return(
    <div className = "heartButton"
      onClick={handleClick}>
        <div className = "imgButton"></div><img src={toggle ? IMAGE_HEART_FILLED : IMAGE_HEART_EMPTY} alt=""/>
        <span>{label = "좋아요"}</span>
      </div>
  )
}

export default HeartButton;