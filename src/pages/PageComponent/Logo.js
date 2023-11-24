
//배열을 받아서 버튼으로 출력하는 컴포넌트

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import innogridImg from "../assets/innogrid.png";
import { motion } from "framer-motion";
import "../css/TopMenuStyle.css"; // 추가된 줄


function Logo(){
    const navigate = useNavigate();
    const onClickImage = () => {
        // 이미지 클릭 시 상위 경로로 이동
        navigate("../");
      };
return (
  <>
  <div className ="TopHeader3" onClick={onClickImage}>
        <img className="image" src={innogridImg} alt="Innogrid" />
      </div>
  </>
);
}


export default Logo;