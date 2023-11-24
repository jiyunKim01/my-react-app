//ORGNISMS 단위(3)

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import innogridImg from "../assets/innogrid.png";
import { motion } from "framer-motion";
import "../css/TopMenuStyle.css"; // 추가된 줄
import TopMenus from "./TopMenus";
import Logo from "../PageComponent/Logo";
import UiToggleSwitch from "../PageComponent/UiToggleSwitch";
import TopMenuAdd from "../PageComponent/TopMenuAdd";
import InfoPages from "./InfoPages";


function Top() {
  const menus = ["Iphone", "Flip", "Galaxy"];
  const menuStyle = "Top";

  return (
    <>{UiToggleSwitch()}
      <TopMenus 
      menus={menus}
		  menuStyle={menuStyle}
      />
      {Logo()}
      {/* {TopMenuAdd()} */}
    </>
  );
}

export default Top;
