import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LeftMenuStyle from "../css/LeftMenuStyle.css";
import TopMenus from "./TopMenus";

function LeftMenu() {
  const menus = ["Design", "Profile", "Cost"];
  const menuStyle = "Left";

  return (
    <div>
       <TopMenus 
      menus={menus}
		  menuStyle={menuStyle}
      />
    </div>
  );
}

export default LeftMenu;